import { execFileSync } from "node:child_process";
import { existsSync, readlinkSync, realpathSync } from "node:fs";
import { platform } from "node:os";
import { setTimeout as delay } from "node:timers/promises";

const projectRoot = realpathSync(process.cwd());
const currentPid = process.pid;

function run(command, args) {
  try {
    return execFileSync(command, args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return "";
  }
}

function listProcesses() {
  const args = platform() === "darwin"
    ? ["-axo", "pid=,ppid=,command="]
    : ["-eo", "pid=,ppid=,command="];

  return run("ps", args)
    .split("\n")
    .map((line) => {
      const match = line.trim().match(/^(\d+)\s+(\d+)\s+(.+)$/);
      if (!match) return null;
      return {
        pid: Number(match[1]),
        ppid: Number(match[2]),
        command: match[3],
      };
    })
    .filter(Boolean);
}

function cwdFor(pid) {
  if (platform() === "darwin") {
    const output = run("lsof", ["-a", "-p", String(pid), "-d", "cwd", "-Fn"]);
    const cwdLine = output.split("\n").find((line) => line.startsWith("n"));
    return cwdLine ? cwdLine.slice(1) : "";
  }

  const cwdPath = `/proc/${pid}/cwd`;
  return existsSync(cwdPath) ? readlinkSync(cwdPath) : "";
}

function sameProjectProcess(processInfo) {
  if (!processInfo || processInfo.pid === currentPid) return false;
  if (!/next dev|next-server/.test(processInfo.command)) return false;

  try {
    return realpathSync(cwdFor(processInfo.pid)) === projectRoot;
  } catch {
    return false;
  }
}

async function stopProcesses() {
  const candidates = listProcesses().filter(sameProjectProcess);
  if (candidates.length === 0) return;

  for (const { pid } of candidates) {
    try {
      process.kill(pid, "SIGTERM");
    } catch {
      // Process already exited.
    }
  }

  await delay(500);

  for (const { pid } of candidates) {
    try {
      process.kill(pid, 0);
      process.kill(pid, "SIGKILL");
    } catch {
      // Process already exited.
    }
  }

  console.log(`Stopped existing Next dev server for ${projectRoot}`);
}

await stopProcesses();

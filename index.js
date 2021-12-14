#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cp = require("child_process");
const fs = require("fs");
const p = require("path");
const l = (msg) => console.log(`husky - ${msg}`);
const git = (args) => cp.spawnSync("git", args, { stdio: "inherit" });
const prompt = require("prompt-sync")();
function install(dir = ".git-hook-jira") {
  if (git(["rev-parse"]).status !== 0) {
    return;
  }
  const host_104 = "https://jira.104.com.tw";
  const username = prompt("your jira username: ");
  const hostname = prompt(`your jira hostname (${host_104}): `);
  fs.mkdirSync(p.join(dir), { recursive: true });
  fs.writeFileSync(p.join(dir, ".gitignore"), "*");
  fs.writeFileSync(p.join(dir, ".jira_username"), username);
  fs.writeFileSync(p.join(dir, ".jira_host"), hostname || host_104);
  fs.copyFileSync(p.join(__dirname, "pre-push"), p.join(".git/hooks/pre-push"));
}
install();

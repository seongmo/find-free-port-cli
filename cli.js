#!/usr/bin/env node
const fp = require("find-free-port");
const argv = require("minimist")(process.argv.slice(2));

if (!argv.p) {
  console.log("Usage: free-port -p <port> [-s <stop> -h <host> -n <num>]");
  process.exit(0);
}

const port = parseInt(argv.p, 10);
const stop = argv.s && parseInt(argv.s, 10);
const host = argv.h;
const num = argv.n && parseInt(argv.n, 10);

fp(port, stop, host, num)
  .then(ports => {
    console.log(ports.join(" "));
  })
  .catch(err => {
    console.error(err);
  });

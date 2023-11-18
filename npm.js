let chalk = require("chalk");
let figlet = require("figlet");
let cp = require("child_process");

console.log(chalk.red(figlet.textSync("# Hello HONEY")));

console.log("trying to open Calculator");
cp.execSync("calc");

// console.log("tryig to open vs code");
// cp.execSync("code");

console.log("trying to open youtube");
// cp.execSync("start chrome");
cp.execSync("start chrome https://www.youtube.com");
// cp.execSync("start chrome https://www.youtube.com/watch?v=MhXCj8E9CZU&list=RDMhXCj8E9CZU&start_radio=1");



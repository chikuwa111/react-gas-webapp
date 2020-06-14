import { echo } from "./rpc";

console.log("test");
echo("echo-test").then(console.log);

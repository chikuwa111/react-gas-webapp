import { callRPC } from "./rpc";

console.log("test");
callRPC("echo", "echo-test").then(console.log);
callRPC("square", 4).then(console.log);

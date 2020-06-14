import React from "react";
import { render } from "react-dom";

import { callRPC } from "./rpc";

render(<h1>Hello Google Apps Script!!</h1>, document.getElementById("root"));

console.log("test");
callRPC("echo", "echo-test").then(console.log);
callRPC("square", 4).then(console.log);

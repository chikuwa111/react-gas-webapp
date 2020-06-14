import { RPC } from "../gas/code";

type SuccessHandler = (value: any, obj?: Object) => void;
type FailureHandler = (error: Error, obj?: Object) => void;

type GoogleScriptRun = RPC & {
  withSuccessHandler: (handler: SuccessHandler) => GoogleScriptRun;
  withFailureHandler: (handler: FailureHandler) => GoogleScriptRun;
};

export declare const google: {
  script: {
    run: GoogleScriptRun;
  };
};

export const echo = (
  ...args: Parameters<RPC["echo"]>
): Promise<ReturnType<RPC["echo"]>> =>
  new Promise((resolve, reject) => {
    google.script.run
      .withFailureHandler(reject)
      .withSuccessHandler(resolve)
      .echo(...args);
  });

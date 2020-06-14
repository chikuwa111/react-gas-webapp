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

export const callRPC = <T extends keyof RPC>(
  rpcName: T,
  ...args: Parameters<RPC[T]>
): Promise<ReturnType<RPC[T]>> =>
  new Promise((resolve, reject) => {
    google.script.run
      .withFailureHandler(reject)
      .withSuccessHandler(resolve)
      // @ts-ignore 推論できない
      [rpcName](...args);
  });

import { RPC } from "../gas/code";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SuccessHandler = (value: any, obj?: unknown) => void;
type FailureHandler = (error: Error, obj?: unknown) => void;
type GoogleScriptRun = RPC & {
  withSuccessHandler: (handler: SuccessHandler) => GoogleScriptRun;
  withFailureHandler: (handler: FailureHandler) => GoogleScriptRun;
};

declare const google: {
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
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore 推論できない
      [rpcName](...args);
  });

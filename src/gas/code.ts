const doGet = (e: GoogleAppsScript.Events.DoGet) =>
  HtmlService.createTemplateFromFile("client/page").evaluate();

const includeAsset_ = (filename: string) =>
  HtmlService.createHtmlOutputFromFile(filename).getContent();

const echo = (text: string) => text;

export type RPC = {
  echo: typeof echo;
};

const doGet = (e: GoogleAppsScript.Events.DoGet) =>
  HtmlService.createTemplateFromFile("client/page").evaluate();

const includeAsset_ = (filename: string) =>
  HtmlService.createHtmlOutputFromFile(filename).getContent();

const echo = (text: string) => text;
const square = (num: number) => num ** 2;

export type RPC = {
  echo: typeof echo;
  square: typeof square;
};

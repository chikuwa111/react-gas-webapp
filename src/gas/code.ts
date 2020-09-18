// eslint-disable-next-line @typescript-eslint/no-unused-vars
const doGet = () =>
  HtmlService.createTemplateFromFile("client/page").evaluate();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const includeAsset_ = (filename: string) =>
  HtmlService.createHtmlOutputFromFile(filename).getContent();

const echo = (text: string) => text;
const square = (num: number) => num ** 2;

export type RPC = {
  echo: typeof echo;
  square: typeof square;
};

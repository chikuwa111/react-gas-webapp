const doGet = (e: GoogleAppsScript.Events.DoGet) =>
  HtmlService.createTemplateFromFile("client/page").evaluate();

const includeAsset_ = (filename: string) =>
  HtmlService.createHtmlOutputFromFile(filename).getContent();

module.exports = [
  {
    root: "data-extensions",
    context: "dataExtension",
    categoryType: "dataextension",
    scope: ["folders", "assets"],
  },
  {
    root: "shared-data-extensions",
    context: "sharedDataExtension",
    categoryType: "shared_dataextension",
    scope: ["folders", "assets"],
  },
  {
    root: "content-builder",
    context: "contentBuilder",
    categoryType: "asset",
    scope: ["folders", "assets"],
  },
  {
    root: "Shared Content",
    context: "sharedContent",
    categoryType: "asset",
    scope: ["folders", "assets"],
  },
  {
    root: "automation-studio",
    context: "automationStudio",
    categoryType: "automations",
    scope: ["folders", "assets"],
  },
];

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
chrome.runtime.onInstalled.addListener(() => {

});

chrome.windows.onCreated.addListener(() => {

});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  console.log('onUpdated', tabId, changeInfo);
});

chrome.tabs.onRemoved.addListener((tabId) => {
  console.log('onRemoved', tabId);
});

chrome.runtime.onMessage.addListener(
  ({ type, data }, sender, sendResponse) => {
    (async () => {
      switch (type) {
      default:
        sendResponse('Unknown');
        break;
      }
    })();

    return true;
  }
);

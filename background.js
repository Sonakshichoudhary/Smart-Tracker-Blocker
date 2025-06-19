importScripts('trackersList.js');

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: trackerUrls.some(tracker => details.url.match(tracker)) };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

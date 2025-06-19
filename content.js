// Delete tracking cookies
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "clearCookies") {
    chrome.cookies.getAll({}, function(cookies) {
      for (let cookie of cookies) {
        if (cookie.domain.includes("track") || cookie.name.match(/utm|session/)) {
          chrome.cookies.remove({ url: "http" + (cookie.secure ? "s" : "") + "://" + cookie.domain + cookie.path, name: cookie.name });
        }
      }
    });
  }
});

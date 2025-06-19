document.getElementById('clearCookies').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: "clearCookies" });
  document.getElementById('status').textContent = "Cookies cleared!";
});

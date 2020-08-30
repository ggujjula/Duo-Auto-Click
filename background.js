function injectScript(tabId){
  console.log("Injecting clicker script");

  let clickerPromise = null;
  console.log(window.frames.length);
  browser.tabs.executeScript(tabId, {"file": "clicker.js", "allFrames": true})
    .then((retval) => console.log("Clicker finished"))
    .catch((err) => console.error(err));
}

function tabUpdateCallback(tabId, changeInfo, tab){
/*
  console.log("Updated tab: " + tabId);
  console.log("Changed attributes: ");
  console.log(changeInfo);
  console.log("New tab Info: ");
  console.log(tabInfo);
*/
  if(changeInfo.status != "complete"){
    return;
  }
  setTimeout(injectScript, 1000, tabId);
}

console.log("Duo Auto-Click started");
browser.tabs.onUpdated.addListener(tabUpdateCallback, {
  urls: ["*://*.login.utexas.edu/*"]
});

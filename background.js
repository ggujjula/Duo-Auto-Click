function tabUpdateCallback(tabId, changeInfo, tab){
/*
  console.log("Updated tab: " + tabId);
  console.log("Changed attributes: ");
  console.log(changeInfo);
  console.log("New tab Info: ");
  console.log(tabInfo);
*/
  try{
    if(changeInfo.status != "complete"){
      return;
    }
    console.log("Injecting clicker script");

    let clickerPromise = null;
    console.log(window.frames.length);
    clickerPromise = browser.tabs.executeScript({
      "file": "clicker.js",
      "allFrames": true
    });

    clickerPromise.then((retval) => {
      console.log("Clicker finished");
    });
  }
  catch(err){
    console.log(err)
  }

}

console.log("Duo Auto-Click started");
try{
browser.tabs.onUpdated.addListener(tabUpdateCallback, {
  urls: ["*://*.login.utexas.edu/*"]
});
}
catch(err){
  console.log(err);
}

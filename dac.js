try{
console.log("Duo Auto-Click injected");
document.body.style.border = "5px solid red";

const duoRegexStr = ".*://.*.duosecurity.com/.*";
const duoRegex = new RegExp(duoRegexStr);
var injected = false;
var clickerPromise = null;
console.log(window.frames.length);
//for(let i = 0; i < window.frames.length; i++){
//  if(window.frames[i].src.search(duoRegexStr) != -1){
    //Inject script into iframe
    clickerPromise = browser.tabs.executeScript({
      file: "clicker.js",
      allFrames: true
    });
    injected = true;
//  }
//}
if(!injected){
  console.log("No iframe with src matching " + duoRegexStr + ".")
}
else{
  clickerPromise.then((retval) => {
    console.log("Clicker finished");
  });
}
}
catch(err){
  console.log(err)
}

var mutObs = null;

function mutationHandler(mutationList, observer){
  console.log("Fired");
  if(document.getElementByClassName("auth-button") == null){
    return;
  }
  mutObs.disconnect();
  console.log("Done waiting");
}

function attemptClick(){
  try{
    const duoRegexStr = ".*.duosecurity.com";
    const duoRegex = new RegExp(duoRegexStr);
    if(document.domain.search(duoRegex) == -1){
      console.log("Domain doesn't match");
      return;
    }
    console.log("Domain matches");
    mutObs = new MutationObserver(mutationHandler);
    mutObs.observe(document, {subtree: true, childList: true});
    console.log("Observing");
  }
  catch(err){
    console.log(err);
  }
}

console.log("Clicker injected");
attemptClick();

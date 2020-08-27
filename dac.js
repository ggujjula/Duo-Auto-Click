console.log("Duo Auto-Push injected");

var duoIframeClass = "duo_iframe";
var targetButton = "push-label";
var iframeNode = document.getElementById(duoIframeClass);
var observerConfig = { attributes: false, childList: true, subtree: true };

var iframeLoadWaiter = new MutationObserver(function(mutations){
  console.log("Called back");
  var targetButtonNode = iframeNode.getElementsByClassName(targetButton);
  if(targetButtonNode.length != 0){
    console.log("target row loaded");
    iframeLoadWaiter.disconnect();
  }
});

iframeLoadWaiter.observe(iframeNode, observerConfig);

(()=>{"use strict";let o=!1;function e(o){console.log("1111"),document.body.style.backgroundColor=o}chrome.action.onClicked.addListener((n=>{o=!o;const c=o?"orange":"white";console.log("Turning "+n.url+" orange!"),chrome.scripting.executeScript({target:{tabId:n.id?n.id:-1},func:e,args:[c]}).then()})),console.log("background script loaded")})();
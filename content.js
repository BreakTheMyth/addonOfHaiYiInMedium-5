const imageUrl = chrome.runtime.getURL('res/webBG.gif');

document.documentElement.style.backgroundImage = `url(${imageUrl})`;
document.documentElement.style.backgroundSize = "cover";
document.documentElement.style.backgroundPosition = "center";
document.documentElement.style.backgroundAttachment = "fixed";

document.body.style.opacity = "0.9";
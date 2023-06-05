//your JS code here. If required.

let browserName = navigator.appName;

let version = navigator.appVersion;


let div = document.createElement("div");
div.id = "browser-info";
div.innerText = "You are using " + browserName + " version " + version

let body = document.getElementsByTagName("body")[0];
 body.append(div);

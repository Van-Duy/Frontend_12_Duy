let elmBox = document.getElementById("box");

let str = elmBox.textContent;

let searchMask = "frontend";

str = str.replace(new RegExp(searchMask, "ig"), "<span class='hightlight'>Frontend</span>");

elmBox.innerHTML  = str;
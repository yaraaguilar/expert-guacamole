const body = document.body;
const div =  document.querySelector("div");
const spanHey = document.querySelector("#Hey");
const spanPeace = document.querySelector("#Peace");

div.removeChild(spanHey);

div.appendChild(spanHey);
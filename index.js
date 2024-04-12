let startingColor = document.getElementById("color-starting");
let endingColor = document.getElementById("color-ending");
let previewDiv = document.getElementById("preview");
let body = document.getElementsByTagName('body');
let checkBtn = document.getElementById("gen-gradient-btn");

function preview (){
previewDiv.style.background = `linear-gradient(to right ,${startingColor.value},${endingColor.value})`
};

setInterval(()=>{
    preview()
},100);

checkBtn.addEventListener('click',backgroundChange);

function backgroundChange (){
    body[0].style.background = `linear-gradient(to right ,${startingColor.value},${endingColor.value})`
};
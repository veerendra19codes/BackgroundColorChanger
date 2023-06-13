
var hexCodes = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

var code1 = hexCodes[Math.floor(Math.random()*16)];
var code2 = hexCodes[Math.floor(Math.random()*16)];
var code3 = hexCodes[Math.floor(Math.random()*16)];
var code4 = hexCodes[Math.floor(Math.random()*16)];
var code5 = hexCodes[Math.floor(Math.random()*16)];
var code6 = hexCodes[Math.floor(Math.random()*16)];

var Color = code1+code2+code3+code4+code5+code6;


var colors = ["red","blue","green"];
const btn = document.getElementById("btn");



// btn.addEventListener("click", function() {
//   var randomNumber = Math.floor(Math.random()*3);
//   var BgColor = document.body.style.backgroundColor = colors[randomNumber];
//   document.getElementById("ColorCode").innerHTML = "Color Code: " + BgColor;
// });


btn.addEventListener("click", function() {

  var code1 = hexCodes[Math.floor(Math.random()*16)];
  var code2 = hexCodes[Math.floor(Math.random()*16)];
  var code3 = hexCodes[Math.floor(Math.random()*16)];
  var code4 = hexCodes[Math.floor(Math.random()*16)];
  var code5 = hexCodes[Math.floor(Math.random()*16)];
  var code6 = hexCodes[Math.floor(Math.random()*16)];

  var Color = code1+code2+code3+code4+code5+code6;
  
  document.body.style.backgroundColor = "#" + Color;
  document.getElementById("ColorCode").innerHTML = "Color Code: #" + Color;
});
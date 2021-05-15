function myFunction3() {
  document.getElementById("loremIpsum").style.color = "red";
}
function myFunction4() {
  document.getElementById("loremIpsum").style.color = "blue";
}
function myFunction5() {
  document.getElementById("loremIpsum").style.fontSize = "8px";
}
function myFunction6() {
  document.getElementById("loremIpsum").style.fontSize = "24px";
}

function myFunction7() {
  var a = document.getElementById("replace").value;
  var b = document.getElementById("with").value;
  var c = document.getElementById("loremIpsum").innerText;
  document.getElementById("loremIpsum").innerHTML=c.replace(a,b);
}
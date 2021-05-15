function changeColor1() {
  document.getElementsByClassName("lorem")[0].style.color = 'blue';
}

function changeColor2() {
  document.getElementsByClassName("lorem")[0].style.color = "purple";
}

function changeSize1() {
  document.getElementsByClassName("lorem")[0].style.fontSize = "small";
}

function changeSize2() {
  document.getElementsByClassName("lorem")[0].style.fontSize = "x-large";
}

function textReplace() {
  var str = document.getElementById("lorem2").innerHTML;
  console.log(str);
  var target = document.getElementsByName("target")[0].value;
  console.log(target);
  var replace = document.getElementsByName("replacement")[0].value;
  console.log(replace);
  //needed to give regular expression to replace(); otherwise replace(/target/i, replace) won't work
  target = new RegExp (target, "i"); 
  var new_str = str.replace(target, replace);
  document.getElementById("lorem2").innerHTML = new_str;
}
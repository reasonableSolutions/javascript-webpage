// Your grade calculator should look something like this

function gradecalc() {  
  var e1 = document.getElementById("exam1").value;
  var e2 = document.getElementById("exam2").value;
  var e3 = document.getElementById("exam3").value;
  var e4 = document.getElementById("exam4").value;
  var sum = parseInt(e1) + parseInt(e2) + parseInt(e3) + parseInt(e4);
  sum-= Math.min(parseInt(e1), parseInt(e2),parseInt(e3), parseInt(e4));
  var avg = sum/3;
  document.getElementById("average").innerHTML = avg;

  if (avg <60) document.getElementById("letterGrade").innerHTML = "F";
  else if (avg <70) document.getElementById("letterGrade").innerHTML = "D";
  else if (avg <80) document.getElementById("letterGrade").innerHTML = "C";
  else if (avg <90) document.getElementById("letterGrade").innerHTML = "B";
  else document.getElementById("letterGrade").innerHTML = "A";
  
}




// These two functions do the same thing
// document.getElementByID returns an object reference to the identified element.
// innerHTML is an element property that gets or sets HTML or XML of the element.

function myFunction1() {
  document.getElementById("hello1").innerHTML = "Hello World";
  document.write("Hahahaha!");
  window.alert("what, me worry?");
  console.log("somebody set up us the bomb!")
}

// In the following function, elementToChange holds the object reference.
function myFunction2() {
  var elementToChange = document.getElementById("hello2");
  elementToChange.innerHTML = "Hello World";
}
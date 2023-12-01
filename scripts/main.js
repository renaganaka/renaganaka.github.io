var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/alyans.jpg") {
    myImage.setAttribute("src", "images/rustam.jpg");
  } else {
    myImage.setAttribute("src", "images/alyans.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Введи имя еблан.");
    localStorage.setItem("имя", myName);
    myHeading.textContent = "Альянс сосать, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Альянс сосать, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
  
  
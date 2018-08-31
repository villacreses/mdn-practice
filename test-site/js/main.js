var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function () {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'img/firefox-logo.png') {
    myImage.setAttribute('src', 'img/dinner.jpg');
  } else {
    myImage.setAttribute('src', 'img/firefox-logo.png');
  }
};

var myButton = document.querySelector('button');

function setUserName () {
  var myName = prompt('Please enter your name: ');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
  setUserName();
};

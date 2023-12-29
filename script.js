// script.js
function getRandomColor() {
  // Generating a random color in hexadecimal format
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackgroundColor() {
  const body = document.querySelector('body');
  const newColor = getRandomColor();
  body.style.backgroundColor = newColor;
}

// Change background color every 5 seconds (5000 milliseconds)
setInterval(changeBackgroundColor, 5000);

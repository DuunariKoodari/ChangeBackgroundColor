//muuttujat
const ColorButton = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'blue', 'yellow', 'pink', 'green', 'purple'];

ColorButton.addEventListener('click', changeBackgroundColor);

//Värin vaihto funktio
function changeBackgroundColor() {
  let colorIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
  console.log(colorIndex);
}

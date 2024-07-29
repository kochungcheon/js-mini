const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function getRandomNum() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function() {
  var nowColor = '#';
  for (var i=0; i<6; i++) {
    console.log(getRandomNum());
    nowColor += hex[getRandomNum()];
  }

  document.body.style.backgroundColor = nowColor;
  color.textContent = nowColor;
})
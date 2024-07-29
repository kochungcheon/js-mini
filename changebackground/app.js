const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function() {
  const randomNum = getRandomNum(colors.length);
  const nowColor = colors[randomNum];
  document.body.style.background = nowColor;
  color.textContent = nowColor;
})

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
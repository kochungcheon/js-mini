let count = 0;

const btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.btn.reset');
const increaseBtn = document.querySelector('.btn.increase');

let counter = document.querySelector("#counter"); 

btns.forEach( (btn) => {
  btn.addEventListener("click", (e) => {
    const type = e.currentTarget.classList;
    if (type.contains("decrease")) {
      count--;
    } else if (type.contains("increase")) {
      count++;
    } else if (type.contains("reset")) {
      count = 0;
    }

    counter.textContent = count;
    if (count == 0) {
      counter.style.color = "black";
    } else if (count < 0) {
      counter.style.color = "red";
    } else if (count > 0) {
      counter.style.color = "blue";
    }
  })
})






let count = 0;

const decreaseBtn = document.querySelector('.btn.decrease');
const resetBtn = document.querySelector('.btn.reset');
const increaseBtn = document.querySelector('.btn.increase');

let counter = document.getElementById("counter"); 

resetBtn.addEventListener('click', function() {
  counter.textContent = count = 0;
});

increaseBtn.addEventListener('click', function() {
  counter.textContent = ++count;
});

decreaseBtn.addEventListener('click', function() {
  counter.textContent = --count;
});






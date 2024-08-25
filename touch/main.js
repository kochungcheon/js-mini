
const util = document.querySelector("#util");
console.log(util);

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('clientSide') === 'right') {
    util.classList.add("started_right");
  } else {
    util.classList.add("started_left");
  }
  localStorage.removeItem('clientSide');
})

util.addEventListener("click", ()=> {
  if (util.classList.contains("started_left")) {
      util.classList.remove("started_left");
      util.classList.add("started_right");
  } else {
    util.classList.remove("started_right");
    util.classList.add("started_left");
  }
})
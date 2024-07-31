// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
// select items
const personImg = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const preBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// size
const size = reviews.length;
// set starting item
let pointer = 0;

// load initial item
window.addEventListener('DOMContentLoaded', () => {
  showPerson(pointer);
});

// show next person
nextBtn.addEventListener('click', () => {
  pointer++;
  if (pointer >= size) {
    pointer = 0;
  }
  console.log(pointer);
  showPerson(pointer);
});

// show prev person
preBtn.addEventListener('click', () => {
  pointer--;
  if (pointer < 0) {
    pointer = size - 1;
  }
  console.log(pointer);
  showPerson(pointer);
});

// show random person
randomBtn.addEventListener('click', () => {
  let randomNum = pointer;
  // 이전 정보와 동일하지 않은 정보를 제공하기 위해
  while (pointer === randomNum) {
    randomNum = Math.floor(Math.random() * size);
  }
  pointer = randomNum;
  console.log(pointer);
  showPerson(pointer);
});

// show person based on item
function showPerson(idx) {
  const item = reviews[idx];
  personImg.src =  item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

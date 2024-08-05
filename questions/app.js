const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const questionBtn = question.querySelector(".question-btn");

  questionBtn.addEventListener("click", () => {

    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    
    question.classList.toggle("show-text");
  });
});
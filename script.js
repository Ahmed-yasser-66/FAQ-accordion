const buttons = document.querySelectorAll('.down-btn');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const question = questions[index];
    const answer = answers[index];

    if (!question.classList.contains('active')) {
      questions.forEach((q, i) => {
        if (i !== index) {
          q.classList.remove('active');
          buttons[i].classList.remove('rotate');
          answers[i].style.maxHeight = '0';
        }
      });
    }

    question.classList.toggle('active');
    button.classList.toggle('rotate');

    if (question.classList.contains('active')) {
      answer.style.maxHeight = '70px';
    } else {
      answer.style.maxHeight = '0';
    }
  });
});

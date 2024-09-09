//   пошук форми

const inputForm = document.querySelector('.feedback-form');
inputForm.addEventListener('input', () => {
  //  очистити від пробілів
  inputForm.value.trim();
});

const feedbackEmail = localStorage.setItem('feedback-form-state', 'light');
console.log(localStorage);

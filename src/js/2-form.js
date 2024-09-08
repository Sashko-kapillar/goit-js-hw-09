//   пошук форми

const inputForm = document.querySelector('.feedback-form input');
inputForm.addEventListener('input', () => {
  //  очистити від пробілів
  const textEmail = inputForm.value.trim();
});

const feedbackEmail = localStorage.setItem('feedback-form-state', 'light');
console.log(localStorage);

//   пошук форми

const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const storedData = localStorage.getItem('feedback-form-state');

if (storedData) {
  const parsedData = JSON.parse(storedData);
  formData = parsedData;
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  alert('Форма успішно відправлена!');

  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});

const formData = {
  email: '',
  message: '',
};

let form = document.querySelector('.feedback-form');

// Завантаження даних з локального сховища при завантаженні сторінки
const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
  const parsedData = JSON.parse(storedData);
  formData = parsedData;
  form.elements.email.value = parsedData.email;
  form.elements.message.value = parsedData.message;
}

// Відстеження змін у формі та збереження даних в локальному сховищі
form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обробка відправки форми
form.addEventListener('submit', event => {
  event.preventDefault();

  // Валідація даних
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Надсилання даних (замінено на виведення повідомлення для демонстрації)
  console.log('Дані для відправки:', formData);
  alert('message is go');

  // Очищення даних
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});

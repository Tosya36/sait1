// Получаем элементы страницы
const homeSection = document.getElementById('homeSection');
const aboutSection = document.getElementById('aboutSection');
const contactSection = document.getElementById('contactSection');
const contactForm = document.getElementById('contactForm');

// Функция для отображения секции
function showSection(section) {
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    
    section.style.display = 'block';
}

// Обработчики событий для навигации
document.getElementById('aboutLink').onclick = function() {
    showSection(aboutSection);
};

document.getElementById('contactLink').onclick = function() {
    showSection(contactSection);
};
contactForm.onsubmit = function(event) {
    event.preventDefault(); // предотвращаем отправку формы
    alert("Форма отправлена!"); // выводим сообщение
    contactForm.reset(); // очищаем форму
};

// Отображаем домашнюю секцию по умолчанию
showSection(homeSection);
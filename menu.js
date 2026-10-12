// Эта функция создает HTML-код нашего меню и вставляет его на страницу
function renderMenu() {
    // 1. Описываем HTML-код нашего меню со всеми ссылками
    const menuHTML = `
        <a href="index.html">Главная страница</a>
        <a href="Page_2.html">Таблицы</a>
        <a href="Forms.html">Формы</a>
    `;

    // 2. Находим на странице элемент, в который мы хотим поместить меню
    // Мы будем использовать тег <nav> с идентификатором "main-menu"
    const menuContainer = document.getElementById('main-menu');

    // 3. Если такой контейнер найден на странице, вставляем в него наши ссылки
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    } else {
        console.log('Контейнер для меню не найден!');
    }
}

// Указываем браузеру запустить функцию renderMenu только после того, 
// как вся страница (HTML) полностью загрузится
document.addEventListener('DOMContentLoaded', renderMenu);
function renderMenu() {
    // Формируем меню из кнопок вместо обычных ссылок
    const menuHTML = `
        <button onclick="window.location.href='index.html'">Главная страница</button>
        <button onclick="window.location.href='Page_2.html'">Таблицы</button>
        <button onclick="window.location.href='Forms.html'">Формы</button>
        <button onclick="window.location.href='practice5.html'">Задание №5</button>
        <button onclick="window.location.href='Ex4.html'">ПР №9 Задание 1</button>
        <button onclick="window.location.href='Ex5.html'">ПР №9 Задание 2</button>
        <button onclick="window.location.href='Ex6.html'">ПР №9 Задание 3</button>
        <button onclick="window.location.href='Ex7.html'">ПР №9 Задание 4</button>
        <button onclick="window.location.href='Ex8.html'">ПР №9 Задание 5</button>
        <button onclick="window.location.href='song.html'">Музыка и видео</button>
        <button onclick="window.location.href='Pr10.html'">ПР №10</button>
        <button onclick="window.location.href='rect.html'">Прямоугольник с кнопочками</button>
        <button onclick="window.location.href='map.html'">Карта</button>
    `;

    const menuContainer = document.getElementById('main-menu');

    // Проверяем, существует ли контейнер, и вставляем в него кнопки
    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    } else {
        console.log('Контейнер для меню не найден!');
    }
}

// Запускаем функцию построения меню после полной загрузки страницы
document.addEventListener('DOMContentLoaded', renderMenu);
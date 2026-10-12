function renderMenu() {
    const menuHTML = `
        <a href="index.html">Главная страница</a>
        <a href="Page_2.html">Таблицы</a>
        <a href="Forms.html">Формы</a>
    `;

    const menuContainer = document.getElementById('main-menu');

    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    } else {
        console.log('Контейнер для меню не найден!');
    }
}

document.addEventListener('DOMContentLoaded', renderMenu);
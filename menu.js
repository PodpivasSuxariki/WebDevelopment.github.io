function renderMenu() {
    const menuHTML = `
        <a href="index.html">Главная страница</a>
        <a href="Page_2.html">Таблицы</a>
        <a href="Forms.html">Формы</a>
		<a href="practice5.html">Задание №5</a>
		<a href="Ex4.html">ПР №9 Задание 1</a>
		<a href="Ex5.html">ПР №9 Задание 2</a>
		<a href="Ex6.html">ПР №9 Задание 3</a>
		<a href="Ex7.html">ПР №9 Задание 4</a>
		<a href="Ex8.html">ПР №9 Задание 5</a>
		<a href="Song.html">Музыка и видео</a>
    `;

    const menuContainer = document.getElementById('main-menu');

    if (menuContainer) {
        menuContainer.innerHTML = menuHTML;
    } else {
        console.log('Контейнер для меню не найден!');
    }
}

document.addEventListener('DOMContentLoaded', renderMenu);
'use strict';
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Трудно быть богом"
    ]
};

const delPromo = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

delPromo.forEach(item => {
    item.remove();
});

genre.textContent = 'Драма';

poster.style.backgroundImage = "url('img/bg.jpg')";

movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((films, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${films}
        <div class="delete"></div>
    </li>
    `;
});

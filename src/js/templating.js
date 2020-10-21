import itemsTemplate from '../templates/menu-items.hbs';
import meals from '../menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(meals);
galleryRef.insertAdjacentHTML('beforeend', markup);
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = createMurkup(galleryItems);

function createMurkup() {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
      <a class="gallery-link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('')
  }
gallery.insertAdjacentHTML('beforeend', markup);
  
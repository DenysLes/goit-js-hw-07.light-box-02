import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerItemsGalleryEl = document.querySelector(".gallery");
console.log(containerItemsGalleryEl);

const markupCardsOfGalleryEl = galleryItems.map(({ preview, original, description }) => {
  return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
});
containerItemsGalleryEl.insertAdjacentHTML('beforeend', markupCardsOfGalleryEl.join(''));
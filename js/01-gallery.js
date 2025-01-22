import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const containerItemsGalleryEl = document.querySelector(".gallery");
console.log(containerItemsGalleryEl);
const markupCardsOfGalleryEl = createMurkup(galleryItems);
  console.log(markupCardsOfGalleryEl);
function createMurkup (galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      return `<li class="gallery_item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery_image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width = 100%
    />
  </a>
</li>`
    }).join('');
}
createMurkup(galleryItems);

containerItemsGalleryEl.insertAdjacentHTML("beforeend", markupCardsOfGalleryEl);
  
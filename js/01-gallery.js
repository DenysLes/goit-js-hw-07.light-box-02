import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const markup = createMurkup(galleryItems);

function createMurkup() {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">

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
gallery.addEventListener("click", handelEventClick);

function handelEventClick(event) {
  event.preventDefault();
 
  if (event.target.nodeName !== 'IMG') {
    return;
  }
    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600" />`,

    {
      onShow: () => {
        window.addEventListener('keydown', onKeydownEsc);
      },
      onClose: () => {
        window.removeEventListener('keydown', onKeydownEsc);
      },
    },
  );

  // instance.show();

  const onKeydownEsc = event => {
    console.log(event.code);
    if (event.code === 'Escape') {
      instance.close();
    }
  };
  // window.addEventListener('keydown', onKeydownEsc);
  // window.removeEventListener('keydown', onKeydownEsc);

  instance.show();

}
  
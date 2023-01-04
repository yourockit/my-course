import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);
gallery.addEventListener('click', onGalleryCardClick);

function createGalleryCardMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join("");
};

function onGalleryCardClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    };

    const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}">`, {
            onShow: (instance) => {
                window.addEventListener("keydown", onCloseEsc);
            },
            onClose: (instance) => {
                window.removeEventListener("keydown", onCloseEsc);
            },
        }
    );

    function onCloseEsc(evt) {
        if (evt.code === "Escape") {
            instance.close();
        } else {
            return;
        }
    }
    instance.show();
    return instance;
};
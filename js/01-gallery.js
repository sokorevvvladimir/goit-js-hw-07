import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

const galleryPic = galleryItems.map((galleryItem) =>
`<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`).join("");

gallery.insertAdjacentHTML("afterbegin", galleryPic);


const openOriginal = function (event) {
    
    const instance = basicLightbox.create(`<img scr="${event.target.dataset.source}" alt="${event.target.alt}" width="800" height="600"/>`);
    instance.show();
    
    event.preventDefault();
};

gallery.addEventListener("click", openOriginal);

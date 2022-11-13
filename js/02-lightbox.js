import { galleryItems } from "./gallery-items.js";
// Change code below this line
const GALLERY_WRAPPER = document.querySelector(".gallery");
console.log(GALLERY_WRAPPER);
const gallery = galleryItems
  .map(
    (item) =>
      `<ul class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-original="${item.original}"
            alt="${item.description}"
          />
        </a>
      </ul>`
  )
  .join("");

GALLERY_WRAPPER.innerHTML = gallery;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

import { galleryItems } from "./gallery-items.js";
// Change code below this line
const GALLERY_WRAPPER = document.querySelector(".gallery");

const gallery = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-original="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
  )
  .join("");

GALLERY_WRAPPER.innerHTML = gallery;

let instance;

const openWindow = (event) => {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  instance = basicLightbox.create(`
    <img src=${event.target.dataset.original} style="margin: auto; position: absolute; max-width: 95vw; max-height: 95wh ">`);
  instance.show();
};

const closeWindow = (event) => {
  if (instance.visible() === true) {
    if (event.key === "Escape") {
      instance.close(console.log("closed"));
    }
  }
};

GALLERY_WRAPPER.addEventListener("click", openWindow);
document.addEventListener("keydown", closeWindow);

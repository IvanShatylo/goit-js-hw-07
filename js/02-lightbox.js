import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`).join('');



galleryList.insertAdjacentHTML("afterbegin", markup);

galleryList.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
  return
  }
  
};

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  showCounter: false,
});

gallery.on("show.simplelightbox");




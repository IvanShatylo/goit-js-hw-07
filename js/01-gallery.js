import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      loading="lazy"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');

galleryRef.insertAdjacentHTML('afterbegin', markup);



galleryRef.addEventListener('click', onGallary);

function onGallary(e) {
  e.preventDefault();

  if (!e.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${e.target.getAttribute('src')}" width="800" height="600">
`);

  instance.show();

  if (instance.show()) {
    window.addEventListener('keydown', onKeyClose);

    function onKeyClose(evt) {
      if (evt.key === 'Escape') {
        instance.close();
      }
    }
  }
}
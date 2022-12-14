import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const gallaryMurkUp = createGallaryMarkUp(galleryItems);

galleryRef.insertAdjacentHTML('afterbegin', gallaryMurkUp);

function createGallaryMarkUp(images) {
  return images
    .map(({ original, preview }) => {
      return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="Image description"
            />
        </a>
    </div>
      `;
    })
    .join('');
}

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
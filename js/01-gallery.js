import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    galleryCreature: document.querySelector('.gallery'),
};

const makeGallery = ({ preview, original, description,
}) => `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
const markup = galleryItems
  .map((image) => makeGallery(image) )
  .join('');

refs.galleryCreature.insertAdjacentHTML("afterbegin", markup);

refs.galleryCreature.addEventListener('click', hendleImageClick);

function hendleImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    const largeImage = event.target.dataset.source;
   
    const instance = basicLightbox.create(`
        <img src="${largeImage}" width="800" height="800">
    `)
   
    instance.show()
};



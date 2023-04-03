import { galleryItems } from './gallery-items.js';
const refs = {
    galleryCreature: document.querySelector('.gallery'),
};

const makeGallery = ({ preview, original, description,
}) => `<li>
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
                />
            </a>
        </li>`;

const markup = galleryItems
  .map((image) => makeGallery(image) )
  .join('');
  
refs.galleryCreature.insertAdjacentHTML("afterbegin", markup);

new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoom: true,
        scrollZoomFactor: 0.1,
    
});


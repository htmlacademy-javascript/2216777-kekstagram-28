import {showBigPicture} from './big-picture.js';
import {renderThumbnails} from './thumbnails.js';
import {similarPublishPhoto} from './thumbnails.js';

const bigPicture = document.querySelector('.big-picture').querySelector('img');
const container = document.querySelector('.pictures');


const renderGallery = () => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('.picture');
    if (!thumbnail) {
      return;
    }
    const picture = similarPublishPhoto.find(
      (item) => item.id === Number(thumbnail.dataset.thumbnailId)
    );
    console.log(picture);
    bigPicture.src = picture.url;
    showBigPicture(picture);
  });
  renderThumbnails();
};


export {renderGallery};


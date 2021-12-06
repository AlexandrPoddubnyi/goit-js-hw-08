const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryList = document.querySelector('.js-gallery');
const imageMurkup = createImagesCardSet(galleryItems);
galleryList.insertAdjacentHTML('beforeend', imageMurkup);
// console.log(createImagesCardSet(galleryItems));

function createImagesCardSet(image) {
  return image.map(({ preview, description, original}) => {
    return `<li class="gallery__item">
              <img  class="gallery__image" src="${preview}" alt="${description}" data-original="${original}" />
            </li>`;
  }).join('');
  
}

const modalWindow = document.querySelector('.lightbox');
const modalWindowImage = document.querySelector('img.lightbox__image');
      
galleryList.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
  modalWindow.classList.add('is-open');
  modalWindowImage.setAttribute("src", evt.target.dataset.original);

}

const closeModalBtn = document.querySelector('button.lightbox__button');

closeModalBtn.addEventListener('click', onCloseModalBtn);

function onCloseModalBtn(evt) {
  modalWindow.classList.remove('is-open');
  modalWindowImage.setAttribute("src", "")
}

//////////////////////////////////  Дополнительное задание  ////////////////////////
///////////////////////////       #1
const overlayModalArea = document.querySelector('div.lightbox__overlay')

overlayModalArea.addEventListener('click', onOverlayModalClose)

function onOverlayModalClose(evt) {
  modalWindow.classList.remove('is-open');
  modalWindowImage.setAttribute("src", "");
}

///////////////////////////        #2

window.addEventListener('keydown', onCloseModalWindowByPressEsc);

function onCloseModalWindowByPressEsc(evt) {
  // console.log(evt.key)
  if (evt.key === 'Escape') {
    modalWindow.classList.remove('is-open');
    modalWindowImage.setAttribute("src", "");
  }
}
 ///////////////////////////        #3

window.addEventListener('keydown', onOpenModalCurrentImage)
galleryList.addEventListener('click', onOpenModalCurrentImage);

function onOpenModalCurrentImage(evt) {
const currentSrc = modalWindowImage.getAttribute('src');
const galleryOriginalValuesArray = galleryItems.map(object => object.original);
  const currentIndex = galleryOriginalValuesArray.indexOf(currentSrc);
  // console.log(galleryOriginalValuesArray.indexOf(currentSrc));
  // console.log(galleryOriginalValuesArray.length)
  const firstImage = galleryOriginalValuesArray[0];
  const lastImage = galleryOriginalValuesArray.length - 1
  const nextImage = currentIndex + 1
  const previousImage = currentIndex - 1
  if (evt.key === 'ArrowLeft') {
    modalWindowImage.setAttribute("src", galleryOriginalValuesArray[previousImage] || firstImage);
  }
  else if (evt.key === 'ArrowRight') {
    modalWindowImage.setAttribute("src", galleryOriginalValuesArray[nextImage] || galleryOriginalValuesArray[lastImage]);
  }
}
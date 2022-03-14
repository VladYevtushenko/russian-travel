import { images, popupViewImage, popupImage, popupImageTitle, popupCloseButton } from "./consts.js";

const openedPopup = document.querySelector('.popup_opened');


function openPopup(popupViewImage) {
    popupViewImage.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscapeBtn);
}

function closePopup() {
    const openedPopup = document.querySelector('.popup_opened');

    openedPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscapeBtn);
}

function closeByEscapeBtn (evt) {
    if (evt.key === 'Escape') {
        closePopup(openedPopup);
    }
}

images.forEach((image) => {
    image.addEventListener('click', () => {
        popupImageTitle.textContent = image.alt;
        popupImage.src = image.src;
        popupImage.alt = image.alt;

        openPopup(popupViewImage);
    });
});

popupCloseButton.addEventListener('click', closePopup);

popupViewImage.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        closePopup(popupViewImage);
    }
    if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popupViewImage);
    }
});
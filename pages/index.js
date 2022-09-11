let body = document.querySelector('#body');
let popup = document.querySelector('#popup');
let openPopupButton = document.querySelector('#openPopupButton');
let closePopupButton = document.querySelector('#closePopupButton');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

openPopupButton.addEventListener('click', function () {
    openPopup();
});

closePopupButton.addEventListener('click', function () {
    closePopup();
});



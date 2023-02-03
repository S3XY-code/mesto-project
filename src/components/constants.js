export const popupImage = document.querySelector('#image');
export const popupImg = document.querySelector('.popup__image');
export const popupText = document.querySelector('.popup__text');
export const galleryCard = document.querySelector('#gallery-card').content;
export const allForms = document.forms;
export const galleryContainer = document.querySelector('.gallery__grid-container');
export const profileBtEdit = document.querySelector('.profile__button-edit');
export const cardBtnAdd = document.querySelector('.profile__button-add');
export const popupAll = document.querySelectorAll('.popup');
export const formUser = document.forms.formUser;
export const formCard = document.forms.formCard;
export const popupUser = document.querySelector('#user');
export const popupCard = document.querySelector('#card');
export const profileName = document.querySelector('.profile__name');
export const profileAbout = document.querySelector('.profile__about');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileSubmitBtn = formUser.querySelector('.popup__save-button');
export const cardSubmitBtn = formCard.querySelector('.popup__save-button');
export const nameInput = popupProfileForm.querySelector('#popupUserName');
export const jobInput = popupProfileForm.querySelector('#popupUserAbout');
export const inputPopupName = formCard.querySelector('#placeName');
export const inputUrl = formCard.querySelector('#placeUrl');
export const avatarPopup = document.querySelector('.popup_avatar');
export const avatarForm = avatarPopup.querySelector('.popup__form-avatar');
export const avatarPhotoInput = avatarForm.querySelector('.popup__input');
export const avatarSubmitBtn = avatarForm.querySelector('.popup__save-button');
export const enableValidationSettings = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_type_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
  };
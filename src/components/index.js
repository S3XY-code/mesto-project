import '../pages/index.css';

import {popupImage, popupImg, popupText, galleryCard, allForms, galleryContainer, profileBtEdit, cardBtnAdd, popupAll, formUser, formCard, popupUser, popupCard, profileName, profileAbout, profileAvatar, profileSubmitBtn, avatarPopup, avatarForm, avatarPhotoInput, avatarSubmitBtn, cardSubmitBtn, nameInput, jobInput, inputPopupName, inputUrl} from "./constants.js";

import { initialCards } from "./card-container.js";
import { createCard, addCard } from "./card.js";
import { closePopup, openPopup } from "./utils.js";
import { enableValidation } from "./validate.js";
import { btnDisable } from "./validate.js";
import {enableValidationSettings as settings} from "./constants.js";
import {getSrvUser, getSrvCards, editProfile, changeAvatar, createNewCard} from "./api.js";

  let user = {};

// Load data and cards from server

Promise.all([getSrvUser(), getSrvCards()])
  .then(([srvUser, cards]) => {
    user = srvUser;
    profileName.textContent = user.name;
    profileAbout.textContent = user.about;
    profileAvatar.src = user.avatar;

    cards.reverse().forEach((data) => {
      galleryContainer.prepend(createCard(data, user));
    })
  })
  .catch((err) => {
    console.error(err);
})

function changeProfile (evt) {
  evt.preventDefault();
  profileSubmitBtn.textContent = 'Сохранение...';
  editProfile(nameInput.value, jobInput.value)
    .then(() => {
      profileName.textContent = nameInput.value;
      profileAbout.textContent = jobInput.value;
      closePopup(popupUser);
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      profileSubmitBtn.textContent = 'Сохранить';
    });
  
}

// Edit avatar

function changeAvatarProfile(evt) {
  evt.preventDefault();
  avatarSubmitBtn.textContent = 'Сохранение...';
  const avatar = avatarPhotoInput.value;
  changeAvatar(avatar)
    .then((item) => {
      profileAvatar.src = item.avatar;
      avatarForm.reset();
      evt.target.reset();
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      avatarSubmitBtn.textContent = 'Сохранить';
    })
}

// Add new card

function addNewCard (evt) {
  evt.preventDefault();
  cardSubmitBtn.textContent = 'Создание...';
  createNewCard(inputUrl.value, inputPopupName.value)
    .then((data) => {
      galleryContainer.prepend(createCard(data, user));
      evt.target.reset();
      closePopup(popupCard);
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      cardSubmitBtn.textContent = 'Создать';
    });
}

//! Кнопка редактирования профиля
profileBtEdit.addEventListener('click', function () {
  openPopup(popupUser);
  formUser.profileTitle.value = profileName.textContent;
  formUser.profileSubtitle.value = profileAbout.textContent;
});

//! Кнопка добавления карточки
cardBtnAdd.addEventListener('click', function () {
  const SubmButton = popupCard.querySelector(settings.submitButtonSelector);
  openPopup(popupCard);
  btnDisable(SubmButton, settings);
});

// Listener for open Avatar popup

profileAvatar.addEventListener('click', function() {
  openPopup(avatarPopup);
});

//! Закрываем попап
popupAll.forEach(function (popup) {
  popup.addEventListener('click', function(e){
    if (e.target.classList.contains('popup__close-icon') || e.target.classList.contains('popup')) {
      closePopup(e.target.closest('.popup'));
    }
  })
})

// Listener for profile submit button (  )  

formUser.addEventListener('submit', changeProfile);

// Listener for card submit button ( card.js )

formCard.addEventListener('submit', addNewCard);

// Render cards from array ( database.js )

avatarForm.addEventListener('submit', changeAvatarProfile);

enableValidation(settings);
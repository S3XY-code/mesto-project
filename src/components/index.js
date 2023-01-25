import '../pages/index.css';

import {popupImage, popupImg, popupText, galleryCard, allForms, galleryContainer, profileBtEdit, cardBtnAdd, popupAll, formUser, formCard, popupUser, popupCard, profileName, profileAbout} from "./constants.js";

import { initialCards } from "./card-container.js";
import { createCard, addCard } from "./card.js";
import { closePopup, openPopup } from "./utils.js";
import { enableValidation } from "./validate.js";
import {enableValidationSettings as settings} from "./constants.js";

//! Добавляем новые карты из массива
galleryContainer.innerHTML = "";
for (let i = 0; i < initialCards.length; ++i) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), galleryContainer);
}

//! Редактируем данные профиля
formUser.addEventListener('submit', function (event) {
    event.preventDefault();
    profileName.textContent = formUser.profileTitle.value;
    profileAbout.textContent = formUser.profileSubtitle.value;
  
    closePopup(popupUser);
  });

//! Добавляем новые карты в галерею
formCard.addEventListener('submit', function (event) {
    event.preventDefault();
    if (formCard.cardTitle.value !== '' && formCard.cardSubtitle.value !== '') {
      addCard(createCard(formCard.cardTitle.value, formCard.cardSubtitle.value), galleryContainer);
    }
    formCard.reset();
  
    closePopup(popupCard);
  });

//! Кнопка добавления карточки
cardBtnAdd.addEventListener('click', function () {
  openPopup(popupCard);
});

//! Кнопка редактирования профиля
profileBtEdit.addEventListener('click', function () {
  openPopup(popupUser);
  formUser.profileTitle.value = profileName.textContent;
  formUser.profileSubtitle.value = profileAbout.textContent;
});


//! Закрываем попап
popupAll.forEach(function (popup) {
  popup.addEventListener('click', function(e){
    if (e.target.classList.contains('popup__close-icon') || e.target.classList.contains('popup')) {
      closePopup(e.target.closest('.popup'));
    }
  })
})

window.addEventListener('keydown', function (e) {
  popupAll.forEach(function (item) {
    if (e.key === 'Escape') {
      closePopup(item);
    }
  });
});

  enableValidation(settings);
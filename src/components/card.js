import { openPopup } from "./utils.js";
import {popupImage, popupImg, popupText, galleryCard} from "./constants.js";

//! Создаем карту
export function createCard(name, link) {
    const cardElement = galleryCard.querySelector('.gallery__card').cloneNode(true);
  
    cardElement.querySelector('.gallery__delet').addEventListener('click', function (e) {
      e.target.closest('.gallery__card').remove();
    });
    cardElement.querySelector('.gallery__image').src = link;
    cardElement.querySelector('.gallery__image').alt = name;
    cardElement.querySelector('.gallery__image').addEventListener('click', function (e) {
  
      popupImg.src = link;
      popupText.textContent = name;
      popupImg.alt = (name + ".");
      openPopup(popupImage);
    });
    cardElement.querySelector('.gallery__title').textContent = name;
    cardElement.querySelector('.gallery__button-heart').addEventListener('click', function (e) {
      e.target.classList.toggle('gallery__button-heart_active');
    });
    return cardElement;
  }
  
//! Добавляем карту в контейнер
export function addCard(card, container) {
  container.prepend(card);
  }
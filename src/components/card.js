import { openPopup } from "./utils.js";
import {popupImage, popupText, popupImg, galleryCard} from "./constants.js";
import {deleteCard, addLike, deleteLike} from "./api.js";

  export const createCard = (data, user) => {
    const cardElement = galleryCard.querySelector('.gallery__card').cloneNode(true);
    const cardImage = cardElement.querySelector('.gallery__image');
    const cardTitle = cardElement.querySelector('.gallery__title');
    const cardTrashBtn = cardElement.querySelector('.gallery__delet');
    const cardLikeBtn = cardElement.querySelector('.gallery__button-heart');
    const cardLikeNum = cardElement.querySelector('.gallery__like-num');
  
    cardImage.src = data.link;
    cardImage.alt = data.name;
    cardTitle.textContent = data.name;
    cardLikeNum.textContent = data.likes.length;
  
    // Delete user card's
  
    if (user._id === data.owner._id) {
      cardTrashBtn.classList.add('gallery___delete_type_active');
      cardTrashBtn.addEventListener('click', function () {
        deleteCard(data._id)
          .then(() => {
            removeCard(cardTrashBtn);
          })
          .catch((err) => {
            console.error(err)
          })
      });
    }
  
    // Active like's on card
  
    for (const item of data.likes) {
      if (item._id.includes(user._id)) {
        cardLikeBtn.classList.add('gallery__button-heart_active');
      }
    }
  
    // New like's on card
  
    cardLikeBtn.addEventListener('click', function (evt) {
      if (!evt.target.classList.contains('gallery__button-heart_active')) {
        addLike(data._id)
          .then((data) => {
            evt.target.classList.add('gallery__button-heart_active');
            cardLikeNum.textContent = data.likes.length;
          })
          .catch((err) => {
            console.error(err);
          })
      } else {
        deleteLike(data._id)
          .then((data) => {
            evt.target.classList.remove('gallery__button-heart_active');
            cardLikeNum.textContent = data.likes.length;
          })
          .catch((err) => {
            console.error(err);
          })
      }
    });
  
    cardImage.addEventListener('click', function () {
      openPopup(popupImage);
      popupImg.src = data.link;
      popupImg.alt = data.name;
      popupText.textContent = data.name;
    });
  
    return cardElement;
  };

  //! Добавляем карту в контейнер
export function addCard(card, container) {
  container.prepend(card);
  }

  function removeCard(card) {
    const element = card.closest('.gallery__card');
    element.remove();
  };
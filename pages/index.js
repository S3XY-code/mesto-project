// Открытие/закрытие окна редактирования профиля

const popup = document.querySelector('.popup');
const popupUser = document.querySelector('#user');
const popupCard = document.querySelector('#card');
const openPopupButton = document.querySelector('#openPopupButton');
const closePopupButton = document.querySelector('.popup__close-icon');
const cardButton = document.querySelector('#cardButton');
const formUser = document.forms.profileEdit;
const formCard = document.forms.cardEdit;
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about');

const galeryContainer = document.querySelector('.galery__grid-container');
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//! ОТКРЫВАЕТ POPUP
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

//! ЗАКРЫВАЕТ POPUP
function closePopup() {
    popup.classList.remove('popup_opened');
}

//! ОТКРЫТИЕ POPUP ДЛЯ РЕДОКТИРОВАНИЯ ПРОФИЛЯ
openPopupButton.addEventListener('click', function () {
    openPopup(popupUser);
});

//! ОТКРЫТИЕ POPUP ДЛЯ ДОБАВЛЕНИЯ ФОТО
cardButton.addEventListener('click', function () {
    openPopup(popupCard);
});

closePopupButton.addEventListener('click', function () {
    closePopup();
});

//! ДОБАВЛЯЕТ НОВЫЕ 6 КАРТ ИЗ МАСИВА "initialCards"
galeryContainer.innerHTML = "";
for (let i = 0; i < initialCards.length; ++i) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), galeryContainer);
}

//! РЕДАКТИРУЕТ ДАННЫЕ "О СЕБЕ" В ПРОФИЛЕ
formUser.addEventListener('submit', function (event) {
    event.preventDefault();
    if (formUser.profileTitle.value !== '' && formUser.profileSubtitle.value !== '') {
      profileName.textContent = formUser.profileTitle.value;
      profileAbout.textContent = formUser.profileSubtitle.value;
    }
    closePopup(popupUser);
  });

  //! ДОБАВЛЯЕТ НОВЫЕ КАРТЫ В ГАЛЕРЕЮ
formCard.addEventListener('submit', function (event) {
    event.preventDefault();
    if (formCard.profileTitle.value !== '' && formCard.profileSubtitle.value !== '') {
      addCard(createCard(formCard.profileTitle.value, formCard.profileSubtitle.value), galeryContainer);
    }
    formCard.profileTitle.value = "";
    formCard.profileSubtitle.value = "";
  
    closePopup(popupCard);
  });
const popupAll = document.querySelectorAll('.popup');
const popupUser = document.querySelector('#user');
const popupCard = document.querySelector('#card');
const openPopupButton = document.querySelector('.profile__button-edit');
const closePopup = document.querySelector('.popup__close-icon')
const cardButton = document.querySelector('.profile__button-add');
const formUser = document.forms.profileEdit;
const formCard = document.forms.cardEdit;
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about');
const popupImage = document.querySelector('#image');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const galeryCard = document.querySelector('#galery-card').content;
const galeryContainer = document.querySelector('.galery__grid-container');
const allForms = document.forms;

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
function closePopup(popup) {
  const allError = document.querySelectorAll('.form__input-error');
  popup.classList.remove('popup_opened');
  allError.forEach(function (item) {
    item.textContent = '';
  });
}

//! ЗАКРЫВАЕТ POPUP ОКНА ПРИ НАЖАТИ НА КРЕСТИК ИЛИ НА ПРОСТРАНСТВО ВОКРУГ или на кнопку ESC\
window.addEventListener('click', function (e) {
  if (e.target.classList.contains('popup__close-icon') || e.target.classList.contains('popup')) {
    closePopup(e.target.closest('.popup'));
  }
});
window.addEventListener('keydown', function (e) {
  popupAll.forEach(function (item) {
    if (e.key === 'Escape') {
      closePopup(item);
    }
  });
});

//! ОТКРЫТИЕ POPUP ДЛЯ РЕДОКТИРОВАНИЯ ПРОФИЛЯ
openPopupButton.addEventListener('click', function () {
    openPopup(popupUser);
    formUser.profileTitle.value = profileName.textContent;
    formUser.profileSubtitle.value = profileAbout.textContent;
});

//! ОТКРЫТИЕ POPUP ДЛЯ ДОБАВЛЕНИЯ ФОТО
cardButton.addEventListener('click', function () {
    openPopup(popupCard);
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

  //! СОЗДАЕТ ЗАГОТОВКУ КАРТЫ
function createCard(name, link) {
  const cardElement = galeryCard.querySelector('.galery__card').cloneNode(true);

  cardElement.querySelector('.galery__delet').addEventListener('click', function (e) {
    e.target.closest('.galery__card').remove();
  });
  cardElement.querySelector('.galery__image').src = link;
  cardElement.querySelector('.galery__image').alt = name;
  cardElement.querySelector('.galery__image').addEventListener('click', function (e) {

    popupImg.src = e.target.src;
    popupText.textContent = name;
    openPopup(popupImage);
  });
  cardElement.querySelector('.galery__title').textContent = name;
  cardElement.querySelector('.galery__button-heart').addEventListener('click', function (e) {
    e.target.classList.toggle('galery__button-heart_active');
  });
  return cardElement;
}

//! ДОБАВЛЯЕТ КАРТУ В ГАЛЕРЕЮ
function addCard(card, container) {
  container.prepend(card);
}

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


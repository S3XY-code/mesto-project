const formUser = document.forms.formUser;
const formCard = document.forms.formCard;
const popupUser = document.querySelector('#user');
const popupCard = document.querySelector('#card');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileBtEdit = document.querySelector('.profile__button-edit');
const cardBtnAdd = document.querySelector('.profile__button-add');
const popupAll = document.querySelectorAll('.popup');


//! Функция открывающая попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

//! Функция закрывающая попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//! Закрываем попап
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('popup__close-icon') || e.target.classList.contains('popup')) {
    closePopup(e.target.closest('.popup'));
  }
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

//! Редактируем данные профиля
formUser.addEventListener('submit', function (event) {
  event.preventDefault();
  profileName.textContent = formUser.profileTitle.value;
  profileAbout.textContent = formUser.profileSubtitle.value;

  closePopup(popupUser);
});

const popupImage = document.querySelector('#image');
const popupImg = document.querySelector('.popup__image');
const popupText = document.querySelector('.popup__text');
const galleryCard = document.querySelector('#gallery-card').content;

//! Создаем карту
function createCard(name, link) {
  const cardElement = galleryCard.querySelector('.gallery__card').cloneNode(true);

  cardElement.querySelector('.gallery__delet').addEventListener('click', function (e) {
    e.target.closest('.gallery__card').remove();
  });
  cardElement.querySelector('.gallery__image').src = link;
  cardElement.querySelector('.gallery__image').alt = name;
  cardElement.querySelector('.gallery__image').addEventListener('click', function (e) {

    popupImg.src = link;
    popupText.textContent = name;
    openPopup(popupImage);
  });
  cardElement.querySelector('.gallery__title').textContent = name;
  cardElement.querySelector('.gallery__button-heart').addEventListener('click', function (e) {
    e.target.classList.toggle('gallery__button-heart_active');
  });
  return cardElement;
}

//! Добавляем карту в контейнер
function addCard(card, container) {
  container.prepend(card);
}

const galleryContainer = document.querySelector('.gallery__grid-container');

//! Добавляем новые карты из массива
galleryContainer.innerHTML = "";
for (let i = 0; i < initialCards.length; ++i) {
  addCard(createCard(initialCards[i].name, initialCards[i].link), galleryContainer);
}

//! Добавляем новые карты в галерею
formCard.addEventListener('submit', function (event) {
  event.preventDefault();
  if (formCard.cardTitle.value !== '' && formCard.cardSubtitle.value !== '') {
    addCard(createCard(formCard.cardTitle.value, formCard.cardSubtitle.value), galleryContainer);
  }
  formCard.reset();
  formCard.reset();

  closePopup(popupCard);
});

const cards = [
  {
    name: 'Архыз',
    link: './images/Karachaevsk.jpg'
  },
  {
    name: 'Челябинская область',
    link: './images/Karachaevsk.jpg'
  },
  {
    name: 'Иваново',
    link: './images/Karachaevsk.jpg'
  },
  {
    name: 'Камчатка',
    link: './images/Karachaevsk.jpg'
  },
  {
    name: 'Холмогорский район',
    link: './images/Karachaevsk.jpg'
  },
  {
    name: 'Байкал',
    link: './images/Karachaevsk.jpg'
  }
];

//Profile PopUp

const popupProfile = document.querySelector('#user');
const popupProfileOpenButton = document.querySelector('.profile__button-edit');
const userCloseBtn = document.querySelector('#userCloseBtn');
const popupProfileForm = popupProfile.querySelector('#popupProfileForm');
const popupUserName = popupProfileForm.querySelector('#popupUserName');
const popupUserAbout = popupProfileForm.querySelector('#popupUserAbout');

//Card PopUp

const popupCard = document.querySelector('#card');
const popupCardOpenButton = document.querySelector('#addButton');
const popupCardCloseBtn = document.querySelector('#popupCardCloseBtn');
const popupCardForm = popupCard.querySelector('.popup__form');
const placeName = popupCard.querySelector('#placeName');
const placeUrl = popupCard.querySelector('#placeUrl');

//Actual Profile name and Job

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

// Cards
const galeryContainer = document.querySelector('.galery__grid-container');
const galeryTemplate = document.querySelector('#galery-card').content;

//Open and Close PopUp

function popupProfileOpen() {
  popupProfile.classList.add('popup_opened');
}

function popupCardClose() {
  popupCard.classList.remove('popup_opened');
}

popupCardOpenButton.addEventListener('click', popupCardOpen);
popupCardCloseBtn.addEventListener('click', popupCardClose);

////Actual Profile name and Job


function formSubmitActualName() {
  popupUserAbout.value = profileAbout.textContent;
  popupUserName.value = profileName.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileAbout.textContent = popupUserAbout.value;
  profileName.textContent = popupUserName.value;
  popupProfile.classList.remove('popup_opened');
  popupCard.classList.remove('popup_opened');
}

popupProfileForm.addEventListener('submit', formSubmitHandler);
popupCardForm.addEventListener('submit', formSubmitHandler);


//Likes


//let likeButton = document.querySelector('#likeButton');


//function GetLike (evt) {
  //evt.target.classList.toggle('card__like-button_active');
//}

//likeButton.addEventListener('click', GetLike);

//Add cards

function createCard(name, link) {
  const cardElement = galeryTemplate.querySelector('.galery__card').cloneNode(true);
  cardElement.querySelector('.galery__image').textContent = name;
  const cardImage = cardElement.querySelector('.galery__image');
  cardImage.src = link;
  cardImage.alt = name;

  // cardImage.addEventListener('click', renderCardPopup);

  cardElement
    .querySelector('.galery__button-heart')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('galery__button-heart_active');
    });

  //cardElement
    //.querySelector('.galery__delet')
    //.addEventListener('click', deleteCard);

  return cardElement;
}

function renderCard(card, container) {
  container.prepend(card);
}

function renderCards() {
  cards.forEach((item) =>
    renderCard(createCard(item.name, item.link), galeryContainer)
  );
}

function deleteCard(evt) {
  const card = evt.target.closest('.card');
  card.remove();
}

function addCard(evt) {
  evt.preventDefault();
  renderCard(createCard(placeName.value, placeUrl.value), galeryContainer);
  placeName.value = '';
  placeUrl.value = '';
  popupCardClose(popupCard);
}

popupCard.addEventListener('submit', addCard);


renderCards();

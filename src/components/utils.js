

//! Функция открывающая попап
export function openPopup(popup) {
    popup.classList.add('popup_opened');
  }

//! Функция закрывающая попап
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
  }  
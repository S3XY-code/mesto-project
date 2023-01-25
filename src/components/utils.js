

//! Функция открывающая попап
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc);
  }

//! Функция закрывающая попап
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEsc);
  }
  
  const closeEsc = (evt) => {
    if (evt.key === "Escape") {
      closePopup(document.querySelector('.popup_opened'));
    }
  };
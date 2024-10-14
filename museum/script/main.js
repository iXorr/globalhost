const headerLinks = document.querySelectorAll('.nav__static-item button');
const subElements = document.querySelectorAll('.nav__dropdown-items-wrapper');

headerLinks.forEach((_staticElement) => {
    _staticElement.addEventListener('click', () => {
        subElements.forEach((_dropdownElement) => {

            if (_staticElement.id == _dropdownElement.id) {
                _dropdownElement.classList.toggle('nav__dropdown-items-wrapper-active');
            }

            else {
                _dropdownElement.classList.remove('nav__dropdown-items-wrapper-active');
            }
            
        });
    });
});

const headerContacts = document.querySelector('.header__contacts');

headerContacts.addEventListener('click', () => {
    if (headerContacts.textContent == 'ПОЗВОНИТЬ НАМ')
        headerContacts.textContent = '+7 (901) 245-25-52';

    else
        headerContacts.textContent = 'ПОЗВОНИТЬ НАМ';
});

headerContacts.addEventListener('dblclick', () => {
    navigator.clipboard.writeText('+7 (901) 245-25-52');
    headerContacts.textContent = 'СКОПИРОВАНО В БУФЕР';

    setTimeout(() => {
        headerContacts.textContent = 'ПОЗВОНИТЬ НАМ';        
    }, 1000);
})

const aboutShowBtn = document.querySelectorAll('.about-main__menu-btn');
const aboutHidden = document.querySelectorAll('.about-main__hidden-items');

aboutShowBtn.forEach((_btn) => {
    _btn.addEventListener('click', () => {
        aboutHidden.forEach((_hidden) => {

            if (_btn.id == _hidden.id) {

                if (_hidden.style.height == '325px') {
                    _hidden.style.opacity = '0';
                    _hidden.style.height = '0';
                }

                else {
                    _hidden.style.opacity = '1';
                    _hidden.style.height = '325px';
                }
            }

            else {
                _hidden.style.opacity = '0';
                _hidden.style.height = '0';
            }
            
        });
    });
});

const fuckingBtn = document.querySelector('.fucking-btn');
let popupBg = document.querySelector('.about__popup-background'); 
let popup = document.querySelector('.about__popup-form');
let openPopupButtons = document.querySelectorAll('.about__open-popup');
let closePopupButton = document.querySelector('.about__close-popup');

fuckingBtn.addEventListener('click', (element) => {
    element.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
});

closePopupButton.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});
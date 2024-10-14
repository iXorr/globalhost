const dropdownBtn = document.querySelector('.dropdown__btn');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownListItems = document.querySelectorAll('.dropdown__list-item');
const dropdownHiddenInput = document.querySelector('.dropdown__input-hidden');
const selectorSubmit = document.querySelector('.selector__submit');
const selectorReset = document.querySelector('.selector__reset');

selectorSubmit.onclick = () => {
    window.location.reload();
}

selectorReset.onclick = () => {
    dropdownListItems.forEach((elementF) => {
        switch (elementF.dataset.value) {
            case 'office':
                elementF.textContent = 'В офисе банка';
                break;

            case 'website':
                elementF.textContent = 'На веб-сайте';
                break;

            case 'terminal':
                elementF.textContent = 'В банкомате';
                break;
        }
    });

    dropdownBtn.innerText = 'В мобильном приложении';
    dropdownHiddenInput.value = '';
}

dropdownBtn.onclick = () => {
    dropdownList.classList.toggle('dropdown__list--visible');
}

dropdownListItems.forEach((element) => {
    element.onclick = (event) => {
        event.stopPropagation();

        dropdownBtn.focus();

        if (dropdownBtn.textContent == 'В мобильном приложении') {
            dropdownHiddenInput.value = element.textContent;
            dropdownBtn.textContent = element.textContent;
            element.textContent = 'В мобильном приложении';
        }

        else {

            if (element.textContent == 'В мобильном приложении') {
                dropdownHiddenInput.value = 'В мобильном приложении';

                switch (element.dataset.value) {
                    case 'office':
                        element.textContent = 'В офисе банка';
                        break;

                    case 'website':
                        element.textContent = 'На веб-сайте';
                        break;

                    case 'terminal':
                        element.textContent = 'В банкомате';
                        break;
                }
            }

            else {
                dropdownHiddenInput.value = element.textContent;

                dropdownListItems.forEach((elementF) => {
                    switch (elementF.dataset.value) {
                        case 'office':
                            elementF.textContent = 'В офисе банка';
                            break;
    
                        case 'website':
                            elementF.textContent = 'На веб-сайте';
                            break;
    
                        case 'terminal':
                            elementF.textContent = 'В банкомате';
                            break;
                    }
                });

                element.textContent = 'В мобильном приложении';
            }
        }

        dropdownBtn.textContent = dropdownHiddenInput.value;
    }
});

document.addEventListener('click', (event) => {
    console.log('doc-click');

    if (event.target !== dropdownBtn) {
        dropdownList.classList.remove('dropdown__list--visible');
    }
});
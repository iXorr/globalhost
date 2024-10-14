const calcDepositBtn = document.getElementById("calcDepositBtn");
const calcCreditBtn = document.getElementById("calcCreditBtn");
const depositBlock = document.querySelector(".deposit__menu");
const creditBlock = document.querySelector(".credit__menu");

function ChangeCalcBtns () {
    if (depositBlock.style.height == '100%') {
        calcDepositBtn.classList.add('calc__switch_active');
        calcCreditBtn.classList.remove('calc__switch_active');
    }
    
    else {
        calcDepositBtn.classList.remove('calc__switch_active');
        calcCreditBtn.classList.add('calc__switch_active');
    }
}

calcDepositBtn.onclick = () => {
    depositBlock.style.height = '100%';
    depositBlock.style.padding = '50px'; 
    depositBlock.style.opacity = '1';
    creditBlock.style.height = '0';
    creditBlock.style.padding = '0 50px';
    creditBlock.style.opacity = '0';

    ChangeCalcBtns();
}

calcCreditBtn.onclick = () => {
    creditBlock.style.height = '100%';
    creditBlock.style.padding = '50px';
    creditBlock.style.opacity = '1';
    depositBlock.style.height = '0';
    depositBlock.style.padding = '0 50px';
    depositBlock.style.opacity = '0';

    ChangeCalcBtns();
}

const miniatureLeftBtn = document.getElementById('miniatureLeftBtn');
const miniatureRightBtn = document.getElementById('miniatureRightBtn');
const miniaturePhotos = document.getElementById('miniaturePhotosWrapper');

let translateIndex = 0;
miniaturePhotos.style.transform = `translateX(${translateIndex}%)`;

miniatureLeftBtn.onclick = () => {
    if (translateIndex != 105) {

        if (translateIndex == 0) {
            miniatureLeftBtn.style.transition = 'all 0.5s ease-in-out';
            miniatureLeftBtn.style.opacity = '0';
            miniatureLeftBtn.style.cursor = 'default';
        }

        translateIndex += 105;
        miniaturePhotos.style.transform = `translateX(${translateIndex}%)`;

        if (miniatureRightBtn.style.opacity == '0') {
            miniatureRightBtn.style.opacity = '1';
            miniatureRightBtn.style.cursor = 'pointer';
        }
    }
}

miniatureRightBtn.onclick = () => {
    if (translateIndex != -210) {

        if (translateIndex == -105) {
            miniatureRightBtn.style.transition = 'all 0.5s ease-in-out';
            miniatureRightBtn.style.opacity = '0';
            miniatureRightBtn.style.cursor = 'default';
        }

        translateIndex -= 105;
        miniaturePhotos.style.transform = `translateX(${translateIndex}%)`;

        if (miniatureLeftBtn.style.opacity == '0') {
            miniatureLeftBtn.style.opacity = '1';
            miniatureLeftBtn.style.cursor = 'pointer';
        }
    }
}

const navBtnBusiness = document.getElementById('navBtnBusiness');
const navBtnPerson = document.getElementById('navBtnPerson');

const offerBlocksBusiness = document.getElementById('offerBlocksBusiness');
const offerBlocksPerson = document.getElementById('offerBlocksPerson');

navBtnBusiness.addEventListener('click', () => {
    offerBlocksPerson.style.transform = 'translateY(-270px)';
    offerBlocksPerson.style.opacity = '0';
    offerBlocksBusiness.style.transform = 'translateY(0px)';
    offerBlocksBusiness.style.opacity = '1';
});

navBtnPerson.addEventListener('click', () => {
    offerBlocksPerson.style.transform = 'translateY(0px)';
    offerBlocksPerson.style.opacity = '1';
    offerBlocksBusiness.style.transform = 'translateY(270px)';
    offerBlocksBusiness.style.opacity = '0';
});
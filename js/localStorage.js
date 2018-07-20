'use strict';

const lSname = document.querySelector('#nmb');
const lSnameCard = document.querySelector('#fullname');
const lSjob = document.querySelector('#job');
const lSjobCard = document.querySelector('#profesion');
const lSimg = document.querySelector('#add-image');
const lSmail = document.querySelector('#emailaddress');
const lSmailCard = document.querySelector('#mail-link');
const lSphone = document.querySelector('#phone');
const lSphoneCard = document.querySelector('#mobile-link');
const lSlinkedin = document.querySelector('#lkdn');
const lSlinkedinCard = document.querySelector('#linkedin-link');
const lSgit = document.querySelector('#GH');
const lSgitCard = document.querySelector('#github-link');


const lSpalettes = document.querySelectorAll('.color-check');
const lSfonts = document.querySelectorAll('.font-check');

const cardlocal = document.querySelector('.jsCard');

let dataCard = {};


const recoverLocalStorage = () => {
  if (!localStorage.getItem('Business-Card')) {
    resetform();
    // dataCard = {
    //   'name': 'Nombre apellidos',
    //   'job': 'Profesión',
    //   'photo': '',
    //   'email': '',
    //   'phone': '',
    //   'linkedin': '',
    //   'github': '',
    //   'pallete': '',
    //   'typography': ''
    // }
  } else {
    dataCard = JSON.parse(localStorage.getItem('Business-Card'));
  }

  lSname.value = dataCard.name;
  lSnameCard.innerText = dataCard.name;
  lSjob.value = dataCard.job;
  lSjobCard.innerText = dataCard.job
  uploadPhoto.style.backgroundImage = "url(" + dataCard.photo + ")";
  uploadMiniPhoto.style.backgroundImage = "url(" + dataCard.photo + ")";
  lSmail.value = dataCard.email;
  lSmailCard.href = "mailto:" + dataCard.email;
  lSphone.value = dataCard.phone;
  lSlinkedin.value = dataCard.linkedin;
  lSlinkedinCard.href = "https://www.linkedin.com/in/" + dataCard.linkedin;
  lSgit.value = dataCard.github;
  lSgitCard.value = 'https://github.com/' + dataCard.github;
  lSphoneCard.href = 'tel:' + dataCard.phone;
  for (const paletteLocal of lSpalettes.length) {
    if (paletteLocal.value === dataCard.palette) {
      paletteLocal.checked = true;
      cardlocal.classList.remove('green-card', 'red-card', 'blue-card');
      const attri = paletteLocal.getAttribute('data-dest');
      cardlocal.classList.add(attri);
    } else {
      paletteLocal.checked = false;
    }
  }
  for (const fontLocal of lSfonts.length) {
    if (fontLocal.value === dataCard.typography) {

      fontLocal.checked = true;
      cardlocal.classList.remove('ubuntu-card', 'comic-card', 'montse-card');
      const attriFont = fontLocal.getAttribute('data-font');
      cardlocal.classList.add(attriFont);

    } else {
      fontLocal.checked = false;
    }
  }

};


recoverLocalStorage();

'use strict';

//query selector de id's
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

const card = document.querySelector('.jsCard');

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
  uploadPhoto.style.backgroundImage = 'url(' + dataCard.photo + ')';
  uploadMiniPhoto.style.backgroundImage = 'url(' + dataCard.photo + ')';
  lSmail.value = dataCard.email;
  lSmailCard.href = 'mailto:' + dataCard.email;
  lSphone.value = dataCard.phone;
  lSlinkedin.value = dataCard.linkedin;
  lSlinkedinCard.href = 'https://www.linkedin.com/in/' + dataCard.linkedin;
  lSgit.value = dataCard.github;
  lSgitCard.value = 'https://github.com/' + dataCard.github;
  lSphoneCard.href = 'tel:' + dataCard.phone;
  for (var i = 0; i < lSpalettes.length; i++) {
    if (lSpalettes[i].value === dataCard.palette) {
      lSpalettes[i].checked = true;
      card.classList.remove('green-card', 'red-card', 'blue-card');
      const attri = lSpalettes[i].getAttribute('data-dest');
      card.classList.add(attri);
    } else {
      lSpalettes[i].checked = false;
    }
  }
  for (var j = 0; j < lSfonts.length; j++) {
    if (lSfonts[j].value === dataCard.typography) {

      lSfonts[j].checked = true;
      card.classList.remove('ubuntu-card', 'comic-card', 'montse-card');
      const attriFont = lSfonts[i].getAttribute('data-font');
      card.classList.add(attriFont);

    } else {
      lSfonts[j].checked = false;
    }
  }

};


recoverLocalStorage();

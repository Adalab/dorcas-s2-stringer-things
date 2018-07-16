'use strict';

var lSname = document.querySelector('#nmb');
var lSnameCard = document.querySelector('#fullname');
var lSjob = document.querySelector('#job');
var lSjobCard = document.querySelector('#profesion');
var lSimg = document.querySelector('#add-image');
var lSmail = document.querySelector('#emailaddress');
var lSmailCard = document.querySelector('#mail-link');
var lSphone = document.querySelector('#phone');
var lSphoneCard = document.querySelector('#mobile-link');
var lSlinkedin = document.querySelector('#lkdn');
var lSlinkedinCard = document.querySelector('#linkedin-link');
var lSgit = document.querySelector('#GH');
var lSgitCard = document.querySelector('#github-link');


var lSpalettes = document.querySelectorAll('.color-check');
var lSfonts = document.querySelectorAll('.font-check');

var card = document.querySelector('.jsCard');

var dataCard = {};


function recoverLocalStorage() {
  if (!localStorage.getItem('Business-Card')) {
    dataCard = {
      'name': '',
      'job': '',
      'photo': '',
      'email': '',
      'phone': '',
      'linkedin': '',
      'github': '',
      'pallete': '',
      'typography': ''
    }
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
  lSgit.value = dataCard.gitHub;
  lSgitCard.value = "https://github.com/" + dataCard.github;
  lSphoneCard.href = "tel:" + dataCard.phone;
  for (var i = 0; i < lSpalettes.length; i++) {
    if (lSpalettes[i].value === dataCard.palette) {
      lSpalettes[i].checked = true;
      card.classList.remove('green-card', 'red-card', 'blue-card');
      var attri = lSpalettes[i].getAttribute('data-dest');
      card.classList.add(attri);
    } else {
      lSpalettes[i].checked = false;
    }
  }
  for (var i = 0; i < lSfonts.length; i++) {
    if (lSfonts[i].value === dataCard.typography) {

      lSfonts[i].checked = true;
      card.classList.remove('ubuntu-card', 'comic-card', 'montse-card');
      var attriFont = lSfonts[i].getAttribute('data-font');
      card.classList.add(attriFont);

    } else {
      lSfonts[i].checked = false;
    }
  }

}


recoverLocalStorage();

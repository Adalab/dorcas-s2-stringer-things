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


var dataCard = {};

function saveLocalStorage() {
  console.dir(lSgitCard);
  if (!localStorage.getItem('Business-Card')) {
  dataCard = {
    'name': '',
    'occupation': '',
    'image': '',
    'email': '',
    'telephone': '',
    'linkedin': '',
    'gitHub': '',
    'nameCard': '',
    'occupationCard': '',
    'imageCard': '',
    'emailCard': '',
    'telephoneCard': '',
    'linkedinCard': '',
    'gitHubCard': '',
  }
} else {
  dataCard = JSON.parse(localStorage.getItem('Business-Card'));
  }

  dataCard.name = lSname.value;
  dataCard.occupation = lSjob.value;
  dataCard.image = lSimg.value;
  dataCard.email = lSmail.value;
  dataCard.telephone = lSphone.value;
  dataCard.linkedin = lSlinkedin.value;
  dataCard.gitHub = lSgit.value;

  dataCard.nameCard = lSnameCard.innerHTML;
  dataCard.occupationCard = lSjobCard.innerHTML;
  //dataCard.imageCard = lSimgCard.value;
  dataCard.emailCard = lSmailCard.value;
  dataCard.telephoneCard = lSphoneCard.value;
  dataCard.linkedinCard = lSlinkedin.href;
  dataCard.lSgitCard = lSgit.href;

  localStorage.setItem('Business-Card', JSON.stringify(dataCard));
}

function recoverLocalStorage () {
  dataCard = JSON.parse(localStorage.getItem('Business-Card'));
  lSname.value = dataCard.name;
  lSnameCard.innerHTML = dataCard.occupationCard;
  lSjob.value = dataCard.occupation;
  lSjobCard.innerHTML = dataCard.occupationCard;
  uploadPhoto.style.backgroundImage = "'url("+dataCard.image+")'";
    //miniBox.style.backgroundImage = infoTarjeta.foto;
  lSmail.value = dataCard.email;
  lSphone.value = dataCard.telephone;
  lSlinkedin.value = dataCard.linkedin;
  lSgit.value = dataCard.gitHub;
}


btnCreateCard.addEventListener('click', saveLocalStorage);
recoverLocalStorage();

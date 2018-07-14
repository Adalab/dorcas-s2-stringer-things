'use strict';

var lSname = document.querySelector('#nmb');
var lSjob = document.querySelector('#job');
var lSimg = document.querySelector('#add-image');
var lSmail = document.querySelector('#emailaddress');
var lSphone = document.querySelector('#phone');
var lSlinkedin = document.querySelector('#lkdn');
var lSgit = document.querySelector('#GH');

var dataCard = {};

function saveLocalStorage() {
  dataCard.name = lSname.value;
  dataCard.occupation = lSjob.value;
  dataCard.image = lSimg.value;
  dataCard.email = lSmail.value;
  dataCard.telephone = lSphone.value;
  dataCard.linkedin = lSlinkedin.value;
  dataCard.gitHub = lSgit.value;

  localStorage.setItem('Business-Card', JSON.stringify(dataCard));

  // if (!localStorage.getItem('Business-Card')) {
  //   dataCard = {
  //     'name': '',
  //     'occupation': '',
  //     'image': '',
  //     'email': '',
  //     'telephone': '',
  //     'linkedin': '',
  //     'gitHub': ''
  //   }
  // } else {
  //   dataCard = JSON.parse(localStorage.getItem('Business-Card'));
  // }

}

function recoverLocalStorage () {
  dataCard = JSON.parse(localStorage.getItem('Business-Card'));
  lSname.value = dataCard.name;
  lSjob.value = dataCard.occupation;
  uploadPhoto.style.backgroundImage = "'url("+dataCard.image+")'";
    //miniBox.style.backgroundImage = infoTarjeta.foto;
  lSmail.value = dataCard.email;
  lSphone.value = dataCard.telephone;
  lSlinkedin.value = dataCard.linkedin;
  lSgit.value = dataCard.gitHub;
}


btnCreateCard.addEventListener('click', saveLocalStorage);
recoverLocalStorage();

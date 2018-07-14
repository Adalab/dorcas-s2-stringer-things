'use strict';
alert('hola');
var resetbtn = document.querySelector('.resetbutton');
var card = document.querySelector('.card');
var fullName = document.querySelector('#fullname');
var profesion = document.querySelector('#profesion');

//Objeto que traemos del saveLocalStorage
// var resetCard = {};
// resetCard.name = 'Nombre Apellido';
// resetCard.occupation = 'Profesión';
// //resetCard.image = lSimg.value;
// resetCard.email = '';
// resetCard.telephone = '';
// resetCard.linkedin = '';
// resetCard.gitHub = '';
// localStorage.setItem('Reset-Card', JSON.stringify(resetCard));
// function resetFormCard() {

  function resetform() {
    document.querySelector('.form').reset();
    fullName.innerHTML = 'Nombre Apellido';
    profesion.innerHTML = 'Profesión';
    //var urlPhoto = "url(" + '"' + ../images/image-card + '"' + ")";
    uploadPhoto.style.backgroundImage = urlPhoto;
  };

  function resetSkills() {
    card.innerHTML = '';
  };

// }

resetbtn.addEventListener('click', resetform);

// function saveDefaults () {
  localStorage.setItem('name', 'Nombre apellido');
  localStorage.setItem('profession', 'Profesión');
// }
// saveDefaults();

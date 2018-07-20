'use strict';


const resetbtn = document.querySelector('.resetbutton');
const fullName = document.querySelector('#fullname');
const profesion = document.querySelector('#profesion');
const mobileNumber = document.querySelector('#mobile-link');
const mailAddress = document.querySelector('#mail-link');
const linkedinLink = document.querySelector('#linkedin-link');
const githubLink = document.querySelector('#github-link');

const cardReset = document.querySelector('.jsCard');
const showTwitter = document.querySelector('.js-hidden-twitter');
const btnCreateCardReset = document.querySelector('.js-btn-create-card');

//Objeto que traemos del saveLocalStorage
const resetCard = {};
resetCard.name = 'Nombre apellido';
resetCard.occupation = 'Profesión';
resetCard.email = '';
resetCard.telephone = '';
resetCard.linkedin = '';
resetCard.gitHub = '';
localStorage.setItem('Reset-Card', JSON.stringify(resetCard));


const resetform = ()=> {
  document.querySelector('.form').reset();

  resetCard = JSON.parse(localStorage.getItem('Reset-Card'));
  fullName.textContent=resetCard.name;
  profesion.textContent = resetCard.occupation;
  mobileNumber.href = resetCard.email;
  mailAddress.href = resetCard.telephone;
  linkedinLink.href = resetCard.linkedin;
  githubLink.href = resetCard.gitHub;
  uploadPhoto.style.backgroundImage = 'url(../images/image-card.png)';
  uploadMiniPhoto.style.backgroundImage = '';
  cardReset.classList.remove('green-card', 'red-card', 'blue-card');
  cardReset.classList.add('green-card');
  cardReset.classList.remove('ubuntu-card', 'comic-card', 'montse-card');
  cardReset.classList.add('comic-card');
  showTwitter.classList.add('js-hidden-twitter');
  btnCreateCardReset.classList.remove('js-press-button');
};


resetbtn.addEventListener('click', resetform);

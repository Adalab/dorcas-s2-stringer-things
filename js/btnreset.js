'use strict';


var resetbtn = document.querySelector('.resetbutton');
var fullName = document.querySelector('#fullname');
var profesion = document.querySelector('#profesion');
var mobileNumber = document.querySelector('#mobile-link');
var mailAddress = document.querySelector('#mail-link');
var linkedinLink = document.querySelector('#linkedin-link');
var githubLink = document.querySelector('#github-link');


//Objeto que traemos del saveLocalStorage
var resetCard = {};
resetCard.name = 'Nombre apellido';
resetCard.occupation = 'Profesión';
resetCard.email = '';
resetCard.telephone = '';
resetCard.linkedin = '';
resetCard.gitHub = '';
localStorage.setItem('Reset-Card', JSON.stringify(resetCard));

  function resetform() {
    document.querySelector('.form').reset();

    resetCard = JSON.parse(localStorage.getItem('Reset-Card'));
    fullName.textContent=resetCard.name;
    profesion.textContent = resetCard.occupation;
    mobileNumber.href = resetCard.email;
    mailAddress.href = resetCard.telephone;
    linkedinLink.href = resetCard.linkedin;
    githubLink.href = resetCard.gitHub;
    uploadPhoto.style.backgroundImage = 'url(../../images/image-card.png)';
    uploadMiniPhoto.style.backgroundImage = '';
  };


resetbtn.addEventListener('click', resetform);

'use strict';

<<<<<<< HEAD
var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image');
var fr = new FileReader();

function reWriteData(e){
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);
  var itemAttribute = fillInput.getAttribute('type');
  if (itemAttribute === 'number'){
    sendCont.href += fillInput.value;
  } else if (itemAttribute=== 'email'){
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'url'){
    var scriptUrl = fillInput.value.toString();
    console.log(scriptUrl);
    sendCont.href += scriptUrl;
  } else {
    sendCont.innerHTML = fillInput.value;
  }
}


for (var i=0; i<itemsSocialMedia.length; i++){
  itemsSocialMedia[i].addEventListener('change', reWriteData);
}




//Cargar Imagen

function mostrarImagen(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  var urlPhoto = 'url(' +'"' + fr.result + '"' +')';
  uploadPhoto.style.backgroundImage = urlPhoto;

}
function clickInput () {
  uploadInput.click();
}

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);


//Skills
var selectInputSkills = document.querySelector('.select-abilities');
var skillContainer = document.querySelector('.card_skills--list');

function selectSkills(){
var x = selectInputSkills.value;
skillContainer.innerHTML= '<li class="skill">' +x +'</li>';

}


selectInputSkills.addEventListener('click', selectSkills);



var buttonSkills = document.querySelectorAll('.js-button-abilities');
var boxSkills = document.querySelector('.js-ability-box');

function createSkill(event){


}


for(var i = 0; i < buttonSkills.length; i++){
  buttonSkills[i].addEventListener('click', createSkill);
=======
var activableSection = document.querySelectorAll('.js-collapsible-title');
var parent;
var fieldset = document.querySelectorAll('.js-collapsible-visible');

//abre y cierra colapsables
console.log(activableSection);

function collapsibleDesign(event) {
  parent = event.currentTarget.parentElement;
  console.log(parent);
  closeCollapsibles();
  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle('js-collapsible-visible');

}

for (var i = 0; i < activableSection.length; i++) {
  activableSection[i].addEventListener('click', collapsibleDesign);
  console.log(activableSection[i]);
}
// un colapsable abierto cada vez

function closeCollapsibles() {
  for (var i = 0; i < fieldset.length; i++) {
    console.log(activableSection.length);
    fieldset[i].classList.remove('js-collapsible-visible');
  }
>>>>>>> f0a9748ab3f61f1d15671574aac910e30acdbd75
}

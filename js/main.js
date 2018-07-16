'use strict';

//Preview card

var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image');
var uploadMiniPhoto = document.querySelector('.square__white');
var fr = new FileReader();

function reWriteData(e) {
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);
  var itemAttribute = fillInput.getAttribute('type');
  if (itemAttribute === 'number') {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'email') {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'url') {
    var scriptUrl = fillInput.value + '/';
    sendCont.href += scriptUrl;
  } else {
    sendCont.innerHTML = fillInput.value;
  }
}

//Cargar Imagen


function mostrarImagen(e) {
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  var urlPhoto = 'url(' + '"' + fr.result + '"' + ')';
  uploadPhoto.style.backgroundImage = urlPhoto;
  uploadMiniPhoto.style.backgroundImage = urlPhoto;
}

function clickInput() {
  uploadInput.click();
}
//console.log(uploadInput);
uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);

for (var i = 0; i < itemsSocialMedia.length; i++) {
  var targetAttribute = itemsSocialMedia[i].getAttribute('type');
  if (targetAttribute === 'url') {
    itemsSocialMedia[i].addEventListener('change', reWriteData);
  } else {
    itemsSocialMedia[i].addEventListener('keyup', reWriteData);
  }
}

//habilidades
var buttonAdd = document.querySelector('.js-button-abilitiesPlus');
var buttonRemove = document.querySelectorAll('.js-button-abilitiesMinus');
var boxSkills = document.querySelectorAll('.js-ability-box');
var selectSkills = document.querySelectorAll('.js-select-abilities');

function createOption(text) {
  //Crea un option
  var option = document.createElement('option');
  // Crea un nodo de texto
  var optionText = document.createTextNode(text);
  option.appendChild(optionText);
  return option;
}

function fillSelect() {
  var url =
    'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
  fetch(url)

    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      var skillsList = json.skills;
      for (var i = 0; i < skillsList.length; i++) {
        var newOption = createOption(skillsList[i]);
        selectInputSkills.appendChild(newOption);
      }
    });

}

function addSkill() {
  var boxHidden = document.querySelectorAll('.skills-hidden');

  if (boxHidden.length === 2) {
    boxSkills[1].classList.remove('skills-hidden');
  } else if (boxHidden.length === 1) {
    boxSkills[2].classList.remove('skills-hidden');
  } else {
    console.log('no hay mas habilidades que desplegar');
  }
}

function removeSkill(event) {
  var parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('skills-hidden');
}

buttonAdd.addEventListener('click', addSkill);
buttonRemove[0].addEventListener('click', removeSkill);
buttonRemove[1].addEventListener('click', removeSkill);
fillSelect();

//colapsables
var activableSection = document.querySelectorAll(".js-collapsible-title");
// var collapsibles = document.querySelector('.js-collapsible-visible');
var collapsibles = document.querySelectorAll('.js-collapsible-select')
//abre y cierra colapsables

function collapsibleDesign(event) {
  var parent = event.currentTarget.parentElement;
  //console.log(parent);
  closeCollapsibles();
  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle("js-collapsible-visible");
}

for (var i = 0; i < activableSection.length; i++) {
  activableSection[i].addEventListener('click', collapsibleDesign);
  //console.log(activableSection[i]);
}
// un colapsable abierto cada vez

function closeCollapsibles() {
  for (var i = 0; i < collapsibles.length; i++) {
    //console.log(activableSection.length);
    collapsibles[i].classList.remove('js-collapsible-visible');
  }
}

//actualizar colores
var radioButtonColor = document.querySelectorAll('.color-check');
var card = document.querySelector('.jsCard');
var attri;

function selectColorCard(event) {
  //console.log("que hay en radiobut", radioButtonColor);
  card.classList.remove('green-card', 'red-card', 'blue-card');
  attri = event.currentTarget.getAttribute('data-dest');
  card.classList.add(attri);
}

for (var j = 0; j < radioButtonColor.length; j++) {
  radioButtonColor[j].addEventListener('click', selectColorCard);
  //console.log(radioButtonColor[j]);
}

//actualizar fuentes

var radioButtonFont = document.querySelectorAll('.font-check');
var attriFont;

function selectFontCard(event) {
  //console.log("que hay en radiobut", radioButtonFont);
  card.classList.remove('ubuntu-card', 'comic-card', 'montse-card');
  attriFont = event.currentTarget.getAttribute('data-font');
  card.classList.add(attriFont);
}

for (var h = 0; h < radioButtonFont.length; h++) {
  radioButtonFont[h].addEventListener('click', selectFontCard);
  //console.log(radioButtonFont[h]);
}

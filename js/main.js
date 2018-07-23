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
const buttonAdd = document.querySelector('.js-button-abilitiesPlus');
const buttonRemove = document.querySelectorAll('.js-button-abilitiesMinus');
const boxSkills = document.querySelectorAll('.js-ability-box');
const selectSkills = document.querySelectorAll('.js-select-abilities');

//var selectInputSkills = document.querySelector('.js-select-abilities');

const createOption = text => {
  //Crea un option
  const option = document.createElement('option');
  // Crea un nodo de texto
  const optionText = document.createTextNode(text);
  option.appendChild(optionText);
  return option;
}

const fillSelect = () => {
  const url =
    'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const skillList = json.skills;
      skillList.unshift('Selecciona una habilidad');
      for (const selectSkill of selectSkills) {
        for (const skillElement of skillList) {
          var newSkillsOption = createOption(skillElement);
          selectSkill.appendChild(newSkillsOption);
        }
      }
    });

}

let pseudoBoxCardSkill;
//function addSkill() {
//  var boxHidden = document.querySelectorAll('.skills-hidden');

const skillContainer = document.querySelector('.js-card_skills--list');

const addSkill = () => {
  const boxCardSkill = document.querySelectorAll('.skill');
  const boxHidden = document.querySelectorAll('.skills-hidden');
  if (boxHidden.length === 2) {
    boxSkills[1].classList.remove('skills-hidden');
  } else if (boxHidden.length === 1) {
    boxSkills[2].classList.remove('skills-hidden');
  } else {
    console.log('no hay mas habilidades que desplegar');
  }

  if (boxCardSkill.length === 1) {
    pseudoBoxCardSkill = document.createElement('li');
    console.log(pseudoBoxCardSkill);
    pseudoBoxCardSkill.setAttribute('class','js-skill skill remove');
  } else if (boxCardSkill.length === 2) {
    pseudoBoxCardSkill = document.createElement('li');
    pseudoBoxCardSkill.setAttribute('class', 'js-skill skill remove');
  } else {
    console.log('no hay mas habilidades que añadir');
  }
  skillContainer.appendChild(pseudoBoxCardSkill);
}


const removeSkill = event => {
  const sizePseudoBoxCardSkill = document.querySelectorAll('.remove');
  const parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('skills-hidden');

  if(sizePseudoBoxCardSkill.length === 2){
    sizePseudoBoxCardSkill[1].remove();
  } else if(sizePseudoBoxCardSkill.length === 1){
    sizePseudoBoxCardSkill[0].remove();
  }
}

buttonAdd.addEventListener('click', addSkill);
buttonRemove[0].addEventListener('click', removeSkill);
buttonRemove[1].addEventListener('click', removeSkill);
fillSelect();

//HABILIDADES DE LA TARJETA


const addSelectSkills = () => {
  const newContentSkill;
  const newBoxSkill = document.querySelectorAll('.skill');

  for (var i = 0; i < newBoxSkill.length; i++){
    newContentSkill = document.createTextNode(selectSkills[i].value);
    newBoxSkill[i].innerHTML = '';
    newBoxSkill[i].appendChild(newContentSkill);
  }
}

for (var j = 0; j < selectSkills.length; j++) {
  selectSkills[j].addEventListener('change', addSelectSkills);
}

//colapsables
const activableSection = document.querySelectorAll('.js-collapsible-title');
const collapsibles = document.querySelectorAll('.js-collapsible-select');

// un colapsable abierto cada vez

const  closeCollapsibles =() => {
  for (const closedCollapsible of collapsibles){
    closedCollapsible.classList.remove('js-collapsible-visible');
  }
};

//abre y cierra colapsables

const collapsibleDesign = (event) => {
  const parent = event.currentTarget.parentElement;
  closeCollapsibles();
  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle('js-collapsible-visible');
};

for (const eachActivableSection of activableSection){
  eachActivableSection.addEventListener('click',collapsibleDesign);
}

//actualizar colores
var radioButtonColor = document.querySelectorAll('.color-check');
var card = document.querySelector('.jsCard');
var attri;

function selectColorCard(event) {
  //console.log('que hay en radiobut', radioButtonColor);
  card.classList.remove('green-card', 'red-card', 'blue-card');
  attri = event.currentTarget.getAttribute('data-dest');
  card.classList.add(attri);
}

for (var l = 0; l < radioButtonColor.length; l++) {
  radioButtonColor[l].addEventListener('click', selectColorCard);

}


//actualizar fuentes

var radioButtonFont = document.querySelectorAll('.font-check');
var attriFont;

function selectFontCard(event) {
  //console.log('que hay en radiobut', radioButtonFont);
  card.classList.remove('ubuntu-card', 'comic-card', 'montse-card');
  attriFont = event.currentTarget.getAttribute('data-font');
  card.classList.add(attriFont);
}

for (var m = 0; m < radioButtonFont.length; m++) {
  radioButtonFont[m].addEventListener('click', selectFontCard);
  //console.log(radioButtonFont[h]);
}

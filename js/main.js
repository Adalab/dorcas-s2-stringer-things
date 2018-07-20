'use strict';

//Preview card

const itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
const uploadBtn = document.querySelector('.fill-input__image');
const uploadInput = document.querySelector('.fill-input__input');
const uploadPhoto = document.querySelector('.card__image');
const uploadMiniPhoto = document.querySelector('.square__white');
const fr = new FileReader();


const reWriteData = (e) => {
  const fillInput = e.currentTarget;
  const targetInput = fillInput.getAttribute('data-stringer');
  const sendCont = document.querySelector('#' + targetInput);
  const itemAttribute = fillInput.getAttribute('type');
  if (itemAttribute === 'number') {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'email') {
    sendCont.href += fillInput.value;
  } else if (itemAttribute === 'url') {
    const scriptUrl = fillInput.value + '/';
    sendCont.href += scriptUrl;
  } else {
    sendCont.innerHTML = fillInput.value;
  }
};

//Cargar Imagen


const mostrarImagen = (e) => {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
};

const writeImage = () => {
  const urlPhoto = 'url(' + '"' + fr.result + '"' + ')';
  uploadPhoto.style.backgroundImage = urlPhoto;
  uploadMiniPhoto.style.backgroundImage = urlPhoto;
};

const clickInput = () => {
  uploadInput.click();
};

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);

for (const socialMediaItems of itemsSocialMedia.length) {
  const targetAttribute = socialMediaItems.getAttribute('type');
  if (targetAttribute === 'url') {
    socialMediaItems.addEventListener('change', reWriteData);
  } else {
    socialMediaItems.addEventListener('keyup', reWriteData);
  }
}

//habilidades
var buttonAdd = document.querySelector('.js-button-abilitiesPlus');
var buttonRemove = document.querySelectorAll('.js-button-abilitiesMinus');
var boxSkills = document.querySelectorAll('.js-ability-box');
var selectSkills = document.querySelectorAll('.js-select-abilities');

//var selectInputSkills = document.querySelector('.js-select-abilities');

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
      var skillList = json.skills;
      skillList.unshift('Selecciona una habilidad');
      for (var i = 0; i < selectSkills.length; i++) {
        for (var j = 0; j < skillList.length; j++) {
          var newSkillsOption = createOption(skillList[j]);
          selectSkills[i].appendChild(newSkillsOption);
        }
      }
    });

}

var pseudoBoxCardSkill;
//function addSkill() {
//  var boxHidden = document.querySelectorAll('.skills-hidden');

var skillContainer = document.querySelector('.js-card_skills--list');

function addSkill() {
  var boxCardSkill = document.querySelectorAll('.skill');
  var boxHidden = document.querySelectorAll('.skills-hidden');
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


function removeSkill(event) {
  var sizePseudoBoxCardSkill = document.querySelectorAll('.remove');
  var parentBox = event.currentTarget.parentElement;
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


function addSelectSkills() {
  var newContentSkill;
  var newBoxSkill = document.querySelectorAll('.skill');

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
var activableSection = document.querySelectorAll('.js-collapsible-title');
var collapsibles = document.querySelectorAll('.js-collapsible-select');

//abre y cierra colapsables

function collapsibleDesign(event) {
  var parent = event.currentTarget.parentElement;
  closeCollapsibles();
  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle('js-collapsible-visible');
}

for (var k = 0; k < activableSection.length; k++) {
  activableSection[k].addEventListener('click', collapsibleDesign);
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

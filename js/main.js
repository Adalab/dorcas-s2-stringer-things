'use strict';

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


for (var i = 0; i < itemsSocialMedia.length; i++) {
  var targetAttribute = itemsSocialMedia[i].getAttribute('type');
  if (targetAttribute === 'url') {
    itemsSocialMedia[i].addEventListener('change', reWriteData);
  } else {
    itemsSocialMedia[i].addEventListener('keyup', reWriteData);
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

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);


//Skills
var selectInputSkills = document.querySelector('.js-select-abilities');
var selectInputSkillsContainer = document.querySelector('.js-ability-box');
var skillContainer = document.querySelector('.js-card_skills--list');
var buttonSkills = document.querySelectorAll('js-button-abilities');

function createOption(text) {
  //Crea un option
  var option = document.createElement('option');
  // Crea un nodo de texto
  var optionText = document.createTextNode(text);
  // Añade el nodo de texto al option
  option.appendChild(optionText);

  // Devuelve el option creado con su nodo de texto y atributos
  return option;
}

function searchSkills() {
  var url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      var skillsList = json.skills;
      //console.log(skillsList);
      for (var i = 0; i < skillsList.length; i++) {
        var newOption = createOption(skillsList[i]);
        selectInputSkills.appendChild(newOption);
      }
    });
}

searchSkills();

function selectSkills() {
  var x = selectInputSkills.value;
  skillContainer.innerHTML = '<li class="skill">' + x + '</li>';
}

selectInputSkills.addEventListener('click', selectSkills);

function createSelectSkill () {
  var newSelect = document.createElement('select');
  newSelect.classList.add('select-abilities');
  var newOptionDefault =

}

function addSelectSkill() {
  var newSelectList = createSelectSkill();
  selectInputSkillsContainer.appendChild(newSelectList);

// create box skills
var buttonSkills = document.querySelectorAll('.js-button-abilities');
var boxSkills = document.querySelectorAll('.js-ability-box');
var dataType;
var dataIndex = 0;
var contador = 0;
var dataIndexPlus = 1;


function createSkill(event){
  for (var i = 0; i < boxSkills.length; i++){
    dataType = event.currentTarget.getAttribute('data-type');
    dataIndex = event.currentTarget.getAttribute('data-index');
    dataIndex = parseInt(dataIndex);
    // console.log('dataType' ,dataType);
    // console.log('dataIndex' ,dataIndex);
    // console.log('dataIndex type' ,typeof dataIndex);
    if((boxSkills[dataIndex].classList.contains('hidden'))) {
      console.log(boxSkills[dataIndex].classList.contains('hidden'));
      console.log('menos');
      // boxSkills[dataIndex].classList.add('hidden', 'plus');
      boxSkills[dataIndex].classList.add(dataType);
    } else if ((boxSkills[dataIndex].classList.contains('plus'))){
      console.log('mas');
      // console.log('dataIndex' ,dataIndex);
      boxSkills[dataIndexPlus].classList.add(dataType);
     } //else {
  //     alert('El dataType no existe');
  //   }
  // }
  for (var i = 0; i < 2; i++){
    dataIndexPlus = contador + 1;
  }
  console.log('contador', contador);
  contador++;
}
}


for (var i = 0; i < buttonSkills.length; i++) {
buttonSkills.addEventListener('click',addSelectSkill);
}


// create box skills
// var buttonSkills = document.querySelectorAll('.js-button-abilities');
// var boxSkills = document.querySelectorAll('.js-ability-box');
// var dataType;
// var dataIndex = 0;
//
// function createSkill(event) {
//   for (var i = 0; i < boxSkills.length; i++) {
//     dataType = event.currentTarget.getAttribute('data-type');
//     dataIndex = event.currentTarget.getAttribute('data-index');
//     dataIndex = parseInt(dataIndex);
//     console.log('dataType', dataType);
//     console.log('dataIndex type', typeof dataIndex);
//     if (dataType === 'hidden') {
//       boxSkills[dataIndex].classList.add(dataType);
//     } else if (dataType === 'plus') {
//       console.log('dataIndex', dataIndex);
//       dataIndex = dataIndex + 1;
//       boxSkills[dataIndex].classList.add(dataType);
//     }
//   }
// }
//
// for (var i = 0; i < buttonSkills.length; i++) {
//   buttonSkills[i].addEventListener('click', createSkill);
// }


//Boton resetbutton

var resetbtn = document.querySelector('.resetbutton');

function resetFormCard() {
  function resetform() {
    document.querySelector('.form').reset();
  };

  function resetSkills() {
    skillContainer.innerHTML = '';
  };

}

resetbtn.addEventListener('click', resetFormCard);

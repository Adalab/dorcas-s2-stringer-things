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

//Skills
var selectInputSkills = document.querySelector('.js-select-abilities');
var selectInputSkillsContainer = document.querySelector('.js-ability-box');
var skillContainer = document.querySelector('.js-card_skills--list');
var buttonSkills = document.querySelectorAll('.js-button-abilities');

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
    "https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json";
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

function createSelectSkill () {
  var newSelect = document.createElement('select');
  newSelect.classList.add('select-abilities');
  // var newOptionDefault =
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

        boxSkills[dataIndexPlus].classList.add(dataType);
      } //else {
      //   }
      // }
      for (var i = 0; i < 2; i++){
        dataIndexPlus = contador + 1;
      }
      console.log('contador', contador);
      contador++;
    }
  }
  buttonAdd.addEventListener('click', addSkill);
  buttonRemove[0].addEventListener('click', removeSkill);
  buttonRemove[1].addEventListener('click', removeSkill);
  fillSelect();

  //HABILIDADES DE LA TARJETA
  // var skillContainer = document.querySelector(".js-card_skills--list");

  // function addSelectSkills() {
  //   skillContainer.innerHTML = '';
  //   console.log('contenedor',skillContainer);
  //   console.log('tamaño contenedor',selectSkills.length);
  //   for (var i = 0; i < selectSkills.length; i++) {
  //     // if()
  //     console.dir(selectSkills[i]);
  //     console.log(selectSkills[i].value);
  //     skillContainer.innerHTML += '<li class="skill">' + selectSkills[i].value + '</li>';
  //   }
// //   var currentSkill = e.currentTarget.value;
// //   //for (var i=0; i<selectSkills.length; i++) {
// //   // console.log(selectSkills);
// //   // var x = selectSkills[i].value;
// //   // console.dir(selectSkills.value);
// //   //}
// //   var boxCardSkill = document.querySelectorAll('.skill');
// //   console.log('cuantas cajas de habiliadades hay en la tarjeta?',boxCardSkill.length);
// //   if (boxCardSkill.length < 3){
// //     skillContainer.innerHTML += '<li class="skill">' + currentSkill + '</li>';
// //   } else {
// //     console.log('No tienes tantas habilidades tio!!');
// //   }
// }


  for (var i = 0; i < buttonSkills.length; i++) {
    buttonSkills.addEventListener('click',addSelectSkill);

// for (var i = 0; i < selectSkills.length; i++) {
//   selectSkills[i].addEventListener('change', addSelectSkills);
// }

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
  activableSection[i].addEventListener("click", collapsibleDesign);
  //console.log(activableSection[i]);
}
// un colapsable abierto cada vez

function closeCollapsibles() {
  for (var i = 0; i < collapsibles.length; i++) {
    //console.log(activableSection.length);
    collapsibles[i].classList.remove("js-collapsible-visible");
  }
}

  //
  //   for(var i = 0; i < buttonSkills.length; i++){
  //     buttonSkills[i].addEventListener('click', createSkill);
  //     var activableSection = document.querySelectorAll('.js-collapsible-title');
  //     var parent;
  //     var fieldset = document.querySelectorAll('.js-collapsible-visible');
  //
  //     //abre y cierra colapsables
  //     console.log(activableSection);
  //
  //     function collapsibleDesign(event) {
  //       parent = event.currentTarget.parentElement;
  //       console.log(parent);
  //       closeCollapsibles();
  //       // Si contiene la clase hidden la elimina y sino la añade
  //       parent.classList.toggle('js-collapsible-visible');
  //     }
  //
  //     for (var i = 0; i < activableSection.length; i++) {
  //       activableSection[i].addEventListener('click', collapsibleDesign);
  //       console.log(activableSection[i]);
  //     }
  //     // un colapsable abierto cada vez
  //
  //     function closeCollapsibles() {
  //       for (var i = 0; i < fieldset.length; i++) {
  //         console.log(activableSection.length);
  //         fieldset[i].classList.remove('js-collapsible-visible');
  //       }
  //     }
  //
  //     // create box skills
  //     var buttonSkills = document.querySelectorAll('.js-button-abilities');
  //     var boxSkills = document.querySelectorAll('.js-ability-box');
  //     var dataType;
  //     var dataIndex = 0;
  //
  //     function createSkill(event) {
  //       for (var i = 0; i < boxSkills.length; i++) {
  //         dataType = event.currentTarget.getAttribute('data-type');
  //         dataIndex = event.currentTarget.getAttribute('data-index');
  //         dataIndex = parseInt(dataIndex);
  //         console.log('dataType', dataType);
  //         console.log('dataIndex type', typeof dataIndex);
  //         if (dataType === 'hidden') {
  //           boxSkills[dataIndex].classList.add(dataType);
  //         } else if (dataType === 'plus') {
  //           console.log('dataIndex', dataIndex);
  //           dataIndex = dataIndex + 1;
  //           boxSkills[dataIndex].classList.add(dataType);
  //         }
  //       }
  //     }
  //
  //     for (var i = 0; i < buttonSkills.length; i++) {
  //       buttonSkills[i].addEventListener('click', createSkill);
  //     }
  // }
  // for (var i = 0; i < selectSkills.length; i++) {
  //   selectSkills[i].addEventListener('change', addSelectSkills);
  // }

  //colapsables
  // var activableSection = document.querySelectorAll(".js-collapsible-title");
  // var parent;
  // var fieldset = document.querySelectorAll(".js-collapsible-visible");

  //abre y cierra colapsables
  //console.log(activableSection);

  // function collapsibleDesign(event) {
  //   parent = event.currentTarget.parentElement;
  //   //console.log(parent);
  //   closeCollapsibles();
  //   // Si contiene la clase hidden la elimina y sino la añade
  //   parent.classList.toggle("js-collapsible-visible");
  // }
  //
  // for (var i = 0; i < activableSection.length; i++) {
  //   activableSection[i].addEventListener("click", collapsibleDesign);
  //   //console.log(activableSection[i]);
  // }
  // // un colapsable abierto cada vez
  //
  // function closeCollapsibles() {
  //   for (var i = 0; i < fieldset.length; i++) {
  //     //console.log(activableSection.length);
  //     fieldset[i].classList.remove("js-collapsible-visible");
  //   }
  // }

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

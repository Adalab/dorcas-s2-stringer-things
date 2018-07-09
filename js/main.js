'use strict';

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
}


//actualizar colores
var radioButtonColor = document.querySelectorAll('.color-check');
var card = document.querySelector('.jsCard');
var attri;

function selectColorCard(event) {
  console.log('que hay en radiobut', radioButtonColor);
  card.classList.remove('green-card', 'red-card', 'blue-card');
  attri = event.currentTarget.getAttribute('data-dest');
  card.classList.add(attri);
}

for (var j = 0; j < radioButtonColor.length; j++) {
  radioButtonColor[j].addEventListener('click', selectColorCard);
  console.log(radioButtonColor[j]);
}

//actualizar fuentes


var radioButtonFont = document.querySelectorAll('.font-check');
var attriFont;

function selectFontCard(event) {
  console.log('que hay en radiobut', radioButtonFont);
  card.classList.remove('ubuntu-card', 'comic-card', 'montse-card');
  attriFont = event.currentTarget.getAttribute('data-font');
  card.classList.add(attriFont);
}

for (var h = 0; h < radioButtonFont.length; h++) {
  radioButtonFont[h].addEventListener('click', selectFontCard);
  console.log(radioButtonFont[h]);
}

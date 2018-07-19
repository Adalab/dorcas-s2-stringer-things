'use strict';
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

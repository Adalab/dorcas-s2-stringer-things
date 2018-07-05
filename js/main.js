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
var radioButton = document.querySelectorAll('.color-check');
var cardColor = document.querySelector('.jsCard');

function selectColorCard(event) {
  //DEFINIR QUE SE PONEN LOS COLORES QUE TU QUIERES EN LA CARTA
  // parent = event.currentTarget.parentElement;
  // console.log(parent);
  // closeCollapsibles();
  // Si contiene la clase hidden la elimina y sino la añade
  cardColor.classList.add('red-card');

}

for (var i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener('click', selectColorCard);
  console.log(radioButton[i]);
}

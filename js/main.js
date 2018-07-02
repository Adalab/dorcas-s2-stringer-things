'use strict';

var inputName = document.querySelector('.js-personal-name');
var cardName = document.querySelector('.js-card__top--name');
var activableSection = document.querySelectorAll('.js-collapsible-title');
var SectionHidden = document.querySelectorAll('.js-collapsible-form');
var valueFillInput;

function reWriteName() {
  valueFillInput = inputName.value;
  cardName.innerHTML = valueFillInput;
}

inputName.addEventListener('change', reWriteName);

function collapsibleDesign(event) {
  var parent = event.currentTarget.parentElement;

  // console.dir(parent);

  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle('hidden');
}

for (var i = 0; i < activableSection.length; i++) {
  activableSection[i].addEventListener('click', collapsibleDesign);
}





// for (var i = 0; i < fruits.length; i++) {
//   fruits[i].addEventListener('click', showAlertWithFruit);
// }

// function showAlertWithFruit(event){
//   alert(event.currentTarget.innerHTML);
// }

'use strict';

var inputName = document.querySelector('.personal-name');
var inputJobTitle = document.querySelector('.job-title');

// var inputPhoto = document.querySelector('.fill-input__image');
// var cardPhoto = document.querySelectSor('.card__image');
// var activableSectionDesign = document.querySelector('.design__title');
// var SectionHiddenDesign = document.querySelector('.design__form');

// variables rrss
// var mobile = document.querySelector('#phone');s
// var mail = document.querySelector('#emailaddress');
// var linkedin = document.querySelector('#lkdn');
// var github = document.querySelector('#gh');


function linkSM(e){
  var fillLink = e.currentTarget;
  var targetLink = fillLink.getAttribute('data-things');
  var hrefNasi = "";
  if ()
  document.querySelector('#' + targetLink).href = "mailto:"+fillLink.value;
  //linkedin.setAttribute("href", (fdocument.querySelector('#' + targetLink));
}



var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
for (var i=0; i<itemsSocialMedia.length; i++){
  itemsSocialMedia[i].addEventListener('keyup', linkSM);
}


// cubrir nombre y puesto trabajo
function reWriteData(e) {
  var fillInput = e.currentTarget;
  var targetID = fillInput.getAttribute('data-stringer');
  document.querySelector('#' + targetID).innerHTML = fillInput.value;
}

inputName.addEventListener('keyup', reWriteData);
inputJobTitle.addEventListener('keyup', reWriteData);

// cubrir redes sociales




function addCardPhoto(){
  addPhoto = inputPhoto.value;
  cardPhoto.innerHTML = addPhoto;
}

inputPhoto.addEventListener("click", addCardPhoto);

function collapsibleDesign() {
  // Si contiene la clase hidden la elimina y sino la añade
  SectionHiddenDesign.classList.toggle('hidden');
}

activableSectionDesign.addEventListener('click', collapsibleDesign);

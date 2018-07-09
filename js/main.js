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
  var hrefNasi = '';
  if (fillLink.type===email.type){
    document.querySelector('#' + targetLink).href = 'mailto:'+fillLink.value;
  } else if(fillLink.type===number){
    document.querySelector('#' + targetLink).href = 'tel:'+fillLink.value;
  } else {
    document.querySelector('#' + targetLink).href += fillLink.value;
    //linkedin.setAttribute("href", (fdocument.querySelector('#' + targetLink));
  }
}

var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image');
var fr = new FileReader();
//console.log(itemsSocialMedia);

function reWriteData(e){
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);

  for (var i =0; i <itemsSocialMedia.length; i++) {
    var itemAttribute = itemsSocialMedia.getAttribute('type');
    console.log(itemAttribute);
    if (itemAttribute === 'number'){
      sendCont.href += fillInput.value;
    } else if (itemAttribute=== 'email'){
      sendCont.href += fillInput.value;
    } else if (itemAttribute === 'url'){
      sendCont.href += fillInput.value;
    } else {
      sendCont.innerHTML = fillInput.value;
    }
}
}


for (var i=0; i<itemsSocialMedia.length; i++){
  itemsSocialMedia[i].addEventListener('keyup', reWriteData);
}


//Cargar Imagen

function mostrarImagen(e){
  var myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  alert('hola');
  console.log(fr.result);
  //uploadPhoto.style.backgroundImage = 'url(' +'"' + fr.result + '"' +');';
  uploadPhoto.style.backgroundImage = 'url(' +'"' + fr.result + '"' +');';

}
function clickInput () {
  uploadInput.click();
}

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);

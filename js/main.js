'use strict';
var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image');
var fr = new FileReader();

function reWriteData(e){
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);
  for (var i =0; i <itemsSocialMedia.length; i++) {
    if (itemsSocialMedia.type === 'number'){
      sendCont.href += fillInput.value;
    } else if (itemsSocialMedia.type === 'email'){
      sendCont.href += fillInput.value;
    } else if (itemsSocialMedia.type === 'url'){
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
  uploadPhoto.src= fr.result;
}
function clickInput () {
  uploadInput.click();
}

uploadInput.addEventListener('change', mostrarImagen);
uploadBtn.addEventListener('click', clickInput);

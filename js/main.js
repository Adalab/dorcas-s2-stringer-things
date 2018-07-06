'use strict';

//Cubrir datos TARJETA
var itemsSocialMedia = document.querySelectorAll('.fill-input__placeholder');
var uploadBtn = document.querySelector('.fill-input__image');
var uploadInput = document.querySelector('.fill-input__input');
var uploadPhoto = document.querySelector('.card__image-img');
var fr = new FileReader();

function reWriteData(e){
  var fillInput = e.currentTarget;
  var targetInput = fillInput.getAttribute('data-stringer');
  var sendCont = document.querySelector('#' + targetInput);
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


for (var i=0; i<itemsSocialMedia.length; i++){
  itemsSocialMedia[i].addEventListener('keyup', reWriteData);
}


//Cargar Imagen

function init() {
  uploadInput.addEventListener('change', mostrarImagen);
}

function mostrarImagen(e) {
  var file = e.target.files[0];
  var fr = new FileReader();
  fr.onload = function(e) {
    uploadPhoto.src= e.target.result;
  }
  reader.readAsDataURL(file);
}

function clickInput () {
  uploadInput.click();
}

uploadInput.addEventListener('load', init);
uploadBtn.addEventListener('click', clickInput);

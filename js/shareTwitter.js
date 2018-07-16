'use strict';

var btnCreateCard = document.querySelector('.js-btn-create-card');
var photoFileReader = new FileReader();
var form = document.querySelector('.formjs');
var responseURL = document.querySelector('.link-awesome');



function getJSONFromInputs(inputs) {
  return inputs.reduce(function (acc, val) {
    if (val.type==='radio' && val.checked===true) {
      acc[val.name] = val.value;
    }
    if ((val.nodeName !== 'BUTTON') && (val.nodeName !== 'FIELDSET') && (val.type!=='radio') && ( val.type !== 'select-one' ) ) {
      acc[val.name] = val.value;
    }
    if ( val.type === 'select-one' ){
      if (val.value !== 'Selecciona una habilidad'){
        acc.skills.push(val.value);
      }
    }
    return acc;
  }, {skills: []});
}


function sendData() {
  var inputs = Array.from(form.elements);
  console.log(inputs);
  var json = getJSONFromInputs(inputs);
  // json.skills = ['Javascript', ' React'];
  json.photo = photoFileReader.result;
  delete json[''];
  sendRequest(json);
}

function loadPhoto() {
  var showTwitter = document.querySelector('.js-hidden-twitter');
  var addedPhoto = document.querySelector('#add-image').files[0];
  showTwitter.classList.remove('js-hidden-twitter');
  if(addedPhoto){
    photoFileReader.addEventListener('load', sendData);
    photoFileReader.readAsDataURL(addedPhoto);
  } else {
    console.log('Carga la foto melon!!');
  }
}

function sendRequest(json) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(json),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

var tweet;
function showURL(result) {
  if (result.success) {
    responseURL.innerHTML = '<a class="link-awesome" target="_blank" href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
  tweet = result.cardURL;
}

btnCreateCard.addEventListener('click', loadPhoto);


// Compartir tarjeta en Twitter
var btnShareTwitter = document.querySelector('.btn-sharejs');
var btnToTwitter = document.querySelector('.link-awesome');
var linkToTwitter = document.querySelector('.linkTwitter');
function shareTwitter () {
  linkToTwitter.href = 'https://twitter.com/intent/tweet?url=' + tweet + '&text=Tarjeta%20de%20de%20presentacion%20con%20Awesome%20profile-cards%20(StringerThings%20-%20Sprint2%20de%20Adalab)&hashtags=WomenInTech';
}

function clickA () {
  linkToTwitter.click();
}
linkToTwitter.addEventListener('click', shareTwitter);
btnShareTwitter.addEventListener('click', clickA);

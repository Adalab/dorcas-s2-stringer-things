'use strict';

var btnCreateCard = document.querySelector('.js-btn-create-card');
var photoFileReader = new FileReader();
var form = document.querySelector('.formjs');
var responseURL = document.querySelector('.link-awesome');



function getJSONFromInputs(inputs) {
  console.log(inputs);
  return inputs.reduce(function (acc, val) {
    console.log(val.nodeName);
    if (val.type==='radio' && val.checked===true) {
      acc[val.name] = val.value;
    }
    if ((val.nodeName !== 'BUTTON') && (val.nodeName !== 'FIELDSET') && (val.type!=='radio') ) {
      acc[val.name] = val.value;
    }
    return acc;
  }, {});
}


function sendData() {
  var inputs = Array.from(form.elements);
  var json = getJSONFromInputs(inputs);
  json.skills = ['Javascript', ' React'];
  json.photo = photoFileReader.result;
  delete json[''];
  console.log(json);
  sendRequest(json);
}

function loadPhoto() {
  console.log(btnCreateCard);
  var addedPhoto = document.querySelector('#add-image').files[0];
  photoFileReader.addEventListener('load', sendData);
  photoFileReader.readAsDataURL(addedPhoto);
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
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
  tweet = result.cardURL;
  console.log(tweet);
}

btnCreateCard.addEventListener('click', loadPhoto);


// Compartir tarjeta en Twitter
var btnShareTwitter = document.querySelector('.btn-sharejs');
var btnToTwitter = document.querySelector('.link-awesome');
var linkToTwitter = document.querySelector('.linkTwitter');
function shareTwitter () {
  console.dir(btnShareTwitter);
  linkToTwitter.href = 'https://twitter.com/intent/tweet?url=' + tweet + '&text=Tarjeta%20de%20de%20presentacion%20con%20Awesome%20profile-cards%20(StringerThings%20-%20Sprint2%20de%20Adalab)&hashtags=WomenInTech';
}
console.dir(btnShareTwitter);
function clickA () {
  linkToTwitter.click();
}
linkToTwitter.addEventListener('click', shareTwitter);
btnShareTwitter.addEventListener('click', clickA);

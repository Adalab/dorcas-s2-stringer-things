'use strict';

var btnCreateCard = document.querySelector('.js-btn-create-card');
var photoFileReader = new FileReader();
var form = document.querySelector('.formjs');
var responseURL = document.querySelector('.phrase');



function getJSONFromInputs(inputs) {
  return inputs.reduce(function(acc, val) {
    if (val.type==='radio' && val.checked===true) {
      acc[val.name] = val.value;
    }
      if ((val.nodeName !== 'BUTTON') && (val.nodeName !== 'FIELDSET') && (val.nodeName !== 'SELECT'))
        acc[val.name] = val.value;
        return acc;
      }, {})
  }

  unction getJSONFromInputs(inputs){
    console.log('inputs', inputs);
    // return inputs.reduce(function (acc, val) {
    //   if(val.nodeName !== 'BUTTON')
    //     acc[val.name] = val.value;
    //   return acc;

    return inputs.reduce(function (acc, val) {
     console.log(val.nodeName);


     if (val.type==='radio' && val.checked===true) {
       acc[val.name] = val.value;
     }
     if ((val.nodeName !== 'BUTTON') && (val.nodeName !== 'FIELDSET') && (val.type!=='radio') ){
       acc[val.name] = val.value;
     }

     return acc;
    }, {});
  }

function sendData() {
  var inputs = Array.from(form.elements);
  //console.log(inputs);
  var json = getJSONFromInputs(inputs);
  json.skills = ['Javascript', ' React'];
  json.photo = photoFileReader.result;
  //console.log(json);
  delete json[''];
  console.log(json);
  sendRequest(json);
}

function loadPhoto() {
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

function showURL(result) {
  if (result.success) {
    responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
}

btnCreateCard.addEventListener('click', loadPhoto);
console.log(btnCreateCard);

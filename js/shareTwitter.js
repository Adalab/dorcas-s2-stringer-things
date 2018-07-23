'use strict';

const buttonCreateCard = document.querySelector('.js-btn-create-card');
const photoFileReader = new FileReader();
const form = document.querySelector('.formjs');
const responseURL = document.querySelector('.link-awesome');



const getJSONFromInputs = (inputs) => {
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
};


const sendData = () => {
  let inputs = Array.from(form.elements);
  console.log(inputs);
  let json = getJSONFromInputs(inputs);
  // json.skills = ['Javascript', ' React'];
  json.photo = photoFileReader.result;
  delete json[''];
  sendRequest(json);
  localStorage.setItem('Business-Card', JSON.stringify(json));
};

const loadPhoto = () => {
  const showTwitter = document.querySelector('.js-hidden-twitter');
  let addedPhoto = document.querySelector('#add-image').files[0];
  showTwitter.classList.remove('js-hidden-twitter');
  buttonCreateCard.classList.add('js-press-button');
  if(addedPhoto){
    photoFileReader.addEventListener('load', sendData);
    photoFileReader.readAsDataURL(addedPhoto);
  } else {
    console.log('Carga la foto melon!!');
  }
};

const sendRequest = (json)=> {
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
};

let tweet;
const showURL = (result) =>{
  if (result.success) {
    responseURL.innerHTML = '<a class="link-awesome" target="_blank" href=' + result.cardURL + '>' + result.cardURL + '</a>';
  } else {
    responseURL.innerHTML = 'ERROR:' + result.error;
  }
  tweet = result.cardURL;
};
buttonCreateCard .addEventListener('click', loadPhoto);


// Compartir tarjeta en Twitter
const btnShareTwitter = document.querySelector('.btn-sharejs');
const btnToTwitter = document.querySelector('.link-awesome');
const linkToTwitter = document.querySelector('.linkTwitter');
let shareTwitter= () => {
  linkToTwitter.href = 'https://twitter.com/intent/tweet?url=' + tweet + '&text=Tarjeta%20de%20de%20presentacion%20con%20Awesome%20profile-cards%20(StringerThings%20-%20Sprint2%20de%20Adalab)&hashtags=WomenInTech';
};

const clickA = () => {
  linkToTwitter.click();
};
linkToTwitter.addEventListener('click', shareTwitter);
btnShareTwitter.addEventListener('click', clickA);

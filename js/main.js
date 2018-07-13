'use strict';

var buttonAdd = document.querySelector('.js-button-abilitiesPlus');
var buttonRemove = document.querySelectorAll('.js-button-abilitiesMinus');
var boxSkills = document.querySelectorAll('.js-ability-box');
var selectSkills = document.querySelectorAll('.js-select-abilities');

function createOption(text){
  var option = document.createElement('option');
  var optionText = document.createTextNode(text);
  option.appendChild(optionText);
  return option;
}

function fillSelect() {
  var url = 'https://raw.githubusercontent.com/Adalab/dorcas-s2-proyecto-data/master/skills.json';
  fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      var skillList =json.skills;
      console.log(skillList);
      for (var i = 0; i < selectSkills.length; i++){
        for(var j = 0; j < skillList.length; j++){
          var newSkillsOption = createOption(skillList[j]);
          console.log(newSkillsOption);
          selectSkills[i].appendChild(newSkillsOption);
        }
      }
    });
}

function addSkill(){
  var boxHidden = document.querySelectorAll('.hidden');

  if(boxHidden.length === 2 ){
    boxSkills[1].classList.remove('hidden');
  } else if (boxHidden.length === 1 ) {
    boxSkills[2].classList.remove('hidden');
  } else {
    console.log('no hay mas habilidades que desplegar');
  }
}

function removeSkill(event){
  var parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('hidden');
}

buttonAdd.addEventListener('click', addSkill);
buttonRemove[0].addEventListener('click', removeSkill);
buttonRemove[1].addEventListener('click', removeSkill);

fillSelect();

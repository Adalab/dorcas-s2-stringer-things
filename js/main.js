'use strict';

var buttonAdd = document.querySelector('.js-button-abilitiesPlus');
var buttonRemove = document.querySelectorAll('.js-button-abilitiesMinus');
var boxSkills = document.querySelectorAll('.js-ability-box');
var selectSkills = document.querySelectorAll('.js-select-abilities');

console.log(buttonAdd);

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
  var boxHidden = document.querySelectorAll('.skills-hidden');

  console.log(boxHidden.length);

  if(boxHidden.length === 2 ){
    boxSkills[1].classList.remove('skills-hidden');
  } else if (boxHidden.length === 1 ) {
    boxSkills[2].classList.remove('skills-hidden');
  } else {
    console.log('no hay mas habilidades que desplegar');
  }
}

function removeSkill(event){

  var parentBox = event.currentTarget.parentElement;
  parentBox.classList.add('skills-hidden');
}
console.log(buttonRemove);
buttonAdd.addEventListener('click', addSkill);
buttonRemove[0].addEventListener('click', removeSkill);
buttonRemove[1].addEventListener('click', removeSkill);

fillSelect();
var activableSection = document.querySelectorAll('.js-collapsible-title');
var parent;
var fieldset = document.querySelectorAll('.js-collapsible-visible');

//abre y cierra colapsables
console.log(activableSection);

function collapsibleDesign(event) {
  parent = event.currentTarget.parentElement;
  console.log(parent);
  closeCollapsibles();
  // Si contiene la clase hidden la elimina y sino la añade
  parent.classList.toggle('js-collapsible-visible');

}

for (var i = 0; i < activableSection.length; i++) {
  activableSection[i].addEventListener('click', collapsibleDesign);
  console.log(activableSection[i]);
}
// un colapsable abierto cada vez

function closeCollapsibles() {
  for (var i = 0; i < fieldset.length; i++) {
    console.log(activableSection.length);
    fieldset[i].classList.remove('js-collapsible-visible');
  }
}

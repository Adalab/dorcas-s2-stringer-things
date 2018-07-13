'use strict';

// create box skills
// var buttonSkills = document.querySelectorAll(".js-button-abilities");
// var boxSkills = document.querySelectorAll(".js-ability-box");
// var dataType;
// var dataIndex = 0;
// var contador = 0;
// var dataIndexPlus = 1;

// function createSkill(event) {
//   for (var i = 0; i < boxSkills.length; i++) {
//     dataType = event.currentTarget.getAttribute("data-type");
//     dataIndex = event.currentTarget.getAttribute("data-index");
//     dataIndex = parseInt(dataIndex);
//     // console.log('dataType' ,dataType);
//     // console.log('dataIndex' ,dataIndex);
//     // console.log('dataIndex type' ,typeof dataIndex);
//     if (boxSkills[dataIndex].classList.contains("hidden")) {
//       console.log(boxSkills[dataIndex].classList.contains("hidden"));
//       console.log("menos");
//       // boxSkills[dataIndex].classList.add('hidden', 'plus');
//       boxSkills[dataIndex].classList.add(dataType);
//     } else if (boxSkills[dataIndex].classList.contains("plus")) {
//       console.log("mas");
//       // console.log('dataIndex' ,dataIndex);
//       boxSkills[dataIndexPlus].classList.add(dataType);
//     } //else {
//     //     alert('El dataType no existe');
//     //   }
//     // }
//     for (var i = 0; i < 2; i++) {
//       dataIndexPlus = contador + 1;
//     }
//     console.log("contador", contador);
//     contador++;
//   }
// }

// for (var i = 0; i < buttonSkills.length; i++) {
//   buttonSkills[i].addEventListener("click", addSelectSkill);
// }



// create box skills
// var buttonSkills = document.querySelectorAll('.js-button-abilities');
// var boxSkills = document.querySelectorAll('.js-ability-box');
// var dataType;
// var dataIndex = 0;
//
// function createSkill(event) {
//   for (var i = 0; i < boxSkills.length; i++) {
//     dataType = event.currentTarget.getAttribute('data-type');
//     dataIndex = event.currentTarget.getAttribute('data-index');
//     dataIndex = parseInt(dataIndex);
//     console.log('dataType', dataType);
//     console.log('dataIndex type', typeof dataIndex);
//     if (dataType === 'hidden') {
//       boxSkills[dataIndex].classList.add(dataType);
//     } else if (dataType === 'plus') {
//       console.log('dataIndex', dataIndex);
//       dataIndex = dataIndex + 1;
//       boxSkills[dataIndex].classList.add(dataType);
//     }
//   }
// }
//
// for (var i = 0; i < buttonSkills.length; i++) {
//   buttonSkills[i].addEventListener('click', createSkill);
// }





var buttonAdd = document.querySelector('.js-button-abilitiesPlus');
var buttonRemove = document.querySelectorAll('.js-button-abilitiesMinus');
var boxSkills = document.querySelectorAll('.js-ability-box');


function addSkill(){
  console.log('edu');
  boxSkills[1].classList.remove('hidden');
}

function removeSkill(){
  console.log('raquel');
}

buttonAdd.addEventListener('click', addSkill);
buttonRemove[0].addEventListener('click', removeSkill);
buttonRemove[1].addEventListener('click', removeSkill);

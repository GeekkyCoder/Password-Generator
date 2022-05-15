// will be used for generating random texts!
let allCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '@', '$', '&', '%', '#', '!'];

// button
let btn = document.getElementById('btn');

// all input text fields 
let firstInputText = document.getElementById('firstInputVal');
let secondInputText = document.getElementById('secondInputVal');
let thirdInputText = document.getElementById('thirdInputVal');
let fourthInputText = document.getElementById('fourthInputVal');


// input type range for the pasword length
let rangeInput = document.getElementById('inputRange');

rangeInput.addEventListener('change', generatePassword)


let firstRandomNum = '';
let secondRandomNum = '';
let thirdRandomNum = '';
let fourthRandomNum = '';

function randomPassGenerator() {
     firstRandomNum += allCharacters[Math.floor(Math.random() * allCharacters.length)];
     secondRandomNum += allCharacters[Math.floor(Math.random() * allCharacters.length)];
     thirdRandomNum += allCharacters[Math.floor(Math.random() * allCharacters.length)];
     fourthRandomNum += allCharacters[Math.floor(Math.random() * allCharacters.length)];

     firstInputText.value = firstRandomNum;
     secondInputText.value = secondRandomNum;
     thirdInputText.value = thirdRandomNum;
     fourthInputText.value = fourthRandomNum;
}

function generatePassword(event) {
     let passwordLength = event.target.value;
     let randomText = '';

     if (Number(passwordLength) === 0) {
          alert('set password length at least 2 character long')

     }
     else {
          for (let i = 0; i < passwordLength; i++) {
               randomPassGenerator();
          }

     }
}
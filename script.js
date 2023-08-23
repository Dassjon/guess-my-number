'use strict';

// const aTest = ['Juan', 'Pedro'];
// const sNombre = aTest[0];
// console.log(sNombre + ' es mi nombre');
// console.log(aTest[0] + ' es mi nombre');
/*
console.log(document.querySelector('.message').textContent);
// /* 
1.- Document es un objeto
2.- .querySelector es un método que busca un elemento a través de un comando
3.- Se invoca la función con los paréntesis ()
4.- .textContent es una propiedad que consulta y extrae sólo el contenido tipo string del elemento seleccionado
5.- El objeto document, con el método .querySelector, está buscando un elemento
cuya clase es "message" y está extrayendo el texto que está en el elemento perteneciente a esa clase.
6.- El console log hace visible el valor extraído en la consola de la web.
*/
// document.querySelector('.message').textContent = 'Correct Number!';
/*
Se selecciona el objeto document usando el método .querySelector para acceder al elemento HTML
que contenga cualquier elemento con la clase "message", se consulta el texto que tiene
ese elemento y se reemplaza por el nuevo texto "Correct Number!";
Es como re-definir la variable porque a fin de cuentas los objetos se pueden re-definir.
*/
// Document Object Model

// document.querySelector('.number').textContent = '13';
// document.querySelector('.score').textContent = '10';
// Los inputs solo tienen contenido con *valor*, nunca de otro tipo
// document.querySelector('.guess').value = '25';
// console.log(document.querySelector('.guess').value);

// D.Y.R. = Don't Repeat Yourself
let nScore = 20; //<-
let nHighScore = 0;
let nRandom = Math.trunc(Math.random() * 20) + 1; //<-
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
// const $Score = document.querySelector('.score');
// const eScore = $('.score');
// document.getElementsByClassName('score')[0]; //[html]

document.querySelector('.again').addEventListener('click', function () {
  nScore = 20; //<-
  nRandom = Math.trunc(Math.random() * 20) + 1; //<-
  displayScore(nScore);
  displayNumber('?');
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});

document.querySelector('.check').addEventListener('click', function () {
  const nGuess = Number(document.querySelector('.guess').value);

  if (!nGuess) {
    displayMessage('No number');
  }
  // Check if user's number is lower or higher than the guessing number
  else if (nGuess !== nRandom) {
    if (nScore > 1) {
      displayMessage(nGuess > nRandom ? 'Too high' : 'Too low');
      // document.querySelector('.message').textContent =
      //   nGuess > nRandom ? 'Too high' : 'Too low';
      // Cada vez que el usuario pierda -1 punto
      // Cambiar el score mostrado en pantalla
      displayScore((nScore -= 1)); //<-
      /* Cuando el Score sea igual a 0, hacerle saber al usuario que ha perdido el juego
    usando el elemento ".message" en HTML.*/
    } else {
      displayMessage('Game over'); //<-
      displayScore((nScore = 0));
    }
  }
  // else if (nGuess < nRandom) {
  //   document.querySelector('.message').textContent = 'Too low';
  //   // Cada vez que el usuario pierda -1 punto
  //   // Cambiar el score mostrado en pantalla
  //   document.querySelector('.score').textContent = nScore -= 1; //<-
  //   /* Cuando el Score sea igual a 0, hacerle saber al usuario que ha perdido el juego
  //   usando el elemento ".message" en HTML.*/
  //   if (nScore < 1) {
  //     document.querySelector('.message').textContent = 'Game Over bitch x_x'; //<-
  //   }
  // }
  // Condicion que valide si el número ingresado por el usuario es el correcto
  else if (nGuess === nRandom) {
    //Cambiar texto de "start guessing" a "correct number!"
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(nRandom);
    document.querySelector('.highscore').textContent = nScore;
    if (nScore > nHighScore) {
      nHighScore = nScore;
      document.querySelector('.highscore').textContent = nHighScore;
    }
  }
});

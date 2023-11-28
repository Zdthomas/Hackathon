const word = ['test', 'sword', 'road']

let answer = '';

let guessed = [];

// let currentWord = word[Math.floor(Math.random() * word.length)];

let lives = 5;

const death = 0;

let wordStatus = null;



function randomWord () {

    answer = word[Math.floor(Math.random() * word.length)];

    alert(answer)

    // To Do: Have hints tied to the answer

}

function generateButtons() {

    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter => 

        `
        <button 

            class="btn btn-lg btn-primary m-2"

            id='` + letter + `'

            onClick="guessedLetter('` + letter + `')"

        >

            ` + letter + `

        </button>    

        `).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML
}

function guessedLetter(chosenLetter) {

    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;

    // document.getElementById(chosenLetter).setAttribute('disable', true);


// Will come back and find out how to disable buttons later.

    if (answer.indexOf(chosenLetter) >= 0) {

        guessedWord();

        checkWin();

    } else if (answer.indexOf(chosenLetter) === -1) {

        lives--;

        updateLives();

        checkLost();

    }

}


function updateLives() {

    document.getElementById('lives').innerHTML = lives

}


function checkWin() {

    if (wordStatus === answer) {

        document.getElementById('keyboard').innerHTML = 'You Won!'

    }

}


function checkLost() {
    if (lives === death) {

        document.getElementById('keyboard').innerHTML = 'You Lose!'

    }
}






function guessedWord() {

  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('')
  
  document.getElementById('wordChoice').innerHTML = wordStatus

}


function reset() {

    lives = 5;

    guessed = [];


    randomWord();

    guessedWord();

    updateLives();

    generateButtons();

}

randomWord();

generateButtons();

guessedWord();




// This was way harder than I thought it would be lol. Definitely have to come back and make it look good.






// let answerArray = []

//     for(var i = 0; i< currentWord.length; i++) {

//         answerArray[i] = "_";

//     }

// let remainingLetters = word.length;

// while (remainingLetters > 0 && lives > 0) {
//     // answerArray.join(" "))

//     if (guess === null){

//         break;

//     } else {

//         for (var j = 0; j < word.length; j++){

//             if (word[j] === guess) {

//                 answerArray[j] = guess;

//                 remainingLetters--;
//             }
//         }
//     }
// }


// answerArray = (word) => {

//     const array = []
    
//     for (let i = 0; i < word.length; i++) {

//         answerArray[i] = "_";
//     }

//     return array
// }

// guessLetter = (letter) => {

//     if(!guessedLetters.includes(letter)) {

//         guessedLetters.push(letter);

    

//         if(currentWord.includes(letter)){

//             answerArray(letter);

//             remainingLetters--;

        

//             if(remainingLetters === 0) {

//                 console.log('You Win!')

//                 resetGame()

//             }

//         } else {

//             lives--;

//             if(lives === 0) {

//                 console.log('You Lose.');

//                 resetGame();
//             }

//         }
//     } else {

//         console.log('You already guessed that letter.')

//     }

//     display()

// }





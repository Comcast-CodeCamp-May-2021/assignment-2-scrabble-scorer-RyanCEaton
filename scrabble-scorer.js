// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");
let userEntry = "";
let scoringMethod;
const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 	for (let i = 0; i < word.length; i++) {
 	  for (const pointValue in oldPointStructure) {
 		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 	  }
	}
	return letterPoints;
 }
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.clear();
  console.log("Let's play some scrabble!", '\n');
  };

function simpleScore(word) {
  word = word.toLowerCase();
  let simplePoints = word.length;
    return simplePoints;
}

function vowelBonusScore(word) {
  let vowelBonusPoints = 0;
  word = word.toLowerCase();
  let vowelArray = [];
  for (let i = 0; i < word.length; i++) {
    if ((word[i] === "a") || (word[i] === "e") || (word[i] === "i") || (word[i] === "o") || (word[i] === "u")) vowelArray.push(i);
  }
  vowelBonusPoints = (vowelArray.length * 3) + (word.length - vowelArray.length);
  return vowelBonusPoints;
}

function scrabbleScore(word) {
	let scrabble = 0;
  word = word.toLowerCase();
 	for (i = 0; i < word.length; i++) {
     for (item in newPointStructure) {
       if (word[i] === item) {
         scrabble = (scrabble + Number(newPointStructure[item]));
       }
     }

   }
      return scrabble;
}

   
const scoringAlgorithms = [
  {
    name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt() {
  console.log("Which scoring algorithm would you like to use?\n");
  console.log("0 - Simple: One point per character");
  console.log("1 - Vowel Bonus: Vowels are worth 3 points");
  console.log("2 - Scrabble: Uses scrabble point system");
  scoringMethod = input.question("Enter 0, 1, or 2: ");
return scoringMethod;

}

function transform(transforming) {
  let newValues = {};
  for (let item in transforming) {
    let transformPartOne = transforming[item];
    for (let i = 0; i < transformPartOne.length; i++) {
      newValues[transformPartOne[i].toLowerCase()] = item;
    }
  }
  return newValues;
};


let newPointStructure = transform(oldPointStructure);
console.log(newPointStructure);

function runProgram() {
   initialPrompt();
  userEntry = input.question("Enter a word to score: "); 
  scorerPrompt();
  console.log(`Score for '${userEntry}': ${scoringAlgorithms[scoringMethod].scoringFunction(userEntry)}\n`);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


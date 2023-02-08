'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  // word = "car" // take the c off the front, add it to the end and add ay = arcay

  // Your code here
  
  // 1. if word begins with a vowel, adds "yay"
  // 2. if word begins with a consonant, splice off beginning, and add it to the end oand add "ay" 
  // 3. maybe?  if word begins with 2 consonant, splice off beginning, and add it to the end oand add "ay" 
  // assumptions : vowels are a e i o u 

  // ncludes (searchString, position)
   //string.slice(start, end) text.slice(0,1)

  // var that'ss trimmed and lowercase
  word = word.trim().toLowerCase();
  // array of vowels to compare to the word
    let vowels = [ 'a', 'e', 'i', 'o', 'u'];
  

  for(let letter = 0; letter < word.length; letter++) {
//loop through the letter in the workd and find the first vowel
    // does the first lettershow up in the vowels

  if (vowels.includes(word[0])){
    // if true, return word + yay
    return word + "yay";
  } else if (((!vowels.includes(word[0]))) && (!vowels.includes(word[1]))) {
    // new var for word to maipulate
    let newWord = word.slice(2) + word.slice(0, 2) + "ay";
    return newWord
  } else {

    let newWord = word.slice(1) + word.slice(0,1) + "ay";

    return newWord
  }

    
    //slice the first letter, concat that letter to the end , and add ay
    
    

  }

  }

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C   
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.

//get the word from index.html

let input = '';

const userInput = document.getElementById('userInput');
const button = document.getElementById('button')
const reset = document.getElementById('reset')
const textOutput = document.getElementById('textOutput')
const pigButton = document.getElementsByClassName('piggieface')
console.log(button)


userInput.addEventListener('keyup', (event) => {
    input = event.target.value
    console.log(input)
})

button.addEventListener('click', (event) => {
  let newWord = pigLatin(input)
  textOutput.innerText = newWord
})

reset.addEventListener('click', (event) => {
  userInput.value = '';
  textOutput.innerText = '';
  input = '';
  console.log('click', event)
  
})





const pigLatin = (word) => {
    word = word.trim().toLowerCase();
    // array of vowels to compare to the word
      let vowels = [ 'a', 'e', 'i', 'o', 'u'];
    
  
    for(let letter = 0; letter < word.length; letter++) {
  //loop through the letter in the workd and find the first vowel
      // does the first lettershow up in the vowels
  
    if (vowels.includes(word[0])){
      // if true, return word + yay
      let newWord = word + "yay"
      return newWord;
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

    //put newWord in the display element(div) in index.html
    }
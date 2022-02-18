/**
* Takes an array of words and counts how many times each word occurs in the array.
* 
* @param {string[]} arr - An array of lowercase words
* @returns {object} - an object where the key is the word, and the value is the count of that word
*
* ex: countWords(["good", "good", "great"]);
* returns: { "good": 2, "great": 1 }
* 
* ex: countWords(["dog", "cat", "goat"]);
* returns: { "dog": 1, "cat": 1, "goat": 1}
* 
* ex: countWords([]);
* returns: {}
*/

function countWords(arr) {
    //console.log(arr) - [ 'hi', 'hey', 'yo', 'the' ]
    let obj = {}; // will be used to store the words as a key-value pair 
    for (let i = 0; i < arr.length; i++){
      let word = arr[i]; // each element will be keys inside the map (with no repeats)
      obj[word] = (obj[word] + 1) || 1; // If the word does not yet exist, create a new key and assign “1” as the value. If the word (the key) already exists, then simply increment that value by 1.


      //Alternative Solution (within the loop)!!!!:
      //if (!obj[arr[i]]){
      //       obj[arr] = 1
      // } else{
      //   obj[arr[i]]++
      // }
        }

  return obj;
  //console.log(obj); - { hi: 1, hey: 1, yo: 1, the: 1 }
}

module.exports = countWords

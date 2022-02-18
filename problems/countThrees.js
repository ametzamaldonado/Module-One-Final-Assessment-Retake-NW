/**
* Counts the number of threes in a given number.
* @param {number} n - The input number.
* @returns {number} - Returns how many threes are in the input.
*
* ex: countThrees(300)
* returns: 1
*
* ex: countThrees(3203)
* returns: 2
*
* ex: countThrees(47)
* returns: 0
*/

function countThrees(n) {
    count = 0; // sets a default value in case the number '3' isn't in our 'n' value.
    numberString = String(n).split("") // console.log =  [ '3', '0', '0' ]
    for (let number of numberString){ // loops through each value in the number we "stringified"
        if (number === '3' ){ //if the number (i) is equal to '3'
            count += 1        //we add 1 to our count number.
        }
    }
    return count 
}

module.exports = countThrees

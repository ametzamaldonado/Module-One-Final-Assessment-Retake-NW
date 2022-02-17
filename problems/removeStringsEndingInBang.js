/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/

function removeStringsEndingInBang(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if(arr[i][j === arr[i].length - 1].includes("!")){
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

module.exports = removeStringsEndingInBang

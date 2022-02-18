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
    let emptyArr = [];
    for (let i = 0; i < arr.length; i++){
        if(!arr[i].charAt(arr[i].length - 1).includes("!")){
            emptyArr.push(arr[i])
        }
    }
    return emptyArr;
}

module.exports = removeStringsEndingInBang

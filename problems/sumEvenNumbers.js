/** Sum all even numbers in an array
 * 
* @param {number[]} arr - The input array
* @returns {number} - The sum of all even numbers
*
* ex: sumEvenNumbers([1, 2, 3, 4])
* returns: 6 (because 2 + 4 = 6)
*
* ex: sumEvenNumbers([4, 3, 10])
* returns: 14
*/
function sumEvenNumbers(arr) {
    let sum = 0;
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        console.log(i)
        if(arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}

module.exports = sumEvenNumbers

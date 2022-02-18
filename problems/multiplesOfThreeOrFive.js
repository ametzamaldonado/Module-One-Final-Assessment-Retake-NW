// Problem source: https://projecteuler.net/problem=1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below an input n.

/**
* Returns the sum of all the multiples of 3 or 5 below n
* 
* @param {number} n
* @returns {number} - The sum of all the multiples of 3 or 5 that are less than n
* 
* ex: multiplesOfThreeOrFive(10)
* returns: 23
* explanation:
* For numbers > 0 and < 10, the multiples of 3 or 5 are: 3, 5, 6, 9
* Add the numbers: 3 + 5 + 6 + 9 = 23
* 
* ex: multiplesOfThreeOrFive(20);
* returns 
* explanation:
* For numbers > 0 and < 20, the multiples of 3 or 5 are: 3, 5, 6, 9, 10, 12, 15, 18
* Add the numbers: 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 = 78
* Notice that 15 is a multiple of 3 and 5 BUT it is only added ONCE.
*/

function multiplesOfThreeOrFive(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sum += i;
            console.log(sum);
        }
    }
    return sum;
}

module.exports = multiplesOfThreeOrFive
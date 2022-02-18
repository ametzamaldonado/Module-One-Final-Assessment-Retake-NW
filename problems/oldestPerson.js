/**
 * Takes an object where the keys are people's names and the values are their ages.
 * Returns the name of the person with the greatest age.
 *
 * @param {object} obj - The input object of the form { 'Joe': 42, 'Tanya': 11 }
 * @returns {string} - Returns the name of the oldest person
 *
 * ex: oldestPerson({ 'Joe': 42, 'Tanya': 11 })
 * returns: "Joe"
 *
 * ex: oldestPerson({ 'Marcus': 29, 'Julia': 29, 'Kevin': 34 })
 * returns: 'Kevin'
 */
function oldestPerson(obj) {
    let oldest = 0; //variables have to be outside of the loop to avoid it changing values as it runs.
    let oldestName = '';
    for (let name in obj){
        if (oldest < obj[name]){
            oldest = obj[name]
            oldestName = name
        }
    }
    return oldestName;
}

module.exports = oldestPerson
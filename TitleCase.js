// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

function titleCase(str) {
    let arr = str.split(' ').map( value => value[0].toUpperCase() + value.slice(1).toLowerCase());
    return arr.join(' ');
}
/*To do:
-Node (process.argv)
-Sources list
-Readme
*/

// Convert strings to arrays in order to alphebatize and remove whitespace, then back to strings
function orderStr (str) {
    //Remove white space from entire string, source: https://stackoverflow.com/a/61140195
    removeWhiteSpaceOne = str.toLowerCase().replace(/\s+/g, ''); 
     //Quotes to create array by character, not by word
    arrOne = removeWhiteSpaceOne.split('');   
    //Alphabetizes the array, then reverts back to string
    alphabetizedStr = arrOne.sort().toString();
    return alphabetizedStr
}

function isAnagram (stringOne, stringTwo) {
    let strToCompareOne = orderStr(stringOne);
    let strToCompareTwo = orderStr(stringTwo);
    //If spliced & alphabetized strings not empty
    if ((strToCompareOne.length > 0) && (strToCompareTwo.length > 0)) {
        console.log(`Input: ${stringOne}, ${stringTwo}`)
        if (strToCompareOne === strToCompareTwo) {
            console.log('They match! What you have there is an anagram!\n')
        }
        else {
            console.log('No anagrams here. Try again.\n')
        }
    }
    //If spliced strings return empty (meaning input was whitespace only)
    else {
        console.log(`Input: whitespace only`, 'Invalid input, no characters to compare.\n')
    }
};



console.log(process.argv)
// isAnagram('This is a perfect match', 'This is a perfect match');
// isAnagram('So is THIS', 'so is this');
// isAnagram('123456', '654321');
// isAnagram('Sun    flowers', 'Sunflowers');
// isAnagram('These do not match', 'Sure do not');
// isAnagram('Troy and Abed', 'In the morning')
// isAnagram('    ', '       ')
// isAnagram('%$%', '%%$')
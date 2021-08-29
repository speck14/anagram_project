/*Sources:
-MDN array and string methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
-How to remove whitespace from within a string using RegEx: https://stackoverflow.com/a/61140195
*/

// Convert strings to arrays in order to alphabetize and remove whitespace, then back to strings
function orderStr (str) {
    //Remove white space from entire string, source: https://stackoverflow.com/a/61140195
    let removeWhiteSpace = str.toLowerCase().replace(/\s+/g, ''); 
    //Quotes to create array by character, not by word
    let newArr = removeWhiteSpace.split('');   
    //Alphabetizes the array, then reverts back to string
    let alphabetizedStr = newArr.sort().toString();
    return alphabetizedStr ////semicolon here probably?
}

function isAnagram (stringOne, stringTwo) {
    let strToCompareOne = orderStr(stringOne);
    let strToCompareTwo = orderStr(stringTwo);
    //If spliced & alphabetized strings not empty
    if ((strToCompareOne.length > 0) && (strToCompareTwo.length > 0)) {
        console.log(`Input: ${stringOne}, ${stringTwo}`)
        if (strToCompareOne === strToCompareTwo) {
            console.log('They match! What you have there is an anagram!\n');
            return true;
        }
        else {
            console.log('No anagrams here. Try again.\n');
            return false;
        }
    }
    //If spliced strings return empty (meaning input was whitespace only)
    else {
        console.log('Input: whitespace only\nInvalid input, no characters to compare.\n');
    }
};

isAnagram('This is a perfect match', 'This is a perfect match');
isAnagram('So is THIS', 'so is this');
isAnagram('rail safety', 'fIaRy TalES');
isAnagram('123456', '654321');
isAnagram('Sun    flowers', 'Sunflowers');
isAnagram('These do not match', 'Sure do not');
isAnagram('Troy and Abed', 'In the morning'); 
isAnagram('    ', '       '); 
isAnagram('%$%', '%%$');
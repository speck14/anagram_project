/*To do:
-Clean up orderStr 
    let varName = orderStr()
-Display results better
-Console input: for invalid input line
-Sources list
-Readme
*/

function isAnagram (stringOne, stringTwo) {
    orderStr(stringOne, stringTwo);
    if ((alphabetizedStrOne.length > 0) && (alphabetizedStrTwo.length > 0)) {
        console.log(`Input: ${stringOne}, ${stringTwo}`)
        if (alphabetizedStrOne === alphabetizedStrTwo) {
            console.log('They match! What you have there is an anagram!')
        }
        else {
            console.log('No anagrams here. Try again.')
        }
    }
    else {
        console.log('Invalid input, no characters to compare.')
    }
};

// Convert strings to arrays in order to alphebatize, then back to strings
function orderStr (strOne, strTwo) {
    //Remove white space from entire string, source: https://stackoverflow.com/a/61140195
    removeWhiteSpaceOne = strOne.toLowerCase().replace(/\s+/g, '');
    removeWhiteSpaceTwo = strTwo.toLowerCase().replace(/\s+/g, '');
    arrOne = removeWhiteSpaceOne.split('');    //Qquotes to create array by character, not by word
    arrTwo = removeWhiteSpaceTwo.split('');
    alphabetizedStrOne = arrOne.sort().toString();
    alphabetizedStrTwo = arrTwo.sort().toString();
    return [alphabetizedStrOne, alphabetizedStrTwo]
}


isAnagram('This is a perfect match', 'This is a perfect match');
isAnagram('So is THIS', 'so is this');
isAnagram('123456', '654321');
isAnagram('Sun    flowers', 'Sunflowers');
isAnagram('These do not match', 'Sure do not');
isAnagram('Troy and Abed', 'In the morning')
isAnagram('    ', '       ')

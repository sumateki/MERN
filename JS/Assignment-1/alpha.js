var enteredAlpha= prompt("Enter any alphabet") 
 // Convert the enteredAlpha to lowercase for case-insensitive comparison
enteredAlpha= enteredAlpha.toLowerCase()
var isVowel= enteredAlpha === ('a') ||  enteredAlpha === ('e') || enteredAlpha === ('i') ||
             enteredAlpha === ('o') ||  enteredAlpha === ('u')

var isConsonant= !isVowel && /[a-z]/.test(enteredAlpha)  // Use a regular expression to check for consonants

var res= isVowel ? 'vowel' : (isConsonant ? 'consonant' : 'non-alphabet')

switch(res)
{
    case 'vowel':
        document.write(enteredAlpha+' is VOWEL')
        break
    case 'consonant':
        document.write(enteredAlpha+' is CONSONANT')
        break
    default:
        document.write(enteredAlpha+' is NON_ALPHABET')
}



// var consonant=enteredAlpha == ('b' || 'B') ||  enteredAlpha == ('c' || 'C') ||
//             enteredAlpha == ('d' || 'D') ||  enteredAlpha == ('f' || 'F') ||
//             enteredAlpha == ('g' || 'G') ||  enteredAlpha == ('h' || 'H') ||
//             enteredAlpha == ('j' || 'J') ||  enteredAlpha == ('k' || 'K') ||
//             enteredAlpha == ('l' || 'L') ||  enteredAlpha == ('m' || 'M') ||
//             enteredAlpha == ('n' || 'N') ||  enteredAlpha == ('p' || 'P') ||
//             enteredAlpha == ('q' || 'Q') ||  enteredAlpha == ('r' || 'R') ||
//             enteredAlpha == ('s' || 'S') ||  enteredAlpha == ('t' || 'T') ||
//             enteredAlpha == ('v' || 'V') ||  enteredAlpha == ('w' || 'W') ||
//             enteredAlpha == ('x' || 'X') ||  enteredAlpha == ('y' || 'Y') ||
//             enteredAlpha == ('z' || 'Z')





// Replace every character in a given string with the character following it in the alphabet
function replaceChar(str){
    return str.split('').map(char => String.fromCharCode(char.charCodeAt(0)+1))
}
console.log(replaceChar("abcd"));

// Solution 1
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        console.log(j);
        j--; 
    }
    return true;
}
// Solution 2
// My solution it works too
// function palindrome(str){
//     reverseStr = ''
//     for(let i=str.length-1; i>=0 ; i--){
//         reverseStr += str[i]
//     }
//     if(reverseStr === str){
//         return "Given str is palindrom"
//     }
//     else{
//         return "not a palindrome"
//     }
// }

// Solution 3

// function isPalindrome(str) {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Optional: clean and normalize the string
//   const reversedStr = cleanedStr.split('').reverse().join('');
//   return cleanedStr === reversedStr;
// }


console.log(isPalindrome("racecar"));

// flower, flow, flight - fl is longest common prefix 
// function longestPrefix(arr){
//     if(arr.length === 0){
//         return "";
//     }
//     prefix = arr[0]
//     for(let i =1; i<arr.length; i++){
//         while(arr[i].indexOf(prefix) !== 0){
//             prefix = prefix.substring(0, prefix.length - 1);
//             if(prefix === ""){
//                 return ""
//             }
//         }
//     }
//     return prefix
// }
// console.log(longestPrefix(["flower","flow","flight"]));

function longestPrefix(arr) {
    if (arr.length === 0) return "";

    let prefix = "";

    // Loop through each character index of the first word
    for (let i = 0; i < arr[0].length; i++) {
        const char = arr[0][i]; // current character from first word

        // Check if this character is same in all other words
        for (let j = 1; j < arr.length; j++) {
            // If the word ends or the char doesn't match
            if (i >= arr[j].length || arr[j][i] !== char) {
                return prefix; // stop and return what we found so far
            }
        }

        // If character matches in all, add to prefix
        prefix += char;
    }

    return prefix;
}

console.log(longestPrefix(["flower", "flow", "flight"])); // Output: "fl"



//Same code as above but with reference str 

// var longestCommonPrefix = function(strs) {
//     if (!strs || strs.length === 0) {
//         return "";
//     }

//     // Use the first string as the reference prefix
//     const referenceStr = strs[0];

//     // Iterate through each character of the reference string
//     for (let i = 0; i < referenceStr.length; i++) {
//         const char = referenceStr[i];

//         // Check if all other strings have the same character at the current position 'i'
//         for (let j = 1; j < strs.length; j++) {
//             // If the current string is too short or the character doesn't match, 
//             // the common prefix ends here. Return the prefix found so far.
//             if (strs[j].length <= i || strs[j][i] !== char) {
//                 return referenceStr.slice(0, i);
//             }
//         }
//     }

//     // If the loop completes without finding any mismatches, 
//     // the entire first string is the common prefix.
//     return referenceStr;
// };

// // Example Usage:
// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
// console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: "inters"

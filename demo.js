// with split we can convert string into array. how to doit without string
// Find the longest word in a sentence
function longestWord(str) {
    str = str.split(" ");

    let longest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > longest.length) {
            longest = str[i];
        }
    }
    return longest;
}
console.log(longestWord("Find the longest word in the sentence"));

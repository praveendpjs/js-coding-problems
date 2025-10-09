// Find the longest word in a sentence
function longestWord(str){
    str = str.split(" ")

    let longest = ''
    for(const word of str){
        if(word.length > longest.length){
            longest = word
        }
    }
    return longest

}
console.log(longestWord("Find the longest word in the sentence"));


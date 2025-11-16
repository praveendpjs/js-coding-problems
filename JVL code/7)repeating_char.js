// Find the first non-repeating character in a string
function nonRepeating(str){
    let frequencyMapping = {}
    for (const char of str) {
        if(frequencyMapping[char]){
            frequencyMapping[char] += 1
        } else {
            frequencyMapping[char] = 1
        }
    }
    for (const char of str) {
        if(frequencyMapping[char] === 1){
            return char
        }
    }
    return null
}

console.log(nonRepeating("aaabbbccdllllf"));

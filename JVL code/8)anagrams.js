// Return true if given two strings are anagrams (Eg: (silent, listen) => both words have same letters)

// This solution is not optimal and takes more time
function findAnagram(str1, str2){
    // remove spaces and convert the str to lowercase
    str1 = str1.replace(/\s+/g).toLowerCase()
    str2 = str2.replace(/\s+/g).toLowerCase()
    if(str1.length !== str2.length){
        return false
    }
    const frequencyMap1 = {} 
    const frequencyMap2 = {}
    for (const char of str1) {
        frequencyMap1[char] = (frequencyMap1[char]||0)+1

        // If you don't get the above expression this is what it does
        // if(frequencyMap1[char]){
        //     frequencyMap1[char]+=1
        // } else{
        //     frequencyMap1[char] = 0
        // }
    }
    for (const char of str2) {
        frequencyMap2[char] = (frequencyMap2[char]||0)+1

        // If you don't get the above expression this is what it does
        // if(frequencyMap2[char]){
        //     frequencyMap2[char]+=1
        // } else{
        //     frequencyMap2[char] = 0
        // }
    }
    for (const char in frequencyMap1) {
        if(frequencyMap1[char] !== frequencyMap2[char]){
            return false
        }
    }
    return true
}
console.log(findAnagram("silent", "listen"));

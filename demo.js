function anagrams(str1,str2){
    const frequencyMap1 = {}
    const frequencyMap2 = {}

    for(char of str1){
        if(frequencyMap1[char]){
            frequencyMap1[char]++
        } else{
            frequencyMap1[char] = 1
        }
    }

    for(char of str2){
        if(frequencyMap2[char]){
            frequencyMap2[char]++
        } else{
            frequencyMap2[char] = 1
        }
    }

    
    for (const char in frequencyMap1) {
        
        if(frequencyMap1[char] !== frequencyMap2[char]){
            return false
        }
    }
    return true


}
console.log(anagrams("sileent","listen"));

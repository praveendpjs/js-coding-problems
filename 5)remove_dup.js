// Remove duplicate element in an array
// Example1: Using Set()

// function removeDuplicate(arr){
//     return [...new Set(arr)]
// }

// Example2: Using filter and indexOf()
function removeDuplicate(arr){
    return arr.filter((val, index, self) => self.indexOf(val) === index)
}

console.log(removeDuplicate([1,2,3,4,5,5,1,5,3]));

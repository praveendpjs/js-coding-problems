// Remove duplicate element in an array
// Example1: Using Set()

// function removeDuplicate(arr){
//     return [...new Set(arr)]
// }

// Example2: Using filter and indexOf()
function removeDuplicate(arr){
    return arr.filter((val, index, self) => self.indexOf(val) === index)
}

// Example3: Using reduce method
// function removeDuplicate(arr){
//     return arr.reduce((unique, item) =>{
//         return unique.includes(item) ? unique: [...unique,item]
//     },[])
// }


// Example4: Using for loop
// function removeDuplicate(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(result.indexOf(arr[i]) === -1){
//             result.push(arr[i])
//         }
//     }
//     return result
// }

console.log(removeDuplicate([1,2,3,4,5,5,1,5,3]));

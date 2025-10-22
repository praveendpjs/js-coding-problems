// Find the missing number in an array of size n-1 containing numbers 1 to n
// Example 1
// function findMissing(arr){
//     const n = arr.length + 1
//     const totalSum = (n*(n+1))/2
//     const arrSum = arr.reduce((acc, cur) => acc + cur,0 )

//     return totalSum - arrSum
// } 
// console.log(findMissing([1,2,4,5]));

// Example 2
function findMissing(arr){
    const newSet = new Set(arr)
    for(let i = 1; i <= arr.length+1; i++){
        if(!newSet.has(i)){
            return i 
        }
    }
}
console.log(findMissing([1,2,4,5]));
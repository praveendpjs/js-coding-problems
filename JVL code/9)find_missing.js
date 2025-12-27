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
function findMissing(arr) {
    const newSet = new Set(arr)
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!newSet.has(i)) {
            return i
        }
    }
}
console.log(findMissing([1, 2, 4, 5]));

// Example 3
function findMissingSorted(arr) {
    // Sort the array first if it isn't already sorted
    arr.sort((a, b) => a - b);
    const missing = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let expected = arr[i] + 1;
        let actual = arr[i + 1];

        // If there's a gap, add all missing numbers in that gap
        while (expected < actual) {
            missing.push(expected);
            expected++;
        }
    }
    return missing;
}

const numbers = [1, 5, 8];
console.log(findMissingSorted(numbers)); // Output: [2, 3, 4, 6, 7]

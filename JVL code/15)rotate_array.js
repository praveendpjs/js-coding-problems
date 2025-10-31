// If the input arr = [1,2,3,4,5,6,7] key = 1
// output = [7,1,2,3,4,5,6]
// If the input arr = [1,2,3,4,5,6,7] key = 2
// output = [6,7,1,2,3,4,5]
function rotateArray(arr, k){
    k = k % arr.length;

    // reverse the entire array
    // [1,2,3,4,5] = [5,4,3,2,1]
    reverse(arr, 0, arr.length-1);

    // reverse the first elements
    // [5,4] = [4,5]
    // [5,4,3,2,1] = [4,5,3,2,1]
    reverse(arr, 0, k-1)

    // reverse the remaining elements
    // [4,5,3,2,1] = [4,5,1,2,3]
    reverse(arr, k, arr.length-1)
    return arr


}
function reverse(arr, start, end){
    while (start < end) {
        // Swap the elements at the end
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start ++;
        end--;
    }
}
console.log(rotateArray([1,2,3,4,5,6,7],2));

// Count the number of times that letter comes in a word { p: 1, r: 1, a: 1, v: 1, e: 2, n: 1 }
function countOccurance(str){
    let count = {}
    for(let x of str){
        if(count[x]){
            count[x]++
        }else{
            count[x] = 1
        }
    }
    return count
}
console.log(countOccurance("praveen"));

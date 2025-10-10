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

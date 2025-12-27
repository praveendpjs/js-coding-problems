function removeDup(arr){
    let res = []
    for(let i = 0; i < arr.length; i++){
        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}
console.log(removeDup([1,2,3,4,2,1,5,6,2]));

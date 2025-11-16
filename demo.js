function reverse(x) {
    let str = String(x)
    let res = ""
    for(let i = str.length-1; i >= 0; i--){
        res += str[i];
    }
    res = Number(res)
    return res
    
};
console.log(reverse(321));

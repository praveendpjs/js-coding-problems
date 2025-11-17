let out = "";
for(let i = 1; i < 10; i++){
    let temp = (i*2)-1
    for(let j = 0; j < temp; j++){
        out += "* "
    }
    out = out + "\n"
}
console.log(out);

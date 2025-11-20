let out = "";
for(let i = 10; i > 0; i--){
    for(let j = 0; j < i; j++){
        out += "  "
    }
    for(let k = i; k < 10; k++){
        out += "* "
    }
    out = out + "\n"
}
console.log(out);

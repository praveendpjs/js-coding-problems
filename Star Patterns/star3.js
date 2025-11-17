let out = "";
for(let i = 1; i < 10; i++){
    for(let j = 0; j < i; j++){
        out += (i%2) + " "
    }
    out = out + "\n"
}
console.log(out);

// let out = "";
// for(let i = 1; i < 10; i++){
//     for(let j = 0; j < i; j++){
//         out += (i%2==0?1:0) + " "
//     }
//     out = out + "\n"
// }
// console.log(out);


// const obj = {
//     name: "john",
//     age: 30,
//     address:{
//         city: "New York",
//         zip:10001
//     },
//     hobbies: ["reading","gaming"],
//     greet:function(){
//         console.log("Hello!");
        
//     }
// };

// const clonedObj = {...obj} //This is shallow copy

// obj.address.city = "Los Angeles";
// obj.hobbies.push("swimming");

// console.log(obj.address.city);
// console.log(clonedObj.address.city);

// console.log(obj.hobbies);
// console.log(clonedObj.hobbies);

// // Both has the city Los Angeles because we did not do deep copy. Even though we changed only in orginal object it reflects in cloned object too.

function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }

    // Handle Array case
    if(Array.isArray(obj)){
        const arrCopy = [];
        for(let i = 0; i < obj.length; i++){
            arrCopy[i] = deepClone(obj[i]);
        }
        return arrCopy;
    }

    // Handle Object case
    const objCopy = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key])
        }
    }
    return objCopy;
}

const obj = {
    name: "john",
    age: 30,
    address:{
        city: "New York",
        zip:10001
    },
    hobbies: ["reading","gaming"],
    greet:function(){
        console.log("Hello!");
        
    }
};
const clonedObj = deepClone(obj);

obj.address.city = 'Los Angeles';
obj.hobbies.push("swimming");

console.log(obj.address.city);
console.log(clonedObj.address.city);

console.log(obj.hobbies);
console.log(clonedObj.hobbies);
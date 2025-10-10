// Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100

function isEqual100(num1, num2){
    if(num1 === 100 || num2 === 100 || num1+num2 === 100){
        return true
    }
    else{
        return false
    }
}
// const isEqual100(num1, num2) => a === 100 || b === 100 || (a+b) ===100;
console.log(isEqual100(50,50));

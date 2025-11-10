function addBinary(a, b){
    let carry = 0;
    let result = '';
    let maxLength = Math.max(a.length, b.length); 

    a = a.padStart(maxLength,'0');
    b = b.padStart(maxLength,'0');


    // Bitwise
    for(let i = maxLength - 1; i >= 0; i--){
        let sum = parseInt(a[i]) + parseInt(b[i]) + carry;

        carry = Math.floor(sum/2);
        result = (sum % 2) + result;
        if(carry){
            result = carry + result;
        }
    }
    return result
}
console.log(addBinary('1010','1101'));

function intToRoman(num) {
    const romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ]
    let roman = '';
    for (let i = 0; i < romanMap.length; i++) {
        const { value, symbol } = romanMap[i]; //Destructuring (normally we would've written const value = romanMap[i].value; const symbol = romanMap[i].symbol;)
        // It creates two new variables:

        // value — holding the value from the object (like 1000)

        // symbol — holding the symbol from the object (like 'M')

        while (num >= value) {
            roman += symbol;
            num -= value;

        }
    }
    return roman
}
console.log(intToRoman(8));

// 2)Using forOf to loop over an array of objects

// function intToRoman(num) {
//     const romanMap = [
//         { value: 1000, symbol: 'M' },
//         { value: 900, symbol: 'CM' },
//         { value: 500, symbol: 'D' },
//         { value: 400, symbol: 'CD' },
//         { value: 100, symbol: 'C' },
//         { value: 90, symbol: 'XC' },
//         { value: 50, symbol: 'L' },
//         { value: 40, symbol: 'XL' },
//         { value: 10, symbol: 'X' },
//         { value: 9, symbol: 'IX' },
//         { value: 5, symbol: 'V' },
//         { value: 4, symbol: 'IV' },
//         { value: 1, symbol: 'I' },
//     ]
//     let roman = '';
//     for(const i of romanMap){
//         while (num >= i.value) {
//             roman += i.symbol;
//             num -= i.value;
//         }
//     }
    
//     return roman
// }

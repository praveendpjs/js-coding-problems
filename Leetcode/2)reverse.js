/**
 * 7. Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 * Difficulty: Easy
 *
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer
 * range [-2^31, 2^31 - 1], then return 0.
 * 
 * Example 1:

*  Input: x = 123
*  Output: 321
*  Example 2:
*  
*  Input: x = -123
*  Output: -321
*  Example 3:
*  
*  Input: x = 120
*  Output: 21
*  
 * 
 */

/**
 * @param {number} x
 * @return {number}
 */

// This is the most correct way
// function reverse(x) {
//     let rev = 0;
//     const limit = 2 ** 31;  // 2147483648

//     while (x !== 0) {
//         const digit = x % 10;
//         rev = rev * 10 + digit;

//         // truncate toward zero
//         x = x / 10 | 0; 

//         // check overflow
//         if (rev <= -limit || rev >= limit) return 0;
//     }

//     return rev;
// };

var reverse = function(x) {
    const limit = 2 ** 31;

    const str = String(Math.abs(x));
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    let num = Number(reversed);
    if (x < 0) num = -num;

    return (num <= -limit || num >= limit) ? 0 : num;
};


console.log(reverse(-321));

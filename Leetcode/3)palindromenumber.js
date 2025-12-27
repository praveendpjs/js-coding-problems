/**
 * 9. Palindrome Number
 * https://leetcode.com/problems/palindrome-number/
 * Difficulty: Easy
 *
 * Given an integer `x`, return `true` if `x` is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 * - For example, `121` is palindrome while `123` is not.
 */

// 1) Standard method
var isPalindrome = function(x) {
    // negative numbers are immediately not palindromes
    // also numbers ending in 0 but not 0 itself (e.g., 10, 120)
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;

    while (x > reversed) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    // For odd digit counts, reversed may have 1 extra digit (e.g., 12321 → reversed=123)
    return x === reversed || x === Math.floor(reversed / 10);
};

// 2) String conversion:
var isPalindrome = function(x) {
    // convert number to string
    const str = x.toString();

    // two-pointer check
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
};

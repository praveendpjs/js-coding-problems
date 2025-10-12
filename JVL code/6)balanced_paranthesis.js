// The paranthesis must be opened and closed properly eg: (()), (((()))) is correct )(, )()is wrong
function isBalanced(str){
    const stack = [];
    for(const char of str){
        if(char === '('){
            stack.push(char)
        } else if (char === ')'){
            if(stack.length === 0){
                return false;
            }
            stack.pop()
        }
    }
    return stack.length === 0;
}
console.log(isBalanced(")("));

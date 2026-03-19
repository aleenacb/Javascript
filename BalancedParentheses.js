function isBalanced(str) {
    let stack = [];
    let map = { ')': '(', '}': '{', ']': '[' };

    for (let char of str) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else {
            if (stack.pop() !== map[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("{[()]}")); // true

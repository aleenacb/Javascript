function nextGreater(nums) {
    let n = nums.length;
    let res = new Array(n).fill(-1);
    let stack = [];

    for (let i = 0; i < 2 * n; i++) {
        let num = nums[i % n];

        while (stack.length && nums[stack[stack.length - 1]] < num) {
            res[stack.pop()] = num;
        }

        if (i < n) stack.push(i);
    }

    return res;
}

console.log(nextGreater([1,2,1]));

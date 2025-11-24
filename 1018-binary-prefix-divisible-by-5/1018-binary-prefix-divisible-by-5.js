/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let res = [];
    let val = 0;

    for (let b of nums) {
        val = (val * 2 + b) % 5;
        res.push(val === 0);
    }

    return res;
};

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const res = []
    function helper(a, depth) {
        for (let el of a) {
            if (Array.isArray(el) && depth < n) helper(el, depth + 1)
            else res.push(el)
        }
    }
    helper(arr, 0)
    return res
}

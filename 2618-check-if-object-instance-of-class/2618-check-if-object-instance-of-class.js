/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined) return false
    if (typeof classFunction !== "function") return false

    const targetProto = classFunction.prototype
    let boxed = (typeof obj === "object" || typeof obj === "function") ? obj : Object(obj)
    let p = Object.getPrototypeOf(boxed)
    while (p !== null) {
        if (p === targetProto) return true
        p = Object.getPrototypeOf(p)
    }
    return false
}


/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
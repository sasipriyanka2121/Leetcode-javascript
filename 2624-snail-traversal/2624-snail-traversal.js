Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) return []
    const res = Array.from({ length: rowsCount }, () => Array(colsCount).fill(0))
    let i = 0
    for (let c = 0; c < colsCount; c++) {
        if (c % 2 === 0) {
            for (let r = 0; r < rowsCount; r++) res[r][c] = this[i++]
        } else {
            for (let r = rowsCount - 1; r >= 0; r--) res[r][c] = this[i++]
        }
    }
    return res
}

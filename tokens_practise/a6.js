const { tokens1 } = require("./a2")
const { isNumber, findNextIndex } = require("./a1")
// s 是只包含以下 6 种元素的 JSON 格式字符串（也包括空白符号）
// { } : ,   十进制整数   字符串(不包含特殊符号，不支持转义符)
let s = `
    {
        "name": "gua",
        "height": 169
    }
`
// 对于上面的 s 将返回以下数据
// 注意 169 是数字
// ["{", "name", ":", "gua", ",", "height", ":", 169, "}"]

const jsonTokens = function(jsonString) {
    let s = jsonString.split('\n').join(' ') + ' '
    let i = 0
    // 补充末尾空格便于遍历
    const r = []
    const specialSymbol = `{}()[]+`
    while (i < s.length) {
        const c = s[i]
        if (c === ' ' || c === ',') {
            // 空格跳过
            i = i + 1
        } else if (specialSymbol.indexOf(c) !== -1) {
            // 特殊符号处理
            r.push(c)
            i = i + 1
        } else if (c === '"') {
            const nextIndex = findNextIndex(s, i + 1, '"')
            let word = s.slice(i + 1, nextIndex)
            // 转换数字的
            if (isNumber(word)) {
                word = Number(word)
            }
            r.push(word)
            // log(nextIndex, word)
            i = nextIndex + 1
        } else {
            // 找到下一个空格
            const nextIndex = findNextIndex(s, i, ' ')
            // 截取字符串
            let word = s.slice(i, nextIndex)
            // 转换数字的
            if (isNumber(word)) {
                word = Number(word)
            }
            // 留下数字的
            // isNumber(word) && r.push(word)
            r.push(word)
            i = nextIndex + 1
        }
    }
    return r
}

console.log(jsonTokens(s))

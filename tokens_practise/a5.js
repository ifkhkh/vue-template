const { tokens1 } = require("./a2")
const {
    isNumber,
} = require('./a1')
// code 是一个如下的字符串，只包含符号和数字
// 符号一共有 6 种 [ ] + - * /
// 数字就只有十进制数字
let code = '[+ 123  456] '
// 对于上面一行字符串，返回下面的内容，注意数字类型被转换了
// ['[', '+', 123, 456, ']']
const isMathSymbol = str => {
    const s = '+_*/[]()'
    return s.indexOf(str) !== -1
}
const tokens4 = function(code) {
    const s = code.split('')
    const s2 = [s[0]]
    for (let i = 1; i < s.length; i++) {
        const c = s[i]
        const lastC = s[i -1]
        if (isNumber(lastC) && isMathSymbol(c)) {
            s2.push(' ')
        }
        s2.push(c)
    }
    const newS = s2.join('')
    console.log(newS)
    return tokens1(newS)
}

console.log(tokens4(code))
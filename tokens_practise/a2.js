const {
    isNumber,
    findNextIndex,
} = require('./a1')

let code = "abc d efg 1 3 'gua' 'lang' ( )[]"
// 这次我们增加 3 个功能
// 0, 字符串也要能解析出来
// 1, 给单引号包裹的字符串增加一个特例，找到一个单引号的下标
// 2, 增加 ()[] 四个符号的判断
// 下面例子的输出如下
// log(tokens1(code))
// ["abc", "d", "efg", "gua", "lang", "(", ")", "[", "]"]

const log = console.log.bind(console)
const tokens1 = function(code) {
    // 上一题已经实现寻找数字和字符串结尾下标的函数，这里就是多了一个单引号字符串而已
    // 怎么办呢？
    // 无非是给单引号包裹的字符串增加一个特例，找到一个单引号的下标
    // 如果是单引号，就调用自己实现的 quoteStringEnd(s, i) 函数找到并返回单引号下标 + 1
    // 如果是 ()[] 这四个符号就直接加到结果数组中
    let s = code
    let i = 0
    s = s + ' '
    // 补充末尾空格便于遍历
    const r = []
    const specialSymbol = `()[]`
    while (i < s.length) {
        const c = s[i]
        if (c === ' ') {
            // 空格跳过
            i = i + 1            
        } else if (specialSymbol.indexOf(c) !== -1) {
            // 特殊符号处理
            r.push(c)
            i = i + 1
        } else if (c === "'") {
            log(c, 'c')
            const nextIndex = findNextIndex(s, i + 1, "'")
            const word = s.slice(i + 1, nextIndex)
            r.push(word)
            log(nextIndex, word)
            i = nextIndex + 1
        } else {
            // 找到下一个空格
            const nextIndex = findNextIndex(s, i, ' ')
            // 截取字符串
            const word = s.slice(i, nextIndex)
            // 留下数字的
            // isNumber(word) && r.push(word)
            r.push(word)
            i = nextIndex + 1
        }
    }
    return r
}

const __main = () => {

    console.log(tokens1(code))
}


__main()
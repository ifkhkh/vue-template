let code = "abc 12 234 asjf931 asdf"
// code 是变量名 和 数字组成的字符串，用空格分隔
// 输出所有的数字（字符串形式），下面例子的输出如下
// log(numbers(code))
// ["12", "234"]

const isNumber = str => Boolean(Number(str))

const findNextIndex = (str, i, symbolChar) => {
    for (let index = i; index < str.length; index++) {
        const c = str[index]
        if (c === '|') {
            index++
            continue
        } else if (c === symbolChar) {
            return index
        }
    }
}

const numbers = function(code) {
    // 用下标 i 循环遍历字符串 s
    // 如果 s[i] 是空格则往前走
    // 如果是字母，就调用自己实现的 stringEnd(s, i) 函数找到并返回空格的下标
    // 如果是数字，则调用自己实现的 numberEnd(s, i) 函数找到并返回空格的下标

    // 找结尾下标的函数，如果遇到空格则返回空格的下标
    // 具体下标怎么定位你自己纸笔来推算

    // 字符串结尾可能不是空格（比如这里的 asdf）
    // 最简单的做法是，先在末尾加个空格再解析
    // 你知道很多编译器必须要求最后一个字符是回车键吗？
    let s = code
    let i = 0
    s = s + ' '
    // 补充末尾空格便于遍历
    const r = []
    while (i < s.length) {
        const c = s[i]
        if (c === ' ') {
            // 空格跳过
            i = i + 1            
        } else {
            // 找到下一个空格
            const nextIndex = findNextIndex(s, i, ' ')
            // 截取字符串
            const word = s.slice(i, nextIndex)
            // 留下数字的
            isNumber(word) && r.push(word)
            i = nextIndex + 1
        }
    }
    return r
}

// console.log(numbers(code))

module.exports = {
    isNumber,
    findNextIndex,
} 
// 本题实现字符串中转义字符的解析
let code = "abc ok 1 3 'gua\'lang' 'kuai bian cheng' ( )[]"
// 输出如下
// ['abc', 'ok', '1', '3', 'gua'lang', 'kuai bian cheng', '(', ')', '[', ']']

const tokens3 = function(code) {
    let s = code
    let i = 0

    // 转义字符，就是在 quoteStringEnd 函数中如果读到 | 就往前读一个字符
    // 我们目前只支持 \'
    // 所以如果下一个字符是 ' 就替换 \' 为单引号
    // 其他情况是错误的，且在我们的作业中不考虑也不处理
}

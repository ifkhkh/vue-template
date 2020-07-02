let code = "abc d efg 1 3 'gua' 'lang' 'kuai bian cheng' ( )[]"
// 这次我们比 a2 增加了 1 个功能
// 0, 单引号字符串可能带空格
// 下面例子的输出如下
// log(tokens2(code))
// ['abc', 'd', 'efg', '1', '3', 'gua', 'lang', 'kuai bian cheng', '(', ')', '[', ']']


const tokens2 = function(code) {
    let s = code
    let i = 0

    // 包含空格的单引号字符串
    // 其实也简单, quoteStringEnd 是找到单引号下标的
    // 所以上题你如果实现好了，这里应该会直接返回正确结果的
}

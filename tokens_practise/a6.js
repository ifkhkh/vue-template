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

}

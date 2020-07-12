const log = console.log.bind(console)

const ensure = (condition, message) => {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功')
    }
}

const htmlTokens = function(htmlString) {
    // htmlString 是 HTML 格式的字符串
    // 解析字符串, 返回对应的 tokens
}

const testHtmlTokens = function() {
    let s1 = '<img>'
    let e1 = ['<', 'img', '>']

    let s2 = '<img id>'
    let e2 = ['<', 'img', 'id', '>']

    let s3 = '<img id="id-img-gua">'
    let e3 = ['<', 'img', 'id', '=', 'id-img-gua', '>']

    let s4 = '<img id="id-img-gua" alt>'
    let e4 = ['<', 'img', 'id', '=', 'id-img-gua', 'alt', '>']

    let s5 = '<img id="id-img-gua" alt="kuai bian cheng">'
    let e5 = ['<', 'img', 'id', '=', 'id-img-gua', 'alt', '=', 'kuai bian cheng', '>']

    let s6 = '<div></div>'
    let e6 = ['<', 'div', '>', '<', '/', 'div', '>']

    let s7 = '<div id="app"></div>'
    let e7 = ['<', 'div', 'id', '=', 'app', '>', '<', '/', 'div', '>']

    ensure(arrayEquals(htmlTokens(s1), e1), 'test html tokens1')
    ensure(arrayEquals(htmlTokens(s2), e2), 'test html tokens2')
    ensure(arrayEquals(htmlTokens(s3), e3), 'test html tokens3')
    ensure(arrayEquals(htmlTokens(s4), e4), 'test html tokens4')
    ensure(arrayEquals(htmlTokens(s5), e5), 'test html tokens5')
    ensure(arrayEquals(htmlTokens(s6), e6), 'test html tokens6')
    ensure(arrayEquals(htmlTokens(s7), e7), 'test html tokens7')
}

testHtmlTokens()

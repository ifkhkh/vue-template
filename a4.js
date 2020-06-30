const log = console.log.bind(console)

const ensure = function(condition, message) {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功')
    }
}

const arrayClone = function(array) {
    // clone 一个数组并且返回
    // 注意, 要求实现浅拷贝
}

const testArrayClone = function() {
    let a1 = [1]
    let b1 = arrayClone(a1)
    ensure(equals(a1, b1), 'test array clone 1')

    let a2 = [[1]]
    let b2 = arrayClone(a2)
    ensure(equals(a2, b2), 'test array clone 2')
    a2[0].push(200)
    ensure(equals(b2[0], [1, 200]), 'test array clone 3')


    let a3 = [1, [2]]
    let b3 = arrayClone(a3)
    ensure(equals(a3, b3), 'test3')
    a3[1].push(300)
    ensure(b3[1][1] === 300, 'test4')
}

const arrayDeepClone = function(array) {
    // clone 一个数组并且返回
    // 注意, 要求实现深拷贝

    // 新建一个空数组 l
    // 遍历 array 得到元素
    // 如果元素是数组, 递归调用 arrayDeepClone 函数并把元素作为参数, 将得到的返回值添加到 l 中
    // 如果元素不是空数组, 直接把元素添加到 l 中
}

const testArrayDeepClone = function() {
    let a1 = [1]
    let b1 = arrayDeepClone(a1)
    ensure(equals(a1, b1), 'test array deep clone 1')

    let a2 = [[1]]
    let b2 = arrayDeepClone(a2)
    ensure(equals(a2, b2), 'test array deep clone 2')
    a2[0].push(200)
    ensure(equals(b2[0], [1]) && equals(a2[0], [1, 200]), 'test array deep clone 3')

    let a3 = [1, [2]]
    let b3 = arrayDeepClone(a3)
    ensure(equals(a3, b3), 'test array deep clone 4')
    a3[1].push(300)
    ensure(equals(b3[1], [2]) && equals(a3[1], [2, 300]), 'test array deep clone 5')
}

const __main = function() {
    testArrayClone()
    testArrayDeepClone()
}

__main()

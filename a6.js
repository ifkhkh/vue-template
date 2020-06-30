const log = console.log.bind(console)

const ensure = function(condition, message) {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功')
    }
}

// 自己补上 isObject 函数

// 自己补上 isArray 函数

const deepClone = function(value) {
    // 首先判断 value 是数组还是字典还是其他普通类型
    // 如果 value 是对象, 新建空对象 o
    // 遍历 value 得到 k 和 v
    // 递归调用 deepClone 函数并把 v 作为参数, 将得到的返回值添加到 o 中, 作为 k 对应的 value
    // 遍历结束后返回 o
    // 如果 value 是数组, 新建空数组 l
    // 遍历 value 得到元素
    // 递归调用 deepClone 函数并把元素作为参数, 将得到的返回值添加到 l 中
    // 遍历结束后返回 l
    // 如果 value 是其他类型, 直接返回 value
}

const testDeepClone = function() {
    let a1 = [[1]]
    let b1 = deepClone(a1)
    a1[0].push(200)
    ensure(equals(a1, [[1, 200]]) && equals(b1, [[1]]), 'test deep clone 1')

    let a2 = {
        x: 1,
        y: {},
    }
    let b2 = deepClone(a2)
    b2.y.z = 200
    ensure(equals(a2.y, {}) && b2.y.z === 200, 'test deep clone 2')

    let a3 = [
        {
            x: 1,
            y: 2,
        },
    ]
    let b3 = deepClone(a3)
    a3[0].y = [2]
    ensure(equals(a3[0].y, [2]) && equals(b3[0].y, 2), 'test deep clone 3')

    let a4 = {
        x: 1,
        y: [2],
    }
    let b4 = deepClone(a4)
    b4.y.push(200)
    ensure(equals(a4.y, [2]) && equals(b4.y, [2, 200]), 'test deep clone 4')

    let a5 = 100
    let b5 = deepClone(a5)
    ensure(b5 === 100, 'test deep clone 5')
}

const __main = function() {
    testDeepClone()
}

__main()

const log = console.log.bind(console)

const ensure = function (condition, message) {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功')
    }
}

// isObject 函数用来判断变量 o 是不是数组
// 如果 o 是数组, isObject 返回 true, 否则返回 false
// 这个函数如果需要直接拿来用, 不需要关心里面的实现
const isObject = function (o) {
    return Object.prototype.toString.call(o) === '[object Object]'
}

const objectEquals = function (a, b) {
    // Object.keys(a) 会返回 a 对象的 key 组成的数组
    // 假设 a 是下面的对象
    // let a = {
    //     x: 1,
    //     y: 2,
    // }
    // 那么 Object.keys(a) 的值是 ['x', 'y']
    // 遍历对象 a 的方式如下
    // let keys = Object.keys(a)
    // for (let i = 0; i < keys.length; i++) {
    //     let key = keys[i]
    //     let value = a[key]
    //     log('遍历对象的 key 和 value', key, value)
    // }

    // 如果 a 和 b 的 key 数量不一样多, 说明不相等
    // 遍历对象 a, 如果 a 的 key 对应的 value 与 b 的 key 对应的 value 不相等, 说明 a 与 b 不相等
    // 循环结束后, 都没有碰到不相等的情况, 说明 a 和 b 相等
    if (!isObject(a) || !isObject(b)) {
        return a === b
    }
    let r = true
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length !== keysB.length) {
        r = false
    } else {
        for (let i = 0; i < keysA.length; i++) {
            const key = keysA[i]
            const vA = a[key]
            const vB = b[key]
            if (vA !== vB) {
                r = false
                break
            }
        }
    }
    return r
}

const testObjectEquals = function () {
    let a1 = {}
    let b1 = {}
    let a2 = {
        x: 1,
    }
    let b2 = {
        x: 1,
    }
    let a3 = {
        x: 1,
        y: 2,
    }
    let b3 = {
        x: 1,
        y: 2,
    }
    let a4 = {
        x: 1,
        y: 2,
    }
    let b4 = {
        x: 1,
        y: 3,
    }
    ensure(objectEquals(a1, b1), 'test object equals 1')
    // ensure(objectEquals(1, 1), 'test object equals 1')
    ensure(objectEquals(a2, b2), 'test object equals 2')
    ensure(objectEquals(a3, b3), 'test object equals 3')
    ensure(!objectEquals(a4, b4), 'test object equals 4')

    log('objectEquals 测试成功')
}

const objectDeepEquals = function (a, b) {
    // 如果 a 和 b 都是对象, 那么进入下一轮判断
    // 如果 a 和 b 的 key 数量不一样多, 说明不相等
    // 遍历对象 a, 如果 a 的 key 对应的 value 与 b 的 key 对应的 value 不相等, 说明 a 与 b 不相等
    // 如果 a 的 key 对应的 value 与 b 的 key 对应的 value 是对象,
    // 那么要递归调用 objectDeepEquals 来判断这两个 value 是否相等, 如果这两个 value 不相等, 说明 a 与 b 不相等
    // 循环结束后, 都没有碰到不相等的情况, 说明 a 和 b 相等
    // 否则(如果 a 和 b 不都是对象), 直接返回 a 与 b 比较的值

    // 注意, 不需要考虑 a 和 b 的 key 对应的 value 是数组的情况
    if (!isObject(a) || !isObject(b)) {
        return a === b
    }
    let r = true
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)
    if (keysA.length !== keysB.length) {
        r = false
    } else {
        for (let i = 0; i < keysA.length; i++) {
            const key = keysA[i]
            const vA = a[key]
            const vB = b[key]
            if (isObject(vA) && isObject(vB)) {
                const equal = objectDeepEquals(vA, vB)
                if (!equal) {
                    r = false
                    break
                }
            } else if (vA !== vB) {
                r = false
                break
            }
        }
    }
    return r
}

const testObjectDeepEquals = function () {
    let a1 = {}
    let b1 = {}
    let a2 = {
        x: {}
    }
    let b2 = {
        x: {}
    }
    let a3 = {
        x: {
            y: 1,
        }
    }
    let b3 = {
        x: {
            y: 1,
        }
    }
    let a4 = {
        x: 1,
        y: {
            z: 2,
        },
    }
    let b4 = {
        x: 1,
        y: {
            z: 2,
        },
    }
    let a5 = {
        x: 1,
        y: {
            z: 2,
        },
    }
    let b5 = {
        x: 1,
        y: {
            z: 3,
        },
    }

    ensure(objectDeepEquals(a1, b1), 'test object deep equals 1')
    ensure(objectDeepEquals(a2, b2), 'test object deep equals 2')
    ensure(objectDeepEquals(a3, b3), 'test object deep equals 3')
    ensure(objectDeepEquals(a4, b4), 'test object deep equals 4')
    ensure(!objectDeepEquals(a5, b5), 'test object deep equals 5')

    log('objectDeepEquals 测试成功')
}

const __main = function () {
    testObjectEquals()
    testObjectDeepEquals()
}

__main()

export {
    objectDeepEquals,
}
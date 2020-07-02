const log = console.log.bind(console)

const ensure = function(condition, message) {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功', message)
    }
}

// isArray 函数用来判断变量 o 是不是数组
// 如果 o 是数组, isArray 返回 true, 否则返回 false
const isArray = function(o) {
    return Array.isArray(o)
}

const arrayEquals = function(a, b) {
    // 实现 arrayEquals, a 和 b 都是数组, 判断是否相等
    let r = true
    if (a.length !== b.length) {
        r = false
    } else {
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            if (element !== b[index]) {
                r = false
                break
            }
        }
    }
    return r
}

const testArrayEquals = function() {
    ensure(arrayEquals([], []), 'test array equals 1')
    ensure(arrayEquals([1], [1]), 'test array equals 2')
    ensure(arrayEquals([1, 2], [1, 2]), 'test array equals 3')
    ensure(!arrayEquals([1, 2, 3], [1, 3, 2]), 'test array equals 4')
}

const arrayDeepEquals = function(a, b) {
    // 实现 arrayEquals, a 和 b 都是数组, 判断是否相等
    // a 和 b 的元素要么是普通类型, 要么是数组类型, 不会是其他类型

    // 如果 a 和 b 的长度不相等, 直接返回 false
    // 如果 a 和 b 的长度相等, 遍历数组
    // 如果遍历出来的元素是数组类型, 那么递归调用 arrayDeepEquals, 如果返回值是 false, 那么数组不相等
    // 如果遍历出来的元素是普通类型, 直接判断元素是否相等, 如果不相等, 说明两个数组不相等
    // 如果遍历结束后都没有碰到不相等的情况, 说明两个数组是相等的

    let r = true
    if (a.length !== b.length) {
        r = false
    } else {
        for (let index = 0; index < a.length; index++) {
            const itemA = a[index];
            const itemB = b[index];
            if (isArray(itemA) && isArray(itemB)) {
                const equal = arrayDeepEquals(itemA, itemB)
                if (!equal) {
                    r = false
                    break
                }
            } else {
                if (itemA !== itemB) {
                    r = false
                    break
                }
            }
        }
    }
    return r
}

const testArrayDeepEquals = function() {
    let a1 = []
    let b1 = []
    let a2 = [[1]]
    let b2 = [[1]]
    let a3 = [[[1]], [[1]]]
    let b3 = [[[1]], [[1]]]
    let a4 = [[1, 2]]
    let b4 = [[1, 2]]
    let a5 = [[1, 2], [3, 4]]
    let b5 = [[1, 2], [4, 3]]

    ensure(arrayDeepEquals(a1, b1), 'test array deep equals 1')
    ensure(arrayDeepEquals(a2, b2), 'test array deep equals 2')
    ensure(arrayDeepEquals(a3, b3), 'test array deep equals 3')
    ensure(arrayDeepEquals(a4, b4), 'test array deep equals 4')
    ensure(!arrayDeepEquals(a5, b5), 'test array deep equals 5')
}

const __main = function() {
    testArrayEquals()
    testArrayDeepEquals()
}

__main()

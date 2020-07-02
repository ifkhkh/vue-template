const log = console.log.bind(console)
const {
    equals,
} = require('./a3')
const ensure = function(condition, message) {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功')
    }
}

const isArray = o => Array.isArray(o)

const flat = (array) => {
    // 把数组 array 拍平
    // 注意, 只需要把层级减少一层
    // 如果 array 是一维数组, 那么返回一维数组
    // 如果 array 是二维数组, 那么返回一维数组
    // 如果 array 是三维数组, 那么返回二维数组

    // 提示
    // 新建一个空数组 l
    // 遍历数组 array 得到元素
    // 如果元素是数组, 继续遍历这个元素, 并且把得到的结果添加到 l 中
    // 如果元素不是数组, 直接把元素添加到 l 中
    let r = []
    array.forEach(item => {
        if (isArray(item)) {
            // const l = flat(item)
            // r.push(...l)
            // r = r.concat(l)
            item.forEach(it => {
                r.push(it)
            });
        } else {
            r.push(item)
        }
    });
    return r
}

const testFlat = () => {
    let test1 = []
    let test2 = [1]
    let test3 = [1, [2]]
    let test4 = [1, [2, [3]]]

    ensure(equals(flat(test1), []), 'flat test1')
    ensure(equals(flat(test2), [1]), 'flat test2')
    ensure(equals(flat(test3), [1, 2]), 'flat test3')
    ensure(equals(flat(test4), [1, 2, [3]]), 'flat test4')
}

const flatDeep = (l) => {
    // 把数组 array 拍平
    // 注意, 不管 array 嵌套多少层, 最终都返回一维数组

    // 提示
    // 新建一个空数组 l
    // 遍历数组 array 得到元素
    // 如果元素是数组, 递归调用 flatDeep 函数把元素作为参数, 并且把得到的返回值与 l 拼接在一起, 注意, 这一步需要用 concat 方法
    // 如果元素不是数组, 直接把元素添加到 l 中
    let r = []
    l.forEach(item => {
        if (isArray(item)) {
            const l = flatDeep(item)
            r = r.concat(l)
        } else {
            r.push(item)
        }
    });
    return r
}

const testFlatDeep = () => {
    let test1 = []
    let test2 = [1]
    let test3 = [1, [2]]
    let test4 = [1, [2, [3]]]
    let test5 = [1, [2, [3, [4]]]]

    ensure(equals(flatDeep(test1), []), 'flat test1')
    ensure(equals(flatDeep(test2), [1]), 'flat test2')
    ensure(equals(flatDeep(test3), [1, 2]), 'flat test3')
    ensure(equals(flatDeep(test4), [1, 2, 3]), 'flat test4')
    ensure(equals(flatDeep(test5), [1, 2, 3, 4]), 'flat test5')
}

testFlat()
testFlatDeep()

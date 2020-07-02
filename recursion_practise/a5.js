const {
    equals,
    allIsObj,
} = require('./a3')

const log = console.log.bind(console)

const ensure = function (condition, message) {
    if (!condition) {
        log('测试失败', message)
    } else {
        log('测试成功')
    }
}

const objectClone = function (object) {
    // clone 一个对象并且返回
    // 注意, 要求实现浅拷贝
    const r = {}
    Object.keys(object).forEach(k => {
        r[k] = object[k]
    });
    return r
}

const testObjectClone = function () {
    let a1 = {
        x: 1,
    }
    let b1 = objectClone(a1)
    ensure(equals(a1, b1), 'test object clone 1')
    a1.y = 100
    ensure(b1.y === undefined, 'test object clone 2')

    let a2 = {
        x: 1,
        y: {},
    }
    let b2 = objectClone(a2)
    ensure(equals(a2, b2), 'test object clone 3')
    b2.y.z = 200
    ensure(a2.y.z === 200, 'test object clone 4')
}

const objectDeepClone = function (object) {
    // clone 一个数组并且返回
    // 注意, 要求实现深拷贝

    // 新建一个空对象 o
    // 遍历 object 得到 key 和 value
    // 如果 value 是对象, 递归调用 objectDeepClone 函数并把 value 作为参数, 将得到的返回值添加到 o 中, 作为 key 对应的 value
    // 如果 value 不是对象, 直接把 value 作为 key 的值
    const r = {}
    Object.keys(object).forEach(k => {
        const v = object[k]
        if (allIsObj(v)) {
            const newV = objectDeepClone(v)
            r[k] = newV
        } else {
            r[k] = object[k]
        }
    });
    return r
}

const testObjectDeepClone = function () {
    let a1 = {
        x: 1,
    }
    let b1 = objectDeepClone(a1)
    ensure(equals(a1, b1), 'test object deep clone 1')
    a1.y = 100
    ensure(b1.y === undefined && a1.y === 100, 'test object deep clone 2')

    let a2 = {
        x: 1,
        y: {},
    }
    let b2 = objectDeepClone(a2)
    ensure(equals(a2, b2), 'test object deep clone 3')
    b2.y.z = 200
    ensure(equals(a2.y, {}) && b2.y.z === 200, 'test object deep clone 4')
}

const __main = function () {
    testObjectClone()
    testObjectDeepClone()
}

__main()

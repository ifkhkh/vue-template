const {
    equals,
} = require('./a3')

const ensure = (condition, name) => {
    // log(condition)
    const r = condition ? '通过' : '失败'
    log(r, name)
}

const log = console.log.bind(console)

const processChildren = (parent, list) => {
    // 遍历 list 处理父节点和所属的子节点
    list.forEach(item => {
        if (item.parent === parent.node_id) {
            // 递归处理以该节点为父节点的子节点
            processChildren(item, list)
            parent.children.push(item)
        }
    });
}

const tree = (nodeList) => {
    if (nodeList.length === 0) {
        return {}
    }
    // 清洗数据
    const l = nodeList.map(item => {
        return {
            node_id: item.node_id,
            parent: item.parent_id,
            name: item.name,
            children: item.children || [],
        }
    })

    // 拿到头结点
    const header = l.filter(who => who.parent === 0)[0]
    // 递归处理父节点和子节点
    processChildren(header, l)
    return header
}

const testTree = () => {
    let l1 = []
    let e1 = {}
    let l2 = [{
        node_id: 1,
        parent_id: 0,
        name: 'n1',
    },]
    let e2 = {
        node_id: 1,
        parent: 0,
        name: 'n1',
        children: [],
    }
    let l3 = [{
        node_id: 1,
        parent_id: 0,
        name: 'n1',
    },
    {
        node_id: 2,
        parent_id: 1,
        name: 'n2',
    },
    ]
    let e3 = {
        node_id: 1,
        parent: 0,
        name: 'n1',
        children: [{
            node_id: 2,
            parent: 1,
            name: 'n2',
            children: [],
        },],
    }
    let l4 = [{
        node_id: 1,
        parent_id: 0,
        name: 'n1',
    },
    {
        node_id: 2,
        parent_id: 1,
        name: 'n2',
    },
    {
        node_id: 3,
        parent_id: 1,
        name: 'n3',
    },
    ]
    let e4 = {
        node_id: 1,
        parent: 0,
        name: 'n1',
        children: [{
            node_id: 2,
            parent: 1,
            name: 'n2',
            children: [],
        },
        {
            node_id: 3,
            parent: 1,
            name: 'n3',
            children: [],
        },
        ],
    }
    let l5 = [{
        node_id: 1,
        parent_id: 0,
        name: 'n1',
    },
    {
        node_id: 2,
        parent_id: 1,
        name: 'n2',
    },
    {
        node_id: 3,
        parent_id: 1,
        name: 'n3',
    },
    {
        node_id: 4,
        parent_id: 2,
        name: 'n4',
    },
    ]
    let e5 = {
        node_id: 1,
        parent: 0,
        name: 'n1',
        children: [{
            node_id: 2,
            parent: 1,
            name: 'n2',
            children: [{
                node_id: 4,
                parent: 2,
                name: 'n4',
                children: [],
            }],
        },
        {
            node_id: 3,
            parent: 1,
            name: 'n3',
            children: [],
        },
        ],
    }
    let l6 = [{
        node_id: 1,
        parent_id: 0,
        name: 'n1',
    },
    {
        node_id: 2,
        parent_id: 1,
        name: 'n2',
    },
    {
        node_id: 3,
        parent_id: 1,
        name: 'n3',
    },
    {
        node_id: 4,
        parent_id: 2,
        name: 'n4',
    },
    {
        node_id: 5,
        parent_id: 3,
        name: 'n5',
    },
    ]
    let e6 = {
        node_id: 1,
        parent: 0,
        name: 'n1',
        children: [{
            node_id: 2,
            parent: 1,
            name: 'n2',
            children: [{
                node_id: 4,
                parent: 2,
                name: 'n4',
                children: [],
            }],
        },
        {
            node_id: 3,
            parent: 1,
            name: 'n3',
            children: [{
                node_id: 5,
                parent: 3,
                name: 'n5',
                children: [],
            }],
        },
        ],
    }
    let l7 = [{
        node_id: 1,
        parent_id: 0,
        name: 'n1',
    },
    {
        node_id: 2,
        parent_id: 1,
        name: 'n2',
    },
    {
        node_id: 3,
        parent_id: 1,
        name: 'n3',
    },
    {
        node_id: 4,
        parent_id: 2,
        name: 'n4',
    },
    {
        node_id: 5,
        parent_id: 3,
        name: 'n5',
    },
    {
        node_id: 6,
        parent_id: 4,
        name: 'n6',
    },
    ]
    let e7 = {
        node_id: 1,
        parent: 0,
        name: 'n1',
        children: [{
            node_id: 2,
            parent: 1,
            name: 'n2',
            children: [{
                node_id: 4,
                parent: 2,
                name: 'n4',
                children: [{
                    node_id: 6,
                    parent: 4,
                    name: 'n6',
                    children: [],
                }],
            }],
        },
        {
            node_id: 3,
            parent: 1,
            name: 'n3',
            children: [{
                node_id: 5,
                parent: 3,
                name: 'n5',
                children: [],
            }],
        },
        ],
    }

    ensure(equals(tree(l1), e1), 'test tree 1')
    ensure(equals(tree(l2), e2), 'test tree 2')
    ensure(equals(tree(l3), e3), 'test tree 3')
    ensure(equals(tree(l4), e4), 'test tree 4')
    ensure(equals(tree(l5), e5), 'test tree 5')
    ensure(equals(tree(l6), e6), 'test tree 6')
    ensure(equals(tree(l7), e7), 'test tree 7')
}

testTree()
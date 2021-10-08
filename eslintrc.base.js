module.exports = {
    parserOptions: {
        ecmaVersion: 6
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    globals: {
        uni: true,
        wx: true
    },
    extends: [
        'eslint:recommended'
    ],
    rules: {
        "no-debugger": ["error"],
        "no-console": ["error"],
        'indent': ['error', 4],
        // 每行代码不应超过120列, 鹅打卡专属，加到140
        "max-len": ['error', {
            "code": 140 
        }],
        // 强制 function 块最多允许的的语句数量
        "max-statements": [1, 100], 
        // 使用单引号
        "quotes": [
            1,
            "single",
            "avoid-escape"
        ],
        // 禁止 function 标识符和括号之间出现空格
        "no-spaced-func": 2, 
        /**
         * TODO 无论是函数声明还是函数表达式，'('前不要空格，但'{'前一定要有空格；函数调用括号前不需要空格；[强制]
         */
        "wrap-iife": [ 
            2,
            "any"
        ],
        //禁止在块语句中使用声明（变量或函数）
        "no-inner-declarations": [2, "functions"], 
        //在写逗号时，逗号前面不需要加空格，而逗号后面需要添加空格
        "comma-spacing": [ 
            2,
            {
                "before": false,
                "after": true
            }
        ],
         // 要求所有的 var 声明出现在它们所在的作用域顶部
        "vars-on-top": 2,
         //使用let和const代替var
        "no-var": 2,
        // 禁止出现未使用过的变量
        "no-unused-vars": [2, { "vars": "all", "args": "none" }], 
        /**
         * TODO 不要在应该做比较的地方做赋值；[强制]
         */
        "no-sparse-arrays": 2, //禁止稀疏数组， [1,,2]
        /**
         * TODO 单行注释 (如果依赖的Eslint不一致，修改Eslint配置) [强制]
         */
        // 要求使用 JSDoc 注释
        "require-jsdoc": 1, 
        // 构造函数首字母大写
        "new-cap": [ 
            2,
            {
                "newIsCap": true,
                "capIsNew": false
            }
        ],
        /**
         * TODO 永远不要直接使用undefined进行变量判断；
         */
        /**
         *  TODO 禁止用中文或其它特殊字符做比较[强制]
         */
        //for in循环要用if语句过滤
        "guard-for-in": 0, 
        // 禁止扩展原生对象
        "no-extend-native": 2, 
        // "no-magic-numbers": [1, { "ignore": [0, -1, 1] }], // 禁用魔术数字(3.14什么的用常量代替)
        "no-eval": 2, // 禁用 eval()
        /**
         *  TODO brackets - 括号 [强制]
         */
        "max-params": [1, 5], // 强制 function 定义中最多允许的参数数量
        /**
         *  TODO 禁止直接用setTimeout的方式去控制代码流程，除非页面显示需要有延时 [强制]
         */
        /**
         * TODO 挂到window或者document的事件，在关联数据或对象不再使用，组件或模块destroy时，需要进行清理 [强制]
         */
        "max-depth": ["error", 5], // 强制可以嵌套块的最大深度
        /**
         *  TODO 拒绝else [强制]
         */
        //禁止隐式转换 
        "no-implicit-coercion": 1, 
        // "no-extra-semi": 2, // 禁止不必要的分号  TODO: 请兵哥确认
        //该规则规定了在对象字面量语法中，key和value之间的空白，冒号前不要空格，冒号后面需要一个空格
        "key-spacing": [ 
            2,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            "error",
            {
                // 在关键字后至少需要一个空格
                "after": false, 
                // 在关键字之前至少需要一个空格
                "after": true 
            }
        ],
        // 在定义对象或数组时，最后一项不能加逗号
        "comma-dangle": [ 
            2,
            "never"
        ],
        // 箭头函数中的箭头前后需要留空格
        "arrow-spacing": [ 
            2,
            {
                "before": true,
                "after": true
            }
        ],
        // 禁止对null使用==或!=运算符
        "no-eq-null": 2, 
        // 不能有未定义的变量
        "no-undef": 1, 
        // 禁止对象字面量中出现重复的 key
        "no-dupe-keys": 2, 
        // 禁止 function 定义中出现重名参数
        "no-dupe-args": 2, 
        // 禁止空语句块
        "no-empty": 2, 
        // 禁止不必要的布尔转换
        "no-extra-boolean-cast": 2, 
        // 禁止在嵌套的块中出现 function 或 var 声明
        "no-inner-declarations": [2, "functions"], 
        // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        "no-unreachable": 2, 
         // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
        "default-case": 2,
         // 禁用 alert、confirm 和 prompt
        "no-alert": 2,
        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题
        "no-empty-function": 2, 
        // 禁用不必要的嵌套块
        "no-lone-blocks": 2, 
         // 禁止使用多个空格
        "no-multi-spaces": 2,
        //在条件语句中不要使用赋值语句
        "no-cond-assign": 2, 
        //禁止在条件中使用常量表达式 if(true) if(1)
        "no-constant-condition": 2
    }
}
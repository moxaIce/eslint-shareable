module.exports = {
    extends: [
        './eslintrc.base.js',
        'plugin:vue/base', // 预防基础
        'plugin:vue/recommended', // 推荐的，最小化任意选择和认知开销
        'plugin:vue/essential', // 预防错误的
        'plugin:vue/strongly-recommended'// 强烈推荐，提高可读性
    ],
    rules: {
        "vue/html-indent": ["error", 4],
        "vue/order-in-components": ["error", {
            "order": [
                "el",
                "name",
                "key",
                "parent",
                "functional", ["delimiters", "comments"],
                ["components", "directives"],
                "extends",
                "mixins", ["provide", "inject"],
                "ROUTER_GUARDS",
                "layout",
                "middleware",
                "validate",
                "scrollToTop",
                "transition",
                "loading",
                "inheritAttrs",
                "model", ["props", "propsData"],
                "emits",
                "setup",
                "asyncData",
                "data",
                "fetch",
                "head",
                "computed",
                "watch",
                "filters",
                "watchQuery",
                "LIFECYCLE_HOOKS",
                "methods", ["template", "render"],
                "renderError"
            ]
        }]
    }
}
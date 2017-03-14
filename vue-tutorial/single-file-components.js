// 全局组件的问题
// 全局定义(Global definitions) 强制要求每个 component 中的命名不得重复
// 字符串模板(String templates) 缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 \
// 不支持CSS(No CSS support) 意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏
// 没有构建步骤(No build step) 限制只能使用 HTML 和 ES5 JavaScript, 而不能使用预处理器

// 使用单文件组件可以解决上面的问题并有以下优势：
// 完整语法高亮
// CommonJS 模块
// 组件化的 CSS

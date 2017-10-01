// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-unused-vars": [2, { 
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none" 
    }],
    // 关闭语句强制分号结尾
    "semi": [0],
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, {"max": 100}],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    "no-alert": 0,//禁止使用alert confirm prompt
    "no-bitwise": 0,//禁止使用按位运算符
    "no-continue": 0,//禁止使用continue
    "no-else-return": 0,//如果if语句里面有return,后面不能跟else语句
    "no-multi-spaces": 0,//不能用多余的空格
    "no-multi-str": 0,//字符串不能用\换行
    "no-nested-ternary": 0,//禁止使用嵌套的三目运算
    "no-redeclare": 0,//禁止重复声明变量
    "no-regex-spaces": 0,//禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-undefined": 0,//不能使用undefined
    "no-unexpected-multiline": 0,//避免多行表达式
    "semi": [0, "always"],//语句强制分号结尾
    "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
    "sort-vars": 0,//变量声明时排序
    "space-after-keywords": [0, "always"],//关键字后面是否要空一格
    "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "space-in-parens": [0, "never"],//小括号里面要不要有空格
    "space-infix-ops": 0,//中缀操作符周围要不要有空格
    "space-return-throw-case": 0,//return throw case后面要不要加空格
    "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    "spaced-comment": 0,//注释风格要不要有空格什么的
    "strict": 0//使用严格模式
  }
}

## week17

## 一、mocha / jest
1. 单元测试工具
2. 能复用的组件，用单元测试工具性价比高
3. mocha 最早是针对nodejs的测试框架，默认 不支持import /export，建议引入babel，处理函数导出必须写成node模块

## 二、code-coverage
1. 代码覆盖率
2. nyc 命令行工具 `npm install --save-dev nyc`
3. https://istanbul.js.org/

## 三、[探索istanbul/nyc代码覆盖工具的原理](https://zhuanlan.zhihu.com/p/88524418)
4. 实现代码覆盖检查的能力，思路上可能有3种方式：

1) 通过Proxy类似拦截机制；

这种方式可能对于函数/属性的存取有效，但是对于表达式与条件语句难以做到；

2) 通过对源代码进行AST级别的包装重写；

简言之，就是将源码转换为AST的IR（Intermediate Representation），然后逐个语法的遍历并包装，记录调用频次与实际值，最后将其还原为最终JS代码；

这种实现方式在JS的其它场景（如：webpack中loader/plugin对代码的检查替换）与其它语言中也很常见，istanbul也恰恰采用的是这种思路；
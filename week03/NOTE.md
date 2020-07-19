## 第三周
一、运算符和表达式

member运算
图片: https://uploader.shimo.im/f/qNXfNI2qEGtqWrQf.png

2.reference
object:
key:
delete:
assign:

3. expressions
call、updaye、unary,exponental

multiplicative: * / %
additive: + -
shift: << >> >>>
relationship:
<= >= < > instanceof in
equality
bitwise: & ^ |
logical : && ||
conditional: ? :


图片: https://uploader.shimo.im/f/QwDsKNmhMeug1Skd.png
二、类型转换
 a+b; == ;a[o]=1
图片: https://uploader.shimo.im/f/LWtOirWzgEgf87Bv.png

点或表达式，拿到的如果是基本类型，都会进行装箱运行
四、运行时
completion record  :语句完成状态的记录
[[type]]、[[value]]、[[target]]
图片: https://uploader.shimo.im/f/n7zjEHpeLIV1Kr3J.png

四、简单语句和复合语句
图片: https://uploader.shimo.im/f/DnrABwokHtak8dhx.png
五、声明
图片: https://uploader.shimo.im/f/PssbrGsrXgbVE59t.png

1.声明
function/function */async function/async functuon */var

只认所在函数体？，都有提升，自动提升到当前块最高级

预处理：所有的声明都有预处理机制

作用域链
作用域：代码从哪到哪发生作用
var 认所在函数体；
const /let 认花括号,主动加大括号，不影响变量干扰

图片: https://uploader.shimo.im/f/TCIQLfCJMgETgQAz.png

六、宏任务与微任务
atom->expression->statement
图片: https://uploader.shimo.im/f/fQfuJJjw9h2RmQWW.png

事件循环（js 引擎）
等待
获取代码
执行

七、函数调用
stack,函数调用与访问的变量，都在stack
execution context--->execution context stack --> running execution context

lexicalEnvironment
variableEnvironment

闭包：environment record 
realm 
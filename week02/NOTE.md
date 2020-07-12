一、常见的概念
（一）
一、泛用语言按语法分类
1. 分为形式语言与非形式语言

2. 非形式语言：中文、英文

3. 形式语言：（乔姆斯基体系）
0型  无限制文法
1型 上下文相关文法
2型 上下文无法文法
3型 正则文法

上下文包含关系，上一型一定包含下一型，反过来不一定。

图片: https://uploader.shimo.im/f/HZTDXLZj8GFoGktl.png

 [正则引擎：DFA和NFA]（https://blog.csdn.net/duxingxia356/article/details/40856167）

DNF NFA，形式化语言，BNF,
形式性语言分类
语言分类:
用途
数据描述语言
编程语言

表达方式
声明式
命令式


bnf
法定义的核心思想不会变，都是几种结构的组合产生一个新的结构，所以语法定义也叫语法产生式

图灵完备性（所有可计算的都是能被语言描述的）
阐释图灵完备性的两种：
命令式 - 图灵机
goto
if while

声明式 - lambda
递归

动态与静态
动态语言，动态类型
动态特征
在用户设备/在线服务器上运行
Runningtime
静态特征
程序员的设备
Compiletime 编译性

类型系统
动态类型系统（运行到用户设备时，能找到类型信息） 、静态类型系统（编译到目标设备时，已经找不到类型信息）
强类型与弱类型（强类型语言，不会默认转换）
函数签名
范型：逆变/协变
所有基于类的面向对象的语言，它都会把类的结构关系变成类型的结构关系


一般命令式编程语言 
分为五个层级：atom，expression,statement,structure,program
program  js里头是npm

语法==》语义==》改变运行时


二、number
js最小的单位 字面值和运行类型
组成js最小的元素
图片: https://uploader.shimo.im/f/76HuqU7Oq7DHsh4A.png
number
双精度 浮点类型 double float
float: 浮点数，小数点可以移动
基本思想，把一个数字拆成指数和有效位数，这个有效位数表示浮点数表示的精度，指数表示浮点数表示的范围
图片: https://uploader.shimo.im/f/5EaLbKyvqRhWhHBp.png

图片: https://uploader.shimo.im/f/T39M1MxWFPJLVUBb.png
反引号
literal

图片: https://uploader.shimo.im/f/aqOfdgXoSycLU2Uz.png

分类，归类（多继承）

对象的行为必须改变对象的状态，设计对象的时候的原则

symbol 实现了属性控制的权限控制，对象 k ：symbol,string

object: 数据属性，访问器属性

三、String
三个概念
charator  ：字符串带内容是字符
code point  ：码点，用数字代表字符
encoing  ：编码方式
字符集规范
ASCII：早年字符数量少，规定127个字符，26个大写字母，26个小写字母，0-9，各种制表符。美国发明，表达不了其他语言，编码和码点一致；
Unicode: 联合编码集，不同国家地区都包括在这里，后边发现，不满足
UCS: 0000-FFFF
GB: 国标范围小，和Unicode 字符集都码点不一致，但是都兼容ASCII码，但是中文没有ASCII码。
同样中文，GB比Unicode体积小
GB2313,GBK(GB13000),GB18030:全
ISO-8859:没有中文
BIG5: 台湾
encoding
UTF8 ：默认用一个字节表示一个字符，所有ASCII字符都能用1个字符，也就是8个比特位表示；
表示中文：黄色表示控制位，一：控制位并不表示实际字符，表示字节与字节的关系，第一个表示1110表示三个字节，后边没8位都用10开头，
UTF16：默认用16个比特位来表示一个字符，
参考：[字符编码笔记：ASCII，Unicode 和 UTF-8]（http://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html）
作业
1.带括号的四则运算产生式
//作业描述，我认为带括号的四则运算产生式作业理解
//1.在这里应该是先列明当 加入括号后 基础的 +，*的产生式情形
//2.因为是递归表示的，所以只要在前边列出基础表达式，后边直接复用就行
//3.几种结构的组合产生一个新的结构
//4.我感觉这里的 -和/一定程度被这里的 +和*的产生式包括了，所以就不再重复了
带括号的四则运算产生式
带括号的四则运算产生式
四则运算举例：
  (2+3)*5+1
终结符：
 Number
 + - * / （ ）

非终结符：
MultiplicativeExpression
AddtiveExpression

带括号的四则运算产生式
//MultiplicativeExpression
<MultiplicativeExpression>::=<Number>|
  "("<MultiplicativeExpression>")"|
  <MultiplicativeExpression>"*"<Number>|
  <MutiplicativieExpression>"/"<Number>｜

//AddtiveExpression
<AddtiveExpression>::=<MultiplicativeExpression>|
  "("<MultiplicativeExpression>"+"<MutiplicativieExpression>")"|
   "("<MultiplicativeExpression>"-"<MutiplicativieExpression>")"|
  "("<AddtiveExpression>")"|
  <AddtiveExpression>"+"<MutiplicativieExpression>|
  <AddtiveExpression>"-"<MutiplicativieExpression>｜
语言的分类
根据乔姆斯基谱系的根据文法的复杂程度
形式语言- 用途：
Swift/Rust/Visual Basic/lua/Assembly language


参考：https://www.tiobe.com/tiobe-index/
数据描述型语言：本身无法直接编程，数据描述性质
JSON 、HTML、XAML、SQL、CSS
编程语言：
C++、C、Java、C#、Python、Ruby、Perl、Lisp、T-SQL、Clojure、Haskel、JavaScript、PHP、
形式语言-表达方式

声明式语言 只告诉结果
JSON 、HTML、XAML、SQL、CSS 、Lisp、Clojure、Haskel

命令型语言 会告诉达成结果的步骤
 C++、C、Java、C#、Python、Ruby、Perl、T-SQL、JavaScript

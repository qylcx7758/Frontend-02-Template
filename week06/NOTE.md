## week6

### 一
CSS 的顶层样式表由两种规则组成的规则列表构成，一种被称为 at-rule，也就是 at 规则，另一种是 qualified rule，也就是普通规则。


复合选择器：
图片: https://uploader.shimo.im/f/DJU5n09ZhqI3wHmO.png
选择器优先级计算，取一个很大的n图片: https://uploader.shimo.im/f/SKg2UfmrMl4cKlRd.png
伪类选择器，伪元素选择

### 二
#### 简单选择器
*  通用选择器
div svg|a
type selector 选择的是tagName属性  命名空间：HTML SVG MathML
.cls class 空白分隔符
#id  id
[attr=value]
属性选择器，囊括了class属性选择器id选择器
attr = value  name = 值
等号之前加~，表示像class一样支持拿空格分隔的值得序列
等号之前加|，表示这个属性以这个值开头即可
:hover伪类，元素特殊状态
::before 伪元素以双冒号开头，提倡双冒号，这可以更好的分别伪类和伪元素

#### 复合选择器 combined
<简单选择器><简单选择器><简单选择器> 
* 或者 div 必须写在最前面

#### 复杂选择器
<复合选择器><复合选择器> 子孙选择器
<复合选择器>">"<复合选择器> 父子选择器
<复合选择器>"~"<复合选择器> 
<复合选择器>"+"<复合选择器>
<复合选择器>"||"<复合选择器> 选中某一列



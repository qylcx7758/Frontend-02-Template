
# 浏览器API

##  DOM API
## 一、分类
1. node分类:
- element ：HTMLElement/SVGElement
(三个常用的namespace: HTML,SVG，MathML,都会产生一个element子类)
- document
- characterData:字符数句   文本、注释、处理信息
- documentFragment
- documentType

2. 导航类操作
2.1 针对Node(parentNode,nextSibling...)
2.2
- 针对Element(parentElement.nextElementSibling....)
- 避免文本节点

图片: https://uploader.shimo.im/f/NxaaJ37a4sEMJy5V.png
3. 修改操作
最小化api设计原则
- replaceChild
图片: https://uploader.shimo.im/f/2XSmQlzVhEmKhNOT.png

4. 概述：
DOM是对HTML所描述文档的一个抽象

### 二、事件API
1. addeventListener
- 类似scroll这种使用传入passive 参数，false往往能够提高性能;
- 默认行为capture是冒泡，false;

### 三、Range API
1. 比起节点部分Api能够更精确操作DOM树，性能也更好，但是应用性比较差，更难用，更难理解；
2. DOM的collection是一个live collection,取出来的集合会跟着变化，
insert操作的时候不需要先remove掉，再insert的
3. 
```javascript
//将childNode变成普通数组
Array.prototype.slice.call(element.childNodes)
```
### 四、iterator迭代器Api,认为设计风格过于老旧，没有实际用途

### 五、CSSOM
1. 概述：
- DOM是对HTML所描述文档的一个抽象
- css一切的api都需要通过document.stylesheets来访问
2.  data url可以代替css文件引入
```html
    <link href="data" href="data:text/css,p%7Bcolor:blue%7D">
```
3. 一个`document.styleSheets`对应一个Link标签，从这里边的cssRules里面拿css值，data url可以拿，href地址的不好拿。
4. 
```javascript
document.setyleSheets[0].cssRules
document.setyleSheets[0].insertRule
document.setyleSheets[0].removeRule(0)

```
5. `window.getComputedStyle(element, [pseudoElt])`方法返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有CSS属性的值(最终真实渲染后的css属性)。 私有的CSS属性值可以通过对象提供的API或通过简单地使用CSS属性名称进行索引来访问。

实践：元素transform、拖拽、css动画中间态（此时无法通过css属性，DOM属性去获取）。

6. CSSOM view
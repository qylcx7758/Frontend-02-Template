
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

### 四、CSSOM

url  --->  HTML  --> DOM  --> DOM with CSS  --> DOM with position  --> bitmap（图片传给显卡驱动设备，才能转换成人眼能识别的光学信号）

html节点
规范中对 querySelectorAll 有明确要求，规定其必须返回一个静态的 NodeList 对象。
getElementBy系列返回的都是动态的HTMLCollection集合，动态集合中的DOM结构变化能实时地反映到所保存的对象中，而querySelector系列返回的都是静态的NodeList对象，是一个快照，对DOM的任何操作都不会对其产生影响。
NodeList 对象会包含文档中的所有节点，如 Element、Text 和 Comment 等；HTMLCollection 对象只会包含文档中的 Element 节点。
document.querySelectorAll('a').toString();    // return "[object NodeList]"
document.getElementsByTagName('a').toString();    // return "[object HTMLCollection]"
网络 
图片: https://uploader.shimo.im/f/F4cOwKONxtMSofv0.png
服务端代码
requestline :  由content-type规定body的书写格式
换行：  /r /n 两个字符组成
两种encode 文本有什么区别

CSS 的顶层样式表由两种规则组成的规则列表构成，一种被称为 at-rule，也就是 at 规则，另一种是 qualified rule，也就是普通规则。


  <meta charset="UTF-8" >
浏览器读到这个标签之前，处理的所有字符都是 ASCII 字符，众所周知，ASCII 字符是 UTF-8 和绝大多数字符编码的子集，所以，在读到 meta 之前，浏览器把文档理解多数编码格式都不会出错，这样可以最大限度地保证不出现乱码。一般情况下，HTTP 服务端会通过 http 头来指定正确的编码方式，但是有些特殊的情况如使用 file 协议打开一个 HTML 文件，则没有 http 头，这种时候，charset meta 就非常重要了。


<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
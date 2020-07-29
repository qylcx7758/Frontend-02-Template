
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
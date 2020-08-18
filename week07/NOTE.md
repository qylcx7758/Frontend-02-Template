学习笔记

#### 一、
1. dom树中存储的不是元素，而是节点，元素是节点的 一部分；

#### 二、
- 一行中的盒，叫做 *行内盒(inline-box)*  
  准确的说，叫 *行内级别的盒(inline-level-box)*  

- 单独占一行的级别，被称作 *块级盒(block-level-box)*  

- 文字和inline-level-box排出来的盒，叫 *行盒(line-box)*  

行内盒排版示意（从左到右）：  
 `[inline-box] [inline-box] ...` ← 一个`[line-box]`  

块级盒排版示意（从上到下）：
```
[line-box]
[block-level-box]
[block-level-box]
```

**块级排版内容** 被称为 **BFC**(block-level-formatting-context)  
**行内排版内容** 被称为 **IFC**(inline-level-formatting-context)  

#### 三、
1. 当我们要把正常流中的一个盒或者文字排版，需要分成三种情况处理。当遇到块级盒：排入块级格式化上下文。当遇到行内级盒或者文字：首先尝试排入行内级格式化上下文，如果排不下，那么创建一个行盒，先将行盒排版（行盒是块级，所以到第一种情况），行盒会创建一个行内级格式化上下文。遇到 float 盒：把盒的顶部跟当前行内级上下文上边缘对齐，然后根据 float 的方向把盒的对应边缘对到块级格式化上下文的边缘，之后重排当前行盒。
2. 一些元素会在其内部创建新的块级格式化上下文，这些元素有：浮动元素；绝对定位元素；非块级但仍能包含块级元素的容器（如 inline-blocks, table-cells, table-captions）；块级的能包含块级元素的容器，且属性 overflow 不为 visible。

#### 三、行模型与vertical-align的应用

- line-top
- text-top
- base-line
- text-bottom
- line-bottom
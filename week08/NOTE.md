week08
html,xml,sgml
## 一、元素介绍
1. Dtd
网页的前面几行都有这么一行<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

DTD 的全称是 Document Type Defination，也就是文档类型定义。SGML 用 DTD 来定义每一种文档类型，HTML 属于 SGML，在 HTML5 出现之前，HTML 都是使用符合 SGML 规定的 DTD。

dtd定义：文档类型定义（DTD）可定义合法的XML文档构建模块。它使用一系列合法的元素来定义文档的结构。DTD 可被成行地声明于 XML 文档中，也可作为一个外部引用。

dtd就是定义你的xml文件中可以有哪些元素，不可以有哪些元素，这些元素可以的值是什么类型的

-  SGML 留给 HTML 的重要的遗产：基本语法和 DTD。HTML 作为 SGML 的子集，它遵循 SGML 的基本语法：包括标签、转义等。
    
- HTML 语法源自 SGML，我们首先介绍了基本语法，包含了五种节点：标签（元素）、文本、注释、文档类型定义（DTD）和处理信息（ProcessingInstruction）
 whilt-space 代替 &nbsp;表示空，因为它是 no-break space 的形式，会让两个单词当作一个
&quot; 双引号 &
&amp;   &符号
&lt;  小于  &gt; 大于，  也可以当作 尖括号的开始和结束标记



图片: https://uploader.shimo.im/f/os848PShOUrU0iW2.png

3. 标签介绍
- abbr：<abbr> 标签指示简称或缩写，比如 "WWW" 或 "NATO"。 提示：可以在 <abbr> 标签中使用全局的 title 属性，这样就能够在鼠标指针移动到 <abbr> 元素上时显示出简称/缩写的完整版本。
- dfn:HTML 定义元素 (<dfn>) 表示术语的一个定义。
- figure:HTML <figure> 元素代表一段独立的内容, 经常与说明（caption） <figcaption> 配合使用, 并且作为一个独立的引用单元。当它属于主内容流（main flow）时，它的位置独立于主体。这个标签经常是在主文中引用的图片，插图，表格，代码段等等，当这部分转移到附录中或者其他页面时不会影响到主体。
- pre：pre表示预先调整好格式的文本，不会当做普通文本去表示；HTML <pre> 元素表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 <pre> 开始标签后的换行符也会被省略)
- samp:<samp> 元素用于标识计算机程序输出，通常使用浏览器缺省的 monotype 字体（例如 Lucida Console）。
- code: HTML <code> 元素呈现一段计算机代码. 默认情况下, 它以浏览器的默认等宽字体显示.
- hgroup：HTML <hgroup> element代表文档章节所属的多级别的目录，它将多个<h1>至<h6>的子元素组装到一起。
- blockquote:HTML <blockquote> 元素（或者 HTML 块级引用元素），代表其中的文字是引用内容。通常在渲染时，这部分的内容会有一定的缩进（注 中说明了如何更改）。若引文来源于网络，则可以将原内容的出处 URL 地址设置到 cite 特性上，若要以文本的形式告知读者引文的出处时，可以通过 <cite> 元素。blockquote 表示段落级引述内容，q 表示行内的引述内容，cite 表示引述的作品名。
- time：HTML time 标签(<time>) 用来表示24小时制时间或者公历日期，若表示日期则也可包含时间和时区。此元素意在以机器可读的格式表示日期和时间。 
- nav：HTML <nav>元素表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。因为这里的目录顺序不可随意变化，所以我们这里使用多级的 ol 结构。

- &lt;符号加在元素左边

- article：HTML <article>元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。​​
- hr:HTML <hr> 元素表示段落级元素之间的主题转换（例如，一个故事中的场景的改变，或一个章节的主题的改变）。

在HTML的早期版本中，它是一个水平线。现在它仍能在可视化浏览器中表现为水平线，但目前被定义为语义上的，而不是表现层面上。所以如果想画一条横线，请使用适当的css样式来修饰。

## 二、标签比较
1. em与strong标签区别：
- em 表示强调，strong 表示更强烈的强调。言简意赅，表明了 em 和 strong 的命名来历。并且在浏览器中，em 默认用斜体表示，strong 用粗体表示。这是第一个层次上的区别。
- em 用来局部强调，strong 则是全局强调。从视觉上考虑，em 的强调是有顺序的，阅读到某处时，才会注意到。strong 的强调则是一种随意无顺序的，看见某文时，立刻就凸显出来的关键词句。斜体和粗体刚好满足了这两种视觉效果，因此也就成了 em 和 strong 的默认样式。
- em 表示内容的重点（stress emphasis），strong 表示强烈的重要性、严重性或内容的紧迫性，strong 不会改变所在句子的语意，em 则会改变所在句子的语义。比如强调我吃了梨这句话，强调这句话中的哪个部分；
2. ul、ol、dl区别
无序列表(ul)，有序列表(ol)和定义列表(dl)

## 三、meta
1. 元信息标签
元信息，是指描述自身的信息，元信息类标签，就是 HTML 用于描述文档自身的一类标签，它们通常出现在 head 标签中，一般都不会在页面被显示出来（与此相对，其它标签，如语义类标签，描述的是业务）


## 四、节点类型
图片: https://uploader.shimo.im/f/UMZMWuFZ18LY203u.png

## other、标准介绍
DOM api ,cssom API

标准化组织
khronos
- webgl
ecma
- ecmascrpit
whatwg
- html
w3c
- webaudio
- cg(community group)/wg(working group)/ig(兴趣组)

三、全部api进行整理

```javasctipt
    let name=Object.getOw
```

## 其他
1. shift+alt+鼠标左键拖动，编辑多行，允许粘贴和手动输入；
2. 伪元素无法选中，无法copy；
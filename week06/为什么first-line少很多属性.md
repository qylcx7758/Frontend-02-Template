为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？

思考：
first-letter定义如下，它约束的内容是明确的单个字母；
CSS 伪元素 ::first-letter会选中某 block-level element（块级元素）第一行的第一个字母，并且文字所处的行之前没有其他内容（如图片和内联的表格） 。
first-line 定义如下，它约束的是页面上第一行内容，不同宽度的页面显示的效果不一致，带来了很多的不可预见性，所以first-line在定义规则的时候，只能修改它自身，不能影响布局；
::first-line CSS pseudo-element （CSS伪元素）在某 block-level element （块级元素）的第一行应用样式。第一行的长度取决于很多因素，包括元素宽度，文档宽度和文本的文字大小。
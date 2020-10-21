week15

## 一、 requestAnimationFrame（推荐）: 
- requestAnimationFrame 会把每一帧中的所有 DOM 操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率
- 在隐藏或不可见的元素中，requestAnimationFrame 将不会进行重绘或回流，这当然就意味着更少的 CPU、GPU 和内存使用量
- requestAnimationFrame 是由浏览器专门为动画提供的 API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了 CPU 开销
 - 如果浏览器降帧降频，也随之下降；对应 cancelAnimationFrame(handler)

## 二、建立动画

timeline使用requestAnimationFrame重复调用自身，
使用Symbol字符串生成tick等私有属性；

Animation构造和CSS Animation属性类似，接收函数property变化取开始结束差值与时间的均匀变化

Timeline的start方法中使用Set集合来实现增删，执行时间大于duration时纠正范围并delete animation
## 三、设计时间线的更新
- 对时间线的控制
- Animation添加delay，Timeline add animation时添加加入时间和动画对象映射表，时间线按add time和start time比较更新

## 四、Timeline 类引入状态管理

引入 this.state, 各接口方法限定入口状态 (防止直接调用 resume，导致回退的)
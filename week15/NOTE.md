week13

## 一、js 实现动画的三种方案：
1. setInterval： 导致原定时器内栈积压，不等待上一个执行完，立即自重复执行不安全，即时上一interval未执行完成接下来的interval同样按照间隔时间加入事件队列;

2. setTimeout：在上一计时器执行后，回调执行嵌套的计时器，然后才加入事件队列，模拟实现循环定时器效果。

3. requestAnimationFrame（推荐）: 
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

Animation添加delay，Timeline add animation时添加加入时间和动画对象映射表，时间线按add time和start time比较更新

## 四、给动画添加暂停和重启功能
- 暂停需要使用cancel tick，使用cancelAnimationFrame，暂停时记录暂停开始时间，
- 点击重启时，记录暂停结束时间，然后计算暂停起始差，附加到时间线上重启Tick。

## 五、Timeline 类引入状态管理

引入 this.state, 各接口方法限定入口状态 (防止直接调用 resume，导致回退的)
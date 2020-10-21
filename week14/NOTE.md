## week14 手势


### 一、鼠标api
`mousedown`:mousedown 事件在指针设备按钮按下时触发。
`mousemove`:当指针设备( 通常指鼠标 )在元素上移动时, mousemove 事件被触发。
`mouseenter`:当定点设备（通常指鼠标）移动到元素上时就会触发 mouseenter 事件;
[mouseenter 类似 mouseover，它们两者之间的差别是 mouseenter 不会冒泡（bubble），也就是说当指针从它的子层物理空间移到它的物理空间上时不会触发]
`mouseout `:当移动指针设备（通常是鼠标），使指针不再包含在这个元素或其子元素中时，mouseout 事件被触发。当指针从一个元素移入其子元素时，mouseout 也会被触发，因为子元素遮盖了父元素的可视区域。
`mouseover`:The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.
`mouseup`:The mouseup event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it. mouseup events are the counterpoint to mousedown events.

### 二、手指触摸api
`touchstart`: 当一个或多个触摸点与触控设备表面接触时触发touchstart 事件;
`touchend`:The touchend event fires when one or more touch points are removed from the touch surface;
`touchmove`:The touchmove event is fired when one or more touch points are moved along the touch surface;
`touchcancel `:The touchcancel event is fired when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created);

### 三、补充
1. 手势的抽象可分为： tap（轻点） pan（慢拖动） Flick/Swipe（快速拖动并离开屏幕） press（长按离开） 
2. Touch包含touchcancel事件，一般在系统弹窗打断或手势突然被识别为操作系统手势触发。【记得有兼容问题】
3. 建立一个context来记录mouse、touch移动时的起始坐标及状态
4. 将mouse 与 touch 事件抽象到一起，需要整理 监听、识别、分发 模块

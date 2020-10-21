// ### 解题思路
// 1. 先摸清楚它这个 链表是咋做的： 最顶层的对象，然后next对象后添加，类似：
// ```
// var l1 = {
//     val: 2,
//     next: {
//         val: 4,
//         next: {
//             val: 3,
//             next: null
//         }
//     }
// }
// var l2 = {
//     val: 5,
//     next: {
//         val: 6,
//         next: {
//             val: 4,
//             next: null
//         }
//     }
// }
// ```

// 2. 每循环一项，提取后面项的val值，注意是否存在判断，并且将两数之和 与 10的%，当作全局变量，放入下一次循环相加里面；
// 3. 这里感觉 初始创建特别麻烦，另外这一次的next被下一次充当下次声明的主题，这个变量重复，特别难使用，建议最好封装闭包，整个循环都是闭包，传入当前修改的目标的next，我这里用的循环整个对象，取到最底层的next来实现了，浪费资源；
// ### 代码

// ```javascript

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    //初次第一项的数值 用 listNode.val 来表示；
    //其他时候的其他项用listNode.next表示,next 几次表示第几个,链表结构；
    //下一项 用l1.val =new ListNode(val) 生成

    //最顶层的对象
    var currL1 = l1;
    var currL2 = l2;
    var resultList = null;
    var resultListCurr = null;
    var nextAdd = 0;
    //存在当前列表对象
    while (currL1 || currL2) {
        // console.log(currL1,currL2)
        var val1 = currL1 ? currL1.val : 0;
        var val2 = currL2 ? currL2.val : 0;

        var currResult = val1 + val2 + nextAdd;

        var currNumber = currResult % 10; //展示在当前位
        // if (!resultList) {
        //     console.log("creat")
        //     resultList = new ListNode(currNumber)
        // } else {
        //     resultListCurr = add(new ListNode(currNumber),resultListCurr)
        // }
        resultListCurr = addItem(new ListNode(currNumber),resultListCurr)
        nextAdd = parseInt(currResult / 10); //传给下一位
        // console.log(resultList)
        // console.log(resultList)
        currL1 = currL1?currL1.next:null;
        currL2 =currL2?currL2.next:null;
        // if (!resultListCurr) {
        //     resultListCurr = resultList.next;
        // } else {
        //     resultListCurr = resultListCurr.next;
        // }
    }
    if(nextAdd===1){
        resultListCurr=addItem(new ListNode(nextAdd),resultListCurr)
    }
    // console.log(resultListCurr)
    return resultListCurr
};

function addItem(newItem,target){
    if(!target){  
        //new item   
        target=newItem
    }else{
        var curr=target;
        while(curr.next){
            curr=curr.next
        }
        curr.next=newItem
    }
    return target
}


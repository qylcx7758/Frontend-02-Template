/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var nextAdd=0
var addTwoNumbers = function (l1, l2) {
    //初次第一项的数值 用 listNode.val 来表示；
    //其他时候的其他项用listNode.next表示,next 几次表示第几个,链表结构；
    //下一项 用l1.val =new ListNode(val) 生成

    //最顶层的对象
    var currL1 = l1;
    var currL2 = l2;
    var resultListCurr =null;
    var nextAdd = 0;
    //存在当前列表对象

    var resultObj=whileAdd(currL1,currL2,null,nextAdd)
    resultListCurr =resultObj.resultListCurr
    nextAdd=resultObj.nextAdd
    // if(nextAdd===1){
    //     resultListCurr=addItem(new ListNode(nextAdd),resultListCurr)
    // }
    console.log(resultListCurr)
    return resultListCurr
};

    function whileAdd(currL1,currL2,resultListCurr,nextAdd){
        while (currL1 || currL2) {
            // console.log(currL1,currL2)
            var val1 = currL1 ? currL1.val : 0;
            var val2 = currL2 ? currL2.val : 0;
    
            var currResult = val1 + val2 + nextAdd;
    
            var currNumber = currResult % 10; //展示在当前位

            resultListCurr = addItem(new ListNode(currNumber),resultListCurr)
            nextAdd = parseInt(currResult / 10); //传给下一位
            currL1 = currL1?currL1.next:null;
            currL2 =currL2?currL2.next:null;
            if(nextAdd===1 && !currL1 && !currL2){
              
                resultListCurr=addItem(new ListNode(nextAdd),resultListCurr)
                nextAdd=0
            }
            whileAdd(currL1,currL2,resultListCurr,nextAdd)

        }
        // nextAdd=1

            return {resultListCurr,nextAdd}
    }

function addItem(newItem,target){
    if(!target){  
        //new item   
        target=newItem
    }else{
        // var curr=target;
        // while(curr.next){
        //     curr=curr.next
        // }
        // curr.next=newItem
        target.next=newItem;
    }
    return target
}

// [2,4,3] [5,6,4]
var l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3,
            next: null
        }
    }
}
var l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4,
            next: null
        }
    }
}
var l1 = {
    val: 9,
    next: {
        val: null
    }
}
var l2 = {
    val: 9,
    next: {
        val: 9,
        next: null
    }
}
console.log(addTwoNumbers(l1, l2))
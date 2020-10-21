/*
 * @Author: qiuyiliang
 * @Date: 2020-10-04 00:13:03
 * @LastEditors: qiuyiliang
 * @LastEditTime: 2020-10-11 23:22:22
 * @FilePath: /homework/week14/leetcode.js
 */

//  week14 

/**
 * @description: 已经逆序的两数相加
 * @param {ListNode} 
 * @return {ListNode} 
 */
var addTwoNumbers = function(l1, l2) {
    let length=l1.length>=l2.length?l1.length:l2.length;
    let resultList=[]
    // l1.reverse();
    // l2.reverse();
    let nextAddNumber=0
    for(let i=0;i<length+1;i++){
        l1[i]=l1[i] || 0;
        l2[i]=l2[i] || 0;
        // console.log(nextAddNumber)
        let sumNumber=l1[i]+l2[i]+nextAddNumber;
        if(i===length && !sumNumber){
            //最后一位，要么为0，要么为1；
            // console.log("end "+sumNumber)
            //return 会直接中断函数
            break
        }
        if(sumNumber>=10){
            resultList[i]=sumNumber%10; //当前位
            nextAddNumber=parseInt(sumNumber/10); //下一位
        }else{
            resultList[i]=sumNumber;
            nextAddNumber=0
        }
    }
    // console.log(resultList)
    return resultList;
};

var l1=[2,4,5],l2=[5,6,3];

console.log(addTwoNumbers(l1,l2))
/**
 * @description: 位置上的数字相加
 * @param {type} 
 * @return {type} 
 */

// 342 + 465 = 807
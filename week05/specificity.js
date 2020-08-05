
/**
 * @description: 对复合选择器中 后代选择器与交集选择器的计算
 * @param {type} 
 * @return: 
 */
// 复合选择器：后代选择器，子代选择器，交集选择器，并集选择器，伪类选择器

//并集选择器/子代选择器/伪类选择器 未包括
function doSelectorList(selectorList) {
    var resultArr=[]
    for (let i = 0; i < selectorList.length; i++) {
        resultArr=specificity(selectorList[i])
        // resultArr.push(specificity(selectorList[i]))
    }
    return resultArr
}



/**
 * @description: 将每一项分开来计算优先级
 * @param {type} 
 * @return: 
 */
function specificity(selector) {
    //代表内联，id选择，clss选择，标签选择
    var p = [
        [],
        [],
        [],
        []
    ]
    var selectorParts = selector.split(" ")

    for (var part of selectorParts) {
        switch (part[0]) {
            case "#":
                //二元数组，内部需再做计算
                 p[1].push(sonSpecificity(part))
                break;
            case ".":
                p[2].push(sonSpecificity(part))
                break;
            default:
                p[3].push(sonSpecificity(part))
                break;
        }
    }
    return p
}

/**
 * @description: 将选择器的每一个项再次切换成数组，二元数组进行比较
 * @param {type} 
 * @return: 
 */
function sonSpecificity(selectorSon) {
    var p = [0, 0, 0, 0]
    var re = /(\.)|(\#)|(\>)|(\+)/g
    var str1 = selectorSon.replace(re, function (match, p1, p2, p3, p4) {
        return " " + match
    })
    //去除首项的空字符
    var selectorParts = str1.trim().split(" ")
    for (var part of selectorParts) {
        switch (part[0]) {
            case "#":
                p[1] += 1
                break;
            case ".":
                p[2] += 1
                break;
            default:
                p[3] += 1
                break;
        }
    }
    // console.log(p)
    return p

}

var selector1 = ".a #b div"
// var selector2 = ".g>.a.c #b.d div "
var selector3 = ".a.c #b.d div.e #b .a.g#f"


//expect
// [
//     [],
//     [ [ 0, 1, 1, 0 ], [ 0, 1, 0, 0 ] ],
//     [ [ 0, 0, 2, 0 ], [ 0, 1, 2, 0 ] ],
//     [ [ 0, 0, 1, 1 ] ]
//  ]
//一个二元数组的结果  
console.log(doSelectorList([selector3]))
var strs=["aca","cba"];

var longestCommonPrefix = function(strs) {
    var resultStr="";
    if(!strs[0]){
        return ""
    }
    var minLength=strs[0].length;
    var min=strs[0]
    for(var i=0;i<strs.length;i++){
        var item=strs[i]
        if(item.length<minLength){
            min=strs[i];
            minLength=strs[i].length;
        }
    }
    for(var i=0;i<minLength;i++){
        var start="";
        var isEnd=false
        for(var j=0;j<strs.length;j++){
            start =start ||  strs[j][i];
            if(start !==strs[j][i]){
                start=""
                isEnd=true
                break
            }else{
                
            }
        }
        resultStr+=start
        if(isEnd){
            break
        }
    }
    
    // console.log(minLength,min)
    // console.log(resultStr)
    return resultStr
}
console.log("1"+longestCommonPrefix(strs))
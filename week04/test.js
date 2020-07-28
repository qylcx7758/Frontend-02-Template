function match(string){
    for(var i=0;i<string.length-1;i++){
       if(string.charAt(i)==="a" && string.charAt(i+1)==="b"){
             console.log(i)
            return true
        }                               
     }
  }
  match("qweqebwbabeqwe")


  function match(string,key){
    return matchSingleKey(string,0,key,0)
  }


  function matchSingleKey(str,index1,key,index2){
    // for(var i=0;i<key.length;i++){
    //     if(singleStr===key[i]){

    //     }
    // }

    // 递归string 最左边的值比较最大抵达范围
    if(index1>=str.length){
        return false
    }
    if(str[index1]===key[index2]){
        if(index2<key.length-1){
            return matchSingleKey(str,index1+1,key,index2+1)
        }else{
            //比较到了key值的最右边，返回true
            console.log(key[index2])
            return true
        }
    }else{
        return matchSingleKey(str,index1+1,key,0)
    }
  }
  match("qweqabcdefqwe","abcdef")
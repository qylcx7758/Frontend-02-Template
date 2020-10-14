
let arr=[1,6,3,70,5,40,2,10,9]
let target=10


function getPosValue(arr,target){
    let map=[]
    if(arr.length<2){
        return "not find"
    }
    for(let i=0;i<arr.length;i++){
        // console.log(map[target-arr[i]])
        //存在 存有的值的序号 大于等于0 
        if(map[target-arr[i]]>=0){
            return [map[target-arr[i]],i]
        }
        //键值对存储，在新一轮循环时，检查目标 与 此时检查的数组项 之差，这个差值是否存储了，如果存储了，那么说明这两个值为目标值， 其实和新建一个数组差不多，不过因为value 的不确定，所以拿key当做value
       map[arr[i]]=i
      
    }
    // console.log(map)
}

console.log(getPosValue(arr,target))
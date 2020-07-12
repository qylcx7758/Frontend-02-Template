/**
 * @description: string to utf8
 * @param {type} 
 * @return: 
 */


function doOrginCode(originString){
   var charcode=originString.charCodeAt(0)
   var twocode=charcode.toString(2)
   var twoCodeLength=twocode.length;
   var modLength=8-twoCodeLength%8
   var addCode=""
   for(var i=0;i<modLength;i++){
       addCode+="0"
   }
   var newCode=addCode+twocode
   console.log(newCode)
   return newCode
}
// newCode=parseInt(newCode)
//0100 1110 0010 1101
// newCode="0100111000101101"

function utf8Byte2Code(utf8ByteList){
   var utf8CodeList=utf8ByteList.map(item=>{
       var tenNumber=parseInt(item,2)
       var sisteenNumber="0x"+tenNumber.toString(16)
       console.log(tenNumber,sisteenNumber)
       return sisteenNumber
   })
   return utf8CodeList
}

//假设string只有一个
function UTF8_encoding(string){
    var originString=string[0]
    // originString="a"
    
    var originCode=originString.charCodeAt(0)
    var resultUTf8codeList=[]
    var utf8ByteList=[]
    if(0x00 <=originCode && originCode <= 0x7f){
    //    console.log(1)
    //    console.log(originCode)
       resultUTf8codeList.push(originCode)
    }else if(0x7f < originCode && originCode <=0x7ff){
    //    console.log(2)
    //    console.log(originCode)
       var newCode=doOrginCode(originString)
       var code1=newCode.substring(0,4)
       var code2=newCode.substring(4)
       utf8ByteList.push("110"+code1)
       utf8ByteList.push("10"+code2)
    }else if(0x7ff < originCode && originCode <=0xffff){
    //    console.log(3)
    //    console.log(originCode)
       var newCode=doOrginCode(originString)
       var code1=newCode.substring(0,4)
       var code2=newCode.substring(4,10)
       var code3=newCode.substring(10)
       utf8ByteList.push("1110"+code1)
       utf8ByteList.push("10"+code2)
       utf8ByteList.push("10"+code3)
    }
    if(utf8ByteList.length>0){
       resultUTf8codeList=utf8Byte2Code(utf8ByteList)
    }
    // console.log(utf8ByteList)
    // console.log(resultUTf8codeList)
    var resultUTF8codeStr=resultUTf8codeList.join(" ")
    console.log(resultUTF8codeStr)
    return
}

//  var buffer = new Buffer('中'); 
// console.log(buffer.length); // => 3
// console.log(buffer);

console.log(UTF8_encoding("中"))
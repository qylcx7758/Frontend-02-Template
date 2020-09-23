for(let i of [1,2,3]){
    console.log(i)
}

//需要先支持 jsx,加关键包 npm install ==save=dev @babel/plugin-transform-react-jsx  
// 默认这里会被翻译成一个react 的函数应用
// 默认 var a = createElement("div", null); jsx 把html结构转换成js函数
// let a= <div  class="tclass"/> 
// let a= <div id="b"  class="tclass">
// <span>test1</span>
// <span>test2</span>
// <span>test3</span>
// </div>
//转变为如此
// var a = createElement("div", {
//     id: "b",
//     "class": "tclass"
//   }, createElement("span", null, "test1"), createElement("span", null, "test2"), createElement("span", null, "test3"));
 

/**
 * @description: 创造刚刚引入的方法
 * @param {type} 
 * @return {type} 
 */
function createElement(){
    return
}
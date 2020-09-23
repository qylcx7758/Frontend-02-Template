/*
 * @Author: qiuyiliang
 * @Date: 2020-09-19 20:40:33
 * @LastEditTime: 2020-09-23 21:37:13
 * @LastEditors: qiuyiliang
 * @Description: jsx 基本使用方法
 */


for(let i of [1,2,3]){
    console.log(i)
}




//需要先支持 jsx,加关键包 npm install ==save=dev @babel/plugin-transform-react-jsx  
// 默认这里会被翻译成一个react 的函数应用
// 默认 var a = createElement("div", null); jsx 把html结构转换成js函数
// let a= <div  class="tclass"/> 

//转变为如此
// var a = createElement("div", {
//     id: "b",
//     "class": "tclass"
//   }, createElement("span", null, "test1"), createElement("span", null, "test2"), createElement("span", null, "test3"));
 

/**
 * @description: 创造刚刚引入的方法,不用document.createElement生成，一样可以生成组件化
 * @param {type} 
 * @return {type} 
 */
function createElement(type,attributes,...children){
    let element;
    if(typeof type==="string"){
        //原生的情况
        element=  new ElementWrapper(type)
    }else{
        element=new type;
    }
    for(let name in attributes){
        element.setAttribute(name,attributes[name])
    }
    for(let child of children){
        if(typeof child==="string"){
            child=new TextWrapper(child)
        }
        element.appendChild(child)
    }
    return element
}

class TextWrapper{
    constructor(content){
        this.root=document.createTextNode(content)
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child){
        // this.root.appendChild(child)
        child.mountTo(this.root)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    } 
}


class ElementWrapper{
    constructor(type){
        this.root=document.createElement(type)
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child){
        // this.root.appendChild(child)
        child.mountTo(this.root)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    } 
}

/**
 * @description: 自定义的元素节点名称，用生产的diV代替
 * @param {type} 
 * @return {type} 
 */
class Test{
    constructor(){
        this.root=document.createElement("div")
    }
    setAttribute(name,value){
        this.root.setAttribute(name,value)
    }
    appendChild(child){
        this.root.appendChild(child)
    }
    mountTo(parent){
        parent.appendChild(this.root)
    }   
}

// 这个a的声明 得放到 createElement后边
let a= <div id="b"  class="tclass">
<span>1</span>
<span>2</span>
<span>3</span>
</div>
// document.body.appendChild(a)
a.mountTo(document.body)
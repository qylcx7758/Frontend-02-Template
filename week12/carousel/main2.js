

import {Component,createElement} from "./framework.js"

class Carousel extends Component{
    constructor(){
        super();
        this.root=document.createElement("div")
    }
    render(){
        return document.createElement("div")
    }
}

let d = [
    "https://static001.geekbang.org/resource/image/88/f1/8807661ef5b82fcb75e8b8f2dbd71ef1.jpg",
    "https://static001.geekbang.org/resource/image/67/00/67a1eac2683d27a798144e01a3097900.jpg",
    "https://static001.geekbang.org/resource/image/7a/30/7a9547384cffa039f063db1fc7669a30.jpg",
    "https://static001.geekbang.org/resource/image/82/af/823ef28a64096b4ffce19bca16a573af.jpg"
  ]
  
// document.body.appendChild(a)

let a = <Carousel src={d} />

a.mountTo(document.body)
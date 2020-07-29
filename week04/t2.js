var boxer=document.getElementsByClassName("CodeMirror-sizer")[2]
var lines=boxer.getElementsByClassName("CodeMirror-line")
var text=""
for(let i=0;i<lines.length;i++){
    var item=lines[i]
    var txt=item.innerText;
    console.log(txt)
    text+=txt
}
console.log(copy(text))



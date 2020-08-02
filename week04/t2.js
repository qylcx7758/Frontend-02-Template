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

var numbers=aaa.getElementsByClassName("CodeMirror-linenumber")
for(let i=numbers.length-1;i>=0;i--){
    numbers[i].remove()
}
console.log(numbers)
copy(aaa.innerText)

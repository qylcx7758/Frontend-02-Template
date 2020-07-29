

//abababx

var str="abababsdsabababxdaaa"
var log=console.log;

console.log(match(str))

function match(str){
    let state=start
    for(let c of str){
        // log(state)
        // log(c)
        state=state(c)
        // break;
        if(state===end){
            //for循环里面也能return 
            return "for:  true"
            // break
        }
    }
    return state===end
}

function start(c){
    if(c==="a")
        return foundA;
    else
        return start;
}

function end(){
    return end
}

function foundA(c){
    if(c==="b")
        return foundB;
    else
        return start(c);
}


function foundB(c){
    if(c==="a")
        return foundA1;
    else
        return start(c);  //保持一致，返回start,多执行一次
}


function foundA1(c){
    if(c==="b")
        return foundB1;
    else
        return start(c);
}

function foundB1(c){
    if(c==="a")
        return foundA2;
    else
        return start(c);
}



function foundA2(c){
    if(c==="b")
        return foundX;
    else
        return start(c);
}


function foundX(c){
    if(c==="x")
        return end;
    else
        return foundB1(c);
}
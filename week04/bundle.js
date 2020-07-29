(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

const net=require("net");
console.log(net)
class Request{
    constructor(options){
        this.method=options.method || "GET",
        this.host=options.host;
        this.port=options.port||"80";
        this.path=options.path || "/";
        this.body=options.body || {};
        this.headers =this.headers || {};

        if(!this.headers["Content-Type"]){
            this.headers["Content-Type"]="application/x-www-form-urlencoded"
        }
        if(this.headers["Content-Type"]==="application/json")
            this.bodyText=JSON.stringify(this.body)
        else if(this.headers["Content-Type"]==="application/x-www-form-urlencoded")
            this.bodyText=Object.keys(this.body).map(key=>`${key}=${encodeURIComponent(this.body[key])}`).join("&")
        
        this.headers["Content-Length"]=this.bodyText.length;
    }

    send(connection){
        return new Promise((resolve,reject)=>{
            console.log(...arguments)
            const parser=new ResponseParse;
            // resolve("");
            if(connection){
                connection.write(this.toString())
            }else{
                connection=net.createConnection({
                    host:this.host,
                    port:this.port
                },()=>{
                    connection.write(this.toString())
                })
            }
            connection.on("data",(data)=>{
                console.log(data.toString())
                parser.receive(data.toString())
                if(parser.isFinished){
                    resolve(parser.response)
                    connection.end()
                }
            })

            connection.on("error",(err)=>{
                reject(err)
                connection.end()
            })

        })    

    }

    toString(){
        return `${this.method} ${this.path} HTTP/1.1\r
        ${Object.keys(this.headers).map(key=>`${key}:${this.headers[key]}`).join("\r\n")}\r
        \r
        ${this.bodyText}`
    }
}




class ResponseParse{
    constructor(){

    }
    receive(string){
        for(let i=0;i<string.length;i++){
            this.receiveChar(string.charAt(i))
        }
    
    }
    receiveChar(char){
        console.log(char)
    }
    
}


void async function(){
    let request=new Request({
        method:"POST",
        host:"127.0.0.1",
        port:"8080",
        path:"/",
        headers:{
            ["x-Foo2"]:"customed"
        },
        body:{
            name:"max chiu"
        }
    })
    let response=await request.send();
    console.log(response)
}();
},{"net":2}],2:[function(require,module,exports){

},{}]},{},[1]);

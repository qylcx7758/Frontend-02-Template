// 处理 URL解析HTTP并响应
const net = require('net')
const parser = require('./parser.js')


class Request{
    // 处理请求
    constructor(options){
        this.method = options.method || 'GET'
        this.host = options.host
        this.port = options.port || 80
        this.path = options.path || "/"
        this.body = options.body || {}
        this.headers = options.headers || {}
        if(!this.headers["Content-Type"]){
            this.headers["Content-Type"] = "application/x-www-form-urlencoded"
        }

        if(this.headers["Content-Type"] === "application/json"){
            this.bodyText = JSON.stringify(this.body)
        }else if(this.headers["Content-Type"] === "application/x-www-form-urlencoded"){
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
        }

        this.headers["Content-Length"] = this.bodyText.length
    }

    // 建立链接 发送请求
    send(connection){
        return new Promise((resolve, reject) => {
            const parser = new ResponseParser() // 接受流
            if(connection){
                console.log('connecting ');
                // 建立链接

                connection.write(this.toString());
            }else{
                // 建立TCP链接
                connection = net.createConnection({
                    host: this.host,
                    port: this.port
                }, () => {
                    console.log('connect server')
                    connection.write(this.toString())
                    // console.log(this.toString())
                });
            }

            // 流
            connection.on('data', function(data){
                // console.log(data.toString())
                parser.receive(data.toString())
                
                if(parser.isFinished){
                    cosnsole.log(parse)
                    resolve(parser.response)
                    connection.end() 
                }
            });

            connection.on('error', (err) => {
                console.log('dicoonect~~')
                reject(err)
                connection.end()
            })
        })
    }

    toString(){

        return `${this.method} ${this.path} HTTP/1.1\r
${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}\r
\r
${this.bodyText}`
    }
}

class ResponseParser{
    constructor(){
        this.WAITING_STATUS_LINE = 0
        this.WAITING_STATUS_LINE_END = 1
        this.WAITING_HEADER_NAME = 2
        this.WAITING_HEADER_SPACE = 3
        this.WAITING_HEADER_VALUE = 4
        this.WAITING_HEADER_LINE_END = 5
        this.WAITING_HEADER_BLOCK_END = 6
        this.WAITING_BODY = 7

        this.current = this.WAITING_STATUS_LINE  
        this.statusLine = ""
        this.headers = {}
        this.headerName = ""
        this.headerValue = ""
        this.bodyParser = null
    }

    get isFinished(){
        return this.bodyParser && this.bodyParser.isFinished
    }

    get response(){
        this.statusLine.match(/HTTP\/1.1 ([0-9]+) ([\s\S]+)/)
        return {
            statusCode: RegExp.$1,
            statusText: RegExp.$2,
            headers: this.headers,
            body: this.bodyParser.content.join('')
        }
    }

    receive(string){
        for(let i of string){
            
            this.receiveChar(i)
        }
    }

    // 响应状态解析
    receiveChar(char){
        if(this.current === this.WAITING_STATUS_LINE){ 
            if(char === '\r'){ 
                this.current = this.WAITING_STATUS_LINE_END
            }else{
                this.statusLine += char
            }
        }else if(this.current === this.WAITING_STATUS_LINE_END){ 
            if(char === '\n'){
                this.current = this.WAITING_HEADER_NAME 
            }
        }else if(this.current === this.WAITING_HEADER_NAME){
            if(char === ':'){ 
                this.current = this.WAITING_HEADER_SPACE 
            }else if(char === '\r'){
                this.current = this.WAITING_HEADER_BLOCK_END 
                if(this.headers['Transfer-Encoding'] === 'chunked'){
                    this.bodyParser = new TrunkedBodyParser()
                }
            }else{
                this.headerName += char 
            }
        }else if(this.current === this.WAITING_HEADER_SPACE){
            if(char === ' '){
                this.current = this.WAITING_HEADER_VALUE
            }
        }else if(this.current === this.WAITING_HEADER_VALUE){
            if(char === '\r'){
                this.current = this.WAITING_HEADER_LINE_END
                this.headers[this.headerName] = this.headerValue
                this.headerName = "" 
                this.headerValue = ""
            }else{
                this.headerValue += char
            }
        }else if(this.current === this.WAITING_HEADER_LINE_END){ 
            if(char === '\n'){
                this.current = this.WAITING_HEADER_NAME 
            }

        }else if(this.current === this.WAITING_HEADER_BLOCK_END){
            if(char === '\n'){
                this.current = this.WAITING_BODY
            }
        }else if(this.current === this.WAITING_BODY){
             this.bodyParser.receiveChar(char)
        }
    }
}

class TrunkedBodyParser{



    constructor(){
        this.WAITING_LENGTH = 0
        this.WAITING_LENGTH_LINE_END = 1
        this.READING_TRUNK = 2 
        this.WAITING_NEW_LINE = 3
        this.WAITING_NEW_LINE_END = 4

        this.length = 0
        this.content = []
        this.isFinished = false
        this.current = this.WAITING_LENGTH
    }

    receiveChar(char){
        if(this.current === this.WAITING_LENGTH){ 
            if(char === '\r'){
                if(this.length === 0){
                    this.isFinished = true
                }
                this.current = this.WAITING_LENGTH_LINE_END
            }else{
                this.length *= 16
                this.length += parseInt(char, 16)
            }
        }else if(this.current === this.WAITING_LENGTH_LINE_END){
            if(char === '\n'){
                this.current = this.READING_TRUNK 
            }
        }else if(this.current === this.READING_TRUNK){
            this.content.push(char) 
            this.length --
            if(this.length === 0){
                this.current = this.WAITING_NEW_LINE
            }
        }else if(this.current === this.WAITING_NEW_LINE){
            if(char === '\r'){
                this.current = this.WAITING_NEW_LINE_END
            }
        }else if(this.current === this.WAITING_NEW_LINE_END){
            if(char === '\n'){
                this.current = this.WAITING_LENGTH
            }
        }
    }
}


 !async function(){
    let request = new Request({
        method: "POST",
        host: "127.0.0.1",
        port: "8099",
        path: "/",
        headers:{
            ["X-Foo2"]:"customed"
        },
        body:{
            name:"max chiu"
        }
    })

    
    let response = await request.send()

    let dom = parser.parseHTML(response.body)  
    console.log(dom)
}();
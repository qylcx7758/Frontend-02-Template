const EOF = Symbol("EOF") // 结束html文件

let currentToken = null
let currentAttribute = null

let stack = [{
    type: "document",
    children: []
}]

const {log}=console

//用于输出
function emit(token) {
    if (token.type === "text") {
        return
    }

    let top = stack[stack.length - 1]

    if (token.type == "startTag") {
        let element = {
            type: "element",
            children: [],
            attributes: []
        }

        element.tagName = token.tagName

        for (let p in token) {
            if (p != "type" && p != "tagName") {
                element.attributes.push({
                    name: p,
                    value: token[p]
                })
            }
        }

        top.children.push(element)
        element.parent = top

        if (!token.isSelfClosing) {
            stack.push(element)
        }

        currentTextNode = null

    } else if (token.type == "endTag") {
        if (top.tagName != token.tagName) {
            throw new Error("Tag start end doesn't match")
        } else {
            //遇到style标签，添加css规则
            stack.pop()
        }

        currentTextNode = null
    } else if (token.type == "text") {
        if (currentTextNode == null) {
            currentTextNode = {
                type: "text",
                content: ""
            }
            top.children.push(currentTextNode)
        }
        currentTextNode.content += token.content
    }
}

function data(char) {
    log(char)
    if (char == "<") {
        return tagOpen
    } else if (char == EOF) {
        emit({
            type: "EOF"
        })
        return
    } else {
        emit({
            type: "text",
            content: char
        })
        return data
    }
}

function tagOpen(char) {
    if (char == "/") {
        return endTagOpen
    } else if (char.match(/^[a-zA-Z]$/)) {
        //reconsume逻辑
        currentToken = {
            type: "startTag",
            tagName: ""
        }
        return tagName(char)
    } else {
        return
    }
}

function endTagOpen(char) {
    if (char.match(/^[a-zA-Z]$/)) {
        currentToken = {
            type: "endTag",
            tagName: ""
        }
        return tagName(char) 
    } else if (char == ">") {

    } else if (char == EOF) {

    } else {

    }
}

function tagName(char) {
    if (char.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    } else if (char == '/') {
        return selfClosingStartTag 
    } else if (char.match(/^[a-zA-Z]$/)) {
        currentToken.tagName += char 
        return tagName
    } else if (char == ">") {
        emit(currentToken)
        return data
    } else {
        return tagName
    }
}


function beforeAttributeName(char) {
    log(char)

    if (char.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    } else if (char == "/" || char == ">" || char == EOF) {
        return afterAttributeName(char)
    } else if (char == "=") {

    } else {
        currentAttribute = {
            name: "",
            value: ""
        }
        return attributeName(char)
    }
}

function attributeName(char) {
    if (char.match(/^[\t\n\f ]$/) || char == "/" || char == ">" || char == EOF) {
        return afterAttributeName(char)
    } else if (char == "=") {
        return beforeAttributeValue
    } else if (char == '\u0000') {

    } else if (char == "\"" || char == "'" || char == "<") {

    } else {
        currentAttribute.name += char
        return attributeName
    }
}

function beforeAttributeValue(char) {
    if (char.match(/^[\t\n\f ]$/) || char == "/" || char == ">" || char == EOF) {
        return beforeAttributeValue
    } else if (char == "\"") {
        return doubleQuotedAttributeValue
    } else if (char == "\'") {
        return singleQuotedAttributeValue
    } else if (char == ">") {

    } else {
        return UnquotedAttributeValue(char)
    }
}

function doubleQuotedAttributeValue(char) {
    if (char == "\'") {
        currentToken[currentAttribute.name] = currentAttribute.value
        return afterQuotedAttributeValue
    } else if (char == "\u0000") {

    } else if (char == EOF) {

    } else {
        currentAttribute.value += char
        return doubleQuotedAttributeValue
    }
}

function singleQuotedAttributeValue(char) {
    if (char == "\'") {
        currentToken[currentAttribute.name] = currentAttribute.value
        return afterQuotedAttributeValue
    } else if (char == "\u0000") {

    } else if (char == EOF) {

    } else {
        currentAttribute.value += char
        return doubleQuotedAttributeValue
    }
}

function UnquotedAttributeValue(char) {
    if (char.match(/^[\t\n\f ]$/)) {
        currentToken[currentAttribute.name] = currentAttribute.value
        return beforeAttributeName
    } else if (char == "/") {
        currentToken[currentAttribute.name] = currentAttribute.value
        return selfClosingStartTag
    } else if (char == ">") {
        currentToken[currentAttribute.name] = currentAttribute.value
        emit(currentToken)
        return data
    } else if (char == "\u0000") {

    } else if (char == "\"" || char == "'" || char == "<" || char == "=" || char == "`") {

    } else if (char == EOF) {

    } else {
        currentAttribute.value += char
        return UnquotedAttributeValue
    }
}

function afterQuotedAttributeValue(char) {
    if (char.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    } else if (char == "/") {
        return selfClosingStartTag
    } else if (char == ">") {
        currentToken[currentAttribute.name] = currentAttribute.value
        emit(currentToken)
        return data
    } else if (char == EOF) {

    } else {
        currentAttribute.value += char
        return doubleQuotedAttributeValue
    }
}

function selfClosingStartTag(char) {
    if (char == ">") {
        currentToken.isSelfClosing = true
        return data
    } else if (char == "EOF") {

    } else {

    }
}

module.exports.parseHTML = function parseHTML(html) {
    //console.log(log)
    console.log('begin parse :  '+ JSON.stringify(html))
    let state = data
    for (let char of html) {
        state = state(char)
    }
    state = state(EOF)
    // return stack[0]
}
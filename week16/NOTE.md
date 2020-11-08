week16

## 一、 工具链学习
1. 脚手架 generator
脚手架生成器 yeoman

2. 安装yeoman
npm install yeoman-generator

[](https://yeoman.io/authoring/index.html)


3. npm link --> yeoman 启动
package 名字必须 generator开头，不然无法运行


4. 通过命令行和用户交互


5. mkdie demo
demo qylcx$ yo toolchain

## 二、初始化vue的generators

## 三、vue-demo是依据generators 创造出来的项目
1. `Require stack:
- /usr/local/lib/node_modules/webpack/bin/webpack.js`
webpack 编不成功，用`npx webpack` pass
2. webpack 全局 安装cli 才行，不然要用npx


## 四、模拟vue-cli启用vue 脚手架项目
1. 理解generator 如何工作的
2. 创建项目文件夹，cd 项目， `yo vue`，执行generator

## 五、webpack
1. loader

## 六、babel
1. 通过.babelrc 文件进行配置，自动转换成低版本js文件
2. `babel ./src/sample.js > test.js`
module.exports ={
   
        entry:{
            index:"./main.js"
        },
        // output:{
        //     path:"/dist"
        // }
        //模块
        module:{
            rules:[{
                test:/\.js$/,  //所有符合这个正则规则的文件，所有js文件
                use:{
                    loader:"babel-loader",  //载入程序
                    //一层一层配,用的包
                    options:{
                        presets:["@babel/preset-env"],
                        plugins:["@babel/plugin-transform-react-jsx"]
                    }
                }
            }]
        },
        //为了开发方便，表示开发者，开发者模式，代码不再压缩，并且把代码放到 eval 里头直，调试的时候，就能作为一个单独的文件来引用
        mode:"development"
  
}
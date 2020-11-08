var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

    }

    //增加package.json，对npm 包进行封装，使用更方便
   async initPackage() {
        let answer=await this.prompt(    {
            type: "input",
            name: "name",
            message: "Your project name",
            default: this.appname // Default to current folder name
          },)
        const pkgJson = {
            "name": answer.name,
            "version": "1.0.0",
            "description": "",
            "main": "generators/app/index.js",
            "scripts": {
              "test": "echo \"Error: no test specified\" && exit 1"
            },
            "author": "",
            "license": "ISC",
            "devDependencies": {
                // eslint: '^3.15.0'
            },
            "dependencies": {
               //不写表示最新
            }
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

        //安装包,
       
        //自定义安装包
        this.npmInstall(["vue"],{'save-dev':false});
        this.npmInstall(["webpack","vue-loader","vue-template-compiler",
        'vue-style-loader','css-loader',"copy-webpack-plugin"],{'save-dev':true});
    // }
    // //管理templates 文件
    // copyFile(){
        this.fs.copyTpl(
            this.templatePath('HelloWorld.vue'),
            this.destinationPath('src/HelloWorld.vue'),
            {  }
        )
        //webpack文件复制
        this.fs.copyTpl(
            this.templatePath('webpack.config.js'),
            this.destinationPath('webpack.config.js'),
            {  }
        )
        this.fs.copyTpl(
            this.templatePath('main.js'),
            this.destinationPath('src/main.js'),
            {  }
        )
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('src/index.html'),
            { title:answer.name }
        )
    }
    async step1() {
        //文件模板系统
        this.fs.copyTpl(
            this.templatePath('HelloWorld.vue'),
            this.destinationPath('src/HelloWorld.vue'), {
                // title: 'Templating with Yeoman'
            }
        );
        this.log('method 1 just ran');
    }

};
var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

    }

    //增加package.json，对npm 包进行封装，使用更方便
    initPackage() {
        const pkgJson = {
            devDependencies: {
                eslint: '^3.15.0'
            },
            dependencies: {
                react: '^16.2.0'
            }
        };

        // Extend or create package.json file in destination path
        this.fs.extendJSON(this.destinationPath('package.json'), pkgJson);

        //安装包
        this.npmInstall();
    }


    async step1() {
        //文件模板系统
        this.fs.copyTpl(
            this.templatePath('t.html'),
            this.destinationPath('public/index.html'), {
                title: 'Templating with Yeoman'
            }
        );
        this.log('method 1 just ran');
    }

};
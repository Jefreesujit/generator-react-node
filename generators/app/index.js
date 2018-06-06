'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('generator-react-basic')} generator!`)
    );

    const prompts = [{
        name: 'name',
        message: 'Package Name',
        default: path.basename(process.cwd())
      }, {
        name: 'title',
        message: 'Application Title',
        default: 'Title'
      }, {
        name: 'description',
        message: 'Description',
        default: 'An React Node.js based application'
      }, {
        name: 'username',
        message: 'Github username',
        store: true
      }, {
        name: 'repoUrl',
        message: 'Repo URL',
        store: true
      }, {
        name: 'authorName',
        message: 'Author\'s Name',
        store: true
      }, {
        name: 'authorEmail',
        message: 'Author\'s Email',
        store: true
      }, {
        name: 'authorUrl',
        message: 'Author\'s Homepage',
        store: true
      }, {
        name: 'keywords',
        message: 'Key your keywords (comma to split)'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      props.year = this.currentYear;
      props.shortName = props.name;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('src/**/*'),
      this.destinationPath('src')
    );
    this.fs.copyTpl(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html'),
      this.props
    );
    this.fs.copy(
      this.templatePath('lib/**/*'),
      this.destinationPath('lib')
    );
    this.fs.copy(
      this.templatePath('.babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('.editorconfig'),
      this.destinationPath('.editorconfig')
    );
    this.fs.copy(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('.npmignore'),
      this.destinationPath('.npmignore')
    );
    this.fs.copy(
      this.templatePath('config.json'),
      this.destinationPath('config.json')
    );
    this.fs.copy(
      this.templatePath('index.js'),
      this.destinationPath('index.js')
    );
    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );
    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.props
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }

  install() {
    this.installDependencies();
  }
};

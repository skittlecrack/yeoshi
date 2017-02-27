'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var mkdirp = require('mkdirp');
var inquirer = require('inquirer');

module.exports = class extends Generator {
  prompting() {
    var done = this.async();
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      store   :  true,
      default : this.appname // Default to current folder name
    }, {
      type: 'checkbox',
      name: 'bowerDependencies',
      message: 'Which bower dependencies do you need?',
      choices: [
        new inquirer.Separator(chalk.underline.green(('uncheck the dependencies you ') + chalk.red('don\'t') + (' need.'))),
        {
          name    :   'bootstrap sass',
          value   :   'includeBootstrapSass',
          checked :   'true'
        },
        {
          name    :  'bootstrap select',
          value   :   'includeBootstrapSelect',
          checked :   'true'
        },
        {
          name    :   'enquire',
          value   :   'includeEnquire',
          checked :   'true'
        },
        {
          name    :   'fluidvids',
          value   :   'includeFluidVids',
          checked :   'true'
        }
      ],
    }]).then((answers) => {
      this.log('app name:', answers.name);
      this.log('dependencies:', answers.bowerDependencies);
      done();
    });
  }
  writing() {
    
  }
  installGrunt() {
    this.npmInstall(['bower'], { 'save-dev': true });
  }
  installBower() {
    this.npmInstall(['bower'], { 'save-dev': true });
  }
  installLodash() {
    this.npmInstall(['lodash'], { 'save-dev': true });
  }
};

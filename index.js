#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
var answer = await inquirer.prompt([{
     name : "age",
     type : "number",
     message: "Enter your age"
}
])

// console.log(answer.name);
console.log(chalk.yellow(answer.age));

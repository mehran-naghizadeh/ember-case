// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import emberCase from './commands/ember-case';
import atify from './commands/atify';
import thisify from './commands/thisify';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "embercase" is now active!');
  
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const commands = [
    { id: 'embercase.emberCase', method: emberCase},
    { id: 'embercase.@ify', method: atify},
    { id: 'embercase.thisify', method: thisify},
  ];

  commands.forEach(({id, method}) => {
    const disposable = vscode.commands.registerCommand(id, method);
  
    context.subscriptions.push(disposable);
  });
}

// This method is called when your extension is deactivated
export function deactivate() {}

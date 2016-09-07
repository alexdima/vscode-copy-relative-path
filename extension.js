var vscode = require('vscode');
var copy = require('copy-paste').copy;

function activate(context) {
	var disposable = vscode.commands.registerCommand('copyRelativePath', function (uri) {
		copy(vscode.workspace.asRelativePath(uri));
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;


function deactivate() {
}
exports.deactivate = deactivate;
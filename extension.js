var vscode = require('vscode');
var copy = require('copy-paste').copy;

function activate(context) {
	var disposable = vscode.commands.registerCommand('copyRelativePath', function (uri) {
		var path = vscode.workspace.asRelativePath(uri);
		path = path.replace(/\\/g, '/');
		copy(path);
	});
	context.subscriptions.push(disposable);
}
exports.activate = activate;


function deactivate() {
}
exports.deactivate = deactivate;
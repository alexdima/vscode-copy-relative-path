var vscode = require('vscode');
var copy = require('copy-paste').copy;

function activate(context) {
	var disposable = vscode.commands.registerCommand('copyRelativePath', function (uri) {
		if (typeof uri === 'undefined') {
			if (vscode.window.activeTextEditor) {
				uri = vscode.window.activeTextEditor.document.uri;
			}
		}
		if (!uri) {
			vscode.window.showErrorMessage('Cannot copy relative path, as there appears no file is opened (or it is very large');
			return;
		}
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
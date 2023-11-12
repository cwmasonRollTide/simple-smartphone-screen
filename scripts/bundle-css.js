const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');
const distDir = path.join(__dirname, '../dist');
const cssFilePattern = /\.module\.css$/;

function findCssFiles(dir, files) {
	fs.readdirSync(dir).forEach(file => {
		const fullPath = path.join(dir, file);
		if (fs.statSync(fullPath).isDirectory()) {
			findCssFiles(fullPath, files);
		} else if (cssFilePattern.test(file)) {
			files.push(fullPath);
		}
	});
}

function bundleCss() {
	let cssContent = '';
	const cssFiles = [];
	findCssFiles(componentsDir, cssFiles);

	cssFiles.forEach(file => {
		cssContent += fs.readFileSync(file, 'utf8') + '\n';
	});

	if (!fs.existsSync(distDir)){
		fs.mkdirSync(distDir);
	}

	fs.writeFileSync(path.join(distDir, 'bundle.css'), cssContent);
	console.log('CSS modules bundled successfully.');
}

bundleCss();

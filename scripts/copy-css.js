const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src/components');
const distDir = path.join(__dirname, '../dist/components');

function copyCssFiles(src, dist) {
	fs.readdirSync(src, { withFileTypes: true }).forEach(entry => {
		const srcPath = path.join(src, entry.name);
		const distPath = path.join(dist, entry.name);

		if (entry.isDirectory()) {
			if (!fs.existsSync(distPath)) {
				fs.mkdirSync(distPath, { recursive: true });
			}
			copyCssFiles(srcPath, distPath);
		} else if (entry.isFile() && entry.name.endsWith('.module.css')) {
			fs.copyFileSync(srcPath, distPath);
		}
	});
}

copyCssFiles(srcDir, distDir);

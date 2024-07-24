import path from 'path';
import fs from 'fs';
// 这个所以包的路径
const pkgPath = path.resolve(__dirname, '../../packages');
// 打包产物的路径
const disPath = path.resolve(__dirname, '../../dist/node_modules');
// 包的路径 ，pkgName的路径，isDist是打包后的路径
function resolvePkgPath(pkgName, isDist) {
	if(isDist) {
		return `${disPath}/${pkgName}`
	}
	return `${pkgPath}/${pkgName}`
	
}
// 解析PackageJson
function getPackageJson(pkgName) {
	// 解析包的路径
	const path = `${resolvePkgPath(pkgName)}/package.json}`;
	const str = fs.readFileSync(path, {encoding: 'utf-8'});
}
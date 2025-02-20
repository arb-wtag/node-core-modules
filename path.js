const path=require('path');

console.log(path.dirname('/Users/arnobbiswas/Desktop/node-core-modules/path.js'));
console.log(path.extname('/Users/arnobbiswas/Desktop/node-core-modules/path.js'));
console.log(path.basename('/Users/arnobbiswas/Desktop/node-core-modules/path.js'));
console.log(path.resolve('/Users/arnobbiswas/Desktop/node-core-modules/path.js'));


console.log(path.parse('/Users/arnobbiswas/Desktop/node-core-modules/path.js'));

const myPath=path.parse('/Users/arnobbiswas/Desktop/node-core-modules/path.js');
console.log(myPath.name);
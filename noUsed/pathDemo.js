const path = require('path');

const a = path.join(__dirname, '../../flutter/aa');
console.log('a: ', a);
const b = path.join('aa', 'bb');
console.log('b: ', b);

// path.resolve()中的/会被解析为根目录
const c = path.resolve('cc', 'd');
console.log('c: ', c);
const d = path.resolve('./ee', 'ff');
console.log('d: ', d);
const e = path.resolve('/ggg', '../www');
console.log('e: ', e);
const f = path.resolve(__dirname, 'tt');
console.log('f: ', f);

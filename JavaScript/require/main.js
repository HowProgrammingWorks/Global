'use strict';

const library = require('./library.js');
require('./module1.js');
require('./module2.js');

library.value = 300;

const res1 = library.f1(5);
console.log({ res1 });

const res2 = library.f2();
console.log({ res2 });

const res3 = library.f3(7);
console.log({ res3 });

const res4 = library.f4(700);
console.log({ res4 });

console.log({ library });

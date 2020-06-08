'use strict';

const library = require('./library.js');

library.value = 100;

library.f2 = () => 'from module1';

library.f3 = x => {
  library.value += x;
  return library.value;
};

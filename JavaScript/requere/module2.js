'use strict';

const library = require('./library.js');

library.value = 200;

library.f4 = x => {
  if (x > library.value) {
    library.value = x;
    return `x = ${x}, assigned to library.value`;
  }
  return `x = ${x}, not assigned to library.value`;
};

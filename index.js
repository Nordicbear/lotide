// index.js
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const head = require('./head');
const map = require('./map');
const middle = require('./middle');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countOnly,
  eqArrays,
  findKey,
  findKeyByValue,
  head,
  map,
  middle,
  takeUntil,
  without
};
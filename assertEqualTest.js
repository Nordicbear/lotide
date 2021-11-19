const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head(["Hi", "Bye", "Hello"]), "Hi");
assertEqual(head([5, 10, 15]), 10);
// задание 1: увеличивать на 1
let int_inc = 100;

function increment_int_1() {
  let increment = ++int_inc;
}


// задание 2: уменьшать на 1
let int_dec = 100;

function decrement_int_2() {
  let decrement = --int_dec;
}


// задание 3: int_inc + int_dec
function show_sum() {
  let sum = +int_inc + +int_dec;
}


// задание 4: добавлять к слову 1 слово 2
let word1 = 'im_word1';
let word2 = 'im_word2';
let new_element = document.createElement('div');

function add_word() {
  let add = word1 + ' ' + word2;
}

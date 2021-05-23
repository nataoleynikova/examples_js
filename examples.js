// задание 1: увеличивать на 1
function increment_int_1() {
  let int_1 = document.getElementById('int_inc');
  let num = ++int_1;
  document.getElementById('int_inc').innerHTML = num;
}

// задание 2: уменьшать на 1
function decrement_int_2() {
  let int_2 = 100;
  let dec = --int_2;
  document.getElementById('int_dec').innerHTML = dec;
}

// задание 3: int_inc + int_dec
function show_sum() {
  let inc = document.getElementById('int_inc');
  let dec = document.getElementById('int_dec');
  let sum = +inc + +dec;
  document.getElementById('sum').innerHTML = sum;
}

// задание 4: добавлять к слову 1 слово 2
function add_word() {
  let word1 = document.getElementById('word1').outerHTML;
  let word2 = document.getElementById('word2').outerHTML;
  let add = word1 + word2;
  let new_element = document.createElement('div');
  new_element.setAttribute("id", "output");
  new_element.innerHTML = add;
  document.body.append(new_element);
}

// задание 5: по кругу менять значение id:mode на low/middle/high
function change_word() {
  for (20>1) {
    let mode_1 = 'low';
    document.getElementById('mode').innerHTML = mode_2;
    let mode_2 = 'middle';
    document.getElementById('mode').innerHTML = mode_3;
    let mode_3 = 'high';
    document.getElementById('mode').innerHTML = mode_1;
  }
}


switch (change_word) {
  case mode_1:
    document.getElementById('mode').innerHTML = mode_2;
  case mode_2:
    document.getElementById('mode').innerHTML = mode_3;
  case mode_3:
    document.getElementById('mode').innerHTML = mode_1;
}


// задание 6: if mode = low: sum * 1; if mode = middle: sum * 2;
//            if mode = height: sum * 3
function change_sum() {
  if (document.getElementById('mode') == 'low') {
    let sum_1 = document.getElementById('sum') * 1;
    document.getElementById('multi').innerHTML = sum_1;
  } else if (document.getElementById('mode') == 'middle') {
    let sum_2 = document.getElementById('sum') * 2;
    document.getElementById('multi').innerHTML = sum_2;
  } else if (document.getElementById('mode') == 'high') {
    let sum_3 = document.getElementById('sum') * 3;
    document.getElementById('multi').innerHTML = sum_3;
  }
}
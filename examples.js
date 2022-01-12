// задание 1: увеличивать на 1
function increment_int_1() {
  let int_1 = document.getElementById('int_inc').textContent;
  let num_1 = Number(int_1) + 1;
  document.getElementById('int_inc').innerHTML = num_1;
}

// задание 2: уменьшать на 1
function decrement_int_2() {
  let int_2 = document.getElementById('int_dec').textContent;
  let num_2 = Number(int_2) - 1;
  document.getElementById('int_dec').innerHTML = num_2;
}

// задание 3: int_inc + int_dec
function show_sum() {
  let inc = document.getElementById('int_inc').textContent;
  let dec = document.getElementById('int_dec').textContent;
  let sum = Number(inc) + Number(dec);
  document.getElementById('sum').innerHTML = sum;
}

// задание 4: добавлять к слову 1 слово 2
function add_word() {
  let word1 = document.getElementById('word1').textContent;
  let word2 = document.getElementById('word2').textContent;
  let add = word1 + ' ' + '+' + ' ' + word2;
  let sum_words = document.getElementById('sum_words')
  let new_element = document.createElement('div');
  new_element.innerHTML = add;
  sum_words.appendChild(new_element);
}

// задание 5: по кругу менять значение id:mode на low/middle/high
function change_word() {
  let mode = document.getElementById('mode').textContent;
  if (mode === 'low') {
    document.getElementById('mode').innerHTML = 'middle';
  } else if (mode === 'middle') {
    document.getElementById('mode').innerHTML = 'high';
  } else if (mode === 'high') {
    document.getElementById('mode').innerHTML = 'low';
  }
}

// задание 6: if mode = low: sum * 1; if mode = middle: sum * 2;
//            if mode = high: sum * 3
function change_sum() {
  let mode_and_sum = document.getElementById('mode').textContent;
  let sumn = document.getElementById('sum').textContent;
  if (mode_and_sum === 'low') {
    document.getElementById('multi').innerHTML = sumn;
  } else if (mode_and_sum === 'middle') {
    let sum_2 = Number(sumn) * 2;
    document.getElementById('multi').innerHTML = sum_2;
  } else if (mode_and_sum === 'high') {
    let sum_3 = Number(sumn) * 3;
    document.getElementById('multi').innerHTML = sum_3;
  }
}

// задание 7: вывести четные числа от 0 до 26
function test_circle() {
  let even_numbers = [];
  for (let i=0; i<=26; i+=2) {
    even_numbers.push(i);
  }
  document.getElementById('circle_id').innerHTML = even_numbers;
}

// задание 8: массивы: объединение, вывод элемента, получение ключей
function test_array() {
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];

  let result = arr1.concat(arr2);
  document.getElementById('array').innerHTML = result;
  document.getElementById('output').innerHTML = result.pop();
  
  console.log(Object.keys(result));
  console.log(Object.keys(result.pop()));
}

// задание 9: рекурсия: вычислить сумму до данного
function sum_to() {
  function sum_to(n) {
    if (n == 1) return 1;
    return n + sum_to(n - 1);
  }
  document.getElementById('recursion').innerHTML = sum_to(5);
}

// задание 10: рекурсия: получение чисел Фибоначчи
function get_numbers() {
  let first = 0;
  let second = 1;
  let numbers = [];
  for (let i = 1; i <= 10; i++) {
    let current = first + second;
    first = second;
    second = current;
    numbers.push(current);
  }
  document.getElementById('fibonacci').innerHTML = numbers;
}

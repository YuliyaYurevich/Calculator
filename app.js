const result = document.getElementById('display');
const actions = document.querySelectorAll('.action');
const numbers = document.querySelectorAll('.number');

let stringToEvaluate;
let clicked;

result.value = '0';

numbers.forEach((occurence) => {
  occurence.addEventListener('click', () => {
    if (result.value.startsWith('0') && result.value.length > 1) {
      result.value = result.value.substring(1);
    }
  });
});

actions.forEach((occurence) => {
  occurence.addEventListener('click', (e) => {
    clicked = e.target.value;
  });
});

function action() {
  stringToEvaluate = result.value;

  clearScreen();
}

function display(value) {
  result.value += value;
}

function clearScreen() {
  result.value = '';
}

function evalResult() {
  if (stringToEvaluate === undefined || result.value === undefined) return;

  let res = eval(stringToEvaluate + clicked + result.value);

  result.value = res;
  stringToEvaluate = '';
  res = '';
  return;
}

function perCent() {
  let percent = result.value;
  result.value = percent / 100;
}

function minus() {
  result.value = result.value * -1;
}

function clickC() {
  result.value = '0';
  stringToEvaluate = '';
}

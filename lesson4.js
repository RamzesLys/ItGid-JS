// let a = -5;
// let b = 5

// if (a > 0 && a <= 20) {
//   console.log('1');
// } else if (a > 20 && a < 30) {
//   console.log('2');
// } else if (a > 30 && a <= 40) {
//   console.log('3');
// } else {
//   console.log('Не существует');
// }

// function randomInteger(min, max) {
//   let rand = min - 0.5 + Math.random() * (max - min +1);
//   rand = Math.round(rand);
//   return rand;
// }
// randomInteger();

let r = Math.round(Math.random() * 10);
console.log(r);

let userNum = document.querySelector('#user-num');

document.querySelector('#btn').onclick = checkNum;

function checkNum() {
  let num = userNum.value;
  num = parseInt(num);
  console.log(num);
  
  if (isNaN(num)) {
    alert('Введіть число');
  }
  else {
  if (num == r) {
    alert('Вірно');
  }
  else {
    alert('Спробуй ще');
  }
  }
}
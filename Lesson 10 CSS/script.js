let block1 = document.querySelector('.block-1');
let block1Style = block1.style;
block1.style.width = '100px'

block1.classList.add('red');
block1.classList.add('green');
block1.classList.remove('green');
console.log(block1.classList); // список усіх класів

console.log(block1.classList.contains('red')); // перевірка наявності класів в елемента 

block1.classList.toggle('red');
block1.classList.toggle('red');

const button = document.querySelector('.button');
// button.onclick = () => {
//   block1.classList.toggle('red');
// }

button.addEventListener (("dblclick"), () => {
  block1.classList.toggle('red')
})
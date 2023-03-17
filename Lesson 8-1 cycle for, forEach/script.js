// document.querySelectorAll('.block').onclick = () => {
//   console.log('Hi, Ramzes');
// }

let blocks = document.querySelectorAll('.block');
let blocks2 = document.getElementsByClassName('block');


for (let i = 0; i < blocks.length; i++) {
  blocks2[i].onclick = one;
}

// blocks.forEach((element) => {
//   element.onclick = () => {
//     console.log('Спроба');
//   }
// });

function one() {
  // console.log('111');
  // console.log(this)
  console.log(this.innerHTML);
  this.style.background = 'red'
}

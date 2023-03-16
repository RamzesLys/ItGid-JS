// const input = document.querySelector('#input');

// input.onkeypress = (e) => {
//   input.addEventListener('input', () => {
//     input.value = input.value.toUpperCase();  
//   });

//   if (e.keyCode < 97 || e.keyCode > 122) {
//     alert('Введіть літери');
//     return false 
//   } 
// }

let left = 0;

// document.onkeypress = (e) => {
//   console.log(e.keyCode);
//   console.log(e.code);
//   // console.log(e.key);
//   let sq = document.querySelector('.sq');
//   if (e.keyCode == 100) {
//     left = left + 10;
//     sq.style.marginLeft = left + 'px';
//   } 
//   if (e.keyCode == 97) {
//     left = left - 10;
//     sq.style.marginLeft = left + 'px';
//   }
  
// }

// document.onkeydown = (event) => {
//   let sq = document.querySelector('.sq');
//   if (event.keyCode == 39) {
//     left = left + 10;
//     sq.style.marginLeft = left + 'px';
//   }
//   if (event.keyCode == 37) {
//     left = left - 10;
//     sq.style.marginLeft = left + 'px';
//   }
// }

document.onkeypress = () => {
  console.log('keypress');
}

document.onkeydown = () => {
  console.log('keydawn');
}

document.onkeyup = () => {
  console.log('keyup');
}


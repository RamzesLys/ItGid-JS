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

document.onkeypress = (e) => {
  console.log(e.keyCode);
  let sq = document.querySelector('sq');
  if (e.keyCode == 100) {
    left = left + 10;
    sq.style.marginLeft = left + 'px';

  }
  
}



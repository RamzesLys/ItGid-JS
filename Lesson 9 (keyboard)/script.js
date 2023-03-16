const input = document.querySelector('#input');

// input.onkeypress = (e) => {
//   if (e.keyCode < 97 || e.keyCode > 122) {
//     console.log('Введіть літери');
//     return false
    
//   } else {
//     input.value = input.value.toUpperCase()
//   }

// }

input.addEventListener('input', () => {
  input.value = input.value.toUpperCase();
})

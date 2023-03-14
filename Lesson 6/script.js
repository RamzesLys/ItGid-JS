document.querySelector('.push').onclick = function () {
  console.log(document.querySelector('.text-input').value);
  console.log(document.querySelector('.pass-input').value);
  console.log(document.querySelector('.range-input').value);
  console.log(document.querySelector('.date-input').value);
  console.log(document.querySelector('.color-input').value);
  console.log(document.querySelector('#checkbox-input').checked);
  if (document.querySelector('#checkbox-input').checked) {
    console.log('Вибрано');
  } else {
    console.log('Не вибрано');
  }
console.log('------------------RADIO--------------------');
  console.log(document.querySelector(`.radio-input[checked]`).value);
 

}
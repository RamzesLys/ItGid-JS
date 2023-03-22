document.querySelector('.read-rules').onclick = () => {
  document.querySelector('.form-slider').style.marginLeft = '-250px'; 
}

const back = document.querySelectorAll('.read-rules-back');
// back.onclick = () => {
//   document.querySelector('.form-slider').style.marginLeft = '0'; 
// }

back.forEach((element) => {
  element.onclick = () => {
    document.querySelector('.form-slider').style.marginLeft = '0';
  }
})
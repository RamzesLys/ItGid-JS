document.querySelector('.push').onclick = () => {
  let radio = document.querySelectorAll('.radio-input');
  // console.log(radio);
  for (let i = 0; i < radio.length; i ++) {
    // console.log(radio[i].checked);
    if (radio[i].checked) {
      // console.log(radio[i].value);
    }
  }
  let p = document.querySelectorAll('p');
  for (let i = 0; i < p.length; i ++) {
    p[i].style.color = 'red';
  }
  let option = document.querySelectorAll('#my-select option');
  // console.log(option);
  for (let i = 0; i < option.length; i++) {
    if (option[i].selected) {
      console.log(option[i].value);
      console.log(option[i].innerHTML);
    }
  }
}



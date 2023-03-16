const input = document.querySelector('#input');

input.onkeypress = (e) => {
  if (e.keyCode < 97 || e.keyCode > 122) {
    console.log('Введіть літери');
    return false
    
  } else {
    let upperKey = e.key.toUpperCase();
    e.value += upperKey;
    console.log(upperKey);
    return upperKey
  }

}



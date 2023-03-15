const test = document.querySelector('#test');
test.onkeypress = (e) => {
  // console.log(e.keyCode);
  
  if (e.keyCode < 97 || e.keyCode > 122) {
    console.log('Невірні символи');
    return false
    
  } else {
    let upperKey = e.key.toUpperCase();
    e.key.innerHTML += upperKey;
    console.log(upperKey);
    return upperKey

    

  }

}



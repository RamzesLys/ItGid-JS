document.querySelector('#signup-submit').onclick = (event) => {
  event.preventDefault();
  console.log('workkkk');
  let name = document.querySelector('#signup-name').value;
  let pass = document.querySelector('#signup-pass').value;
  let email = document.querySelector('#signup-email').value;
  let birhDay = document.querySelector('#signup-birthday').value;
  let sex = document.querySelectorAll('.sex');
  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      sex = sex[i].value;
      break
    }
  }
  let data = {
    "name": name,
    "pass": pass,
    "email": email,
    "birthday": birhDay,
    "sex": sex
  }
ajax('core/signup.php', 'POST', login, data);

  function login(result) {
    console.log(result);
    if (result == 2) {
      alert('Заповніть поля')
    }
    else if (result == 1) {
      alert('Успішно')
    } else {
      alert('Повторіть реєстрацію')
    }
  }
}






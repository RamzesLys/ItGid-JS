let select = document.querySelector('#select-1');
let radio = document.querySelectorAll('input[name="rad-1"]');

select.onchange = () => {
  console.log(select.value);
  console.log(radio.value);
}

let sendForm = document.querySelector('#send-form');
let form = document.querySelector('form');
sendForm.onclick = (event) => {
  event.preventDefault();
  console.log('WORK');
  console.log(serialize(form.value));
}
function hello() {
  console.log('Hi, Ramzes');
  hello2();
}
hello();

function hello2() {
  console.log('Hello-2-2-2-2-2');
}


let btn = document.querySelector('#btn');
btn.onclick = hello

let showModal = document.querySelector('#modal-show');
let modal = document.querySelector('.modal');
let hide = document.querySelector('#hide');

function show () {
  // modal.hidden = false;
  modal.style.display = 'block';
  modal.style.backgroundColor = 'red';
  modal.style.borderRadius = 20 + 'px';
  modal.style.border = 5 + 'px' + ' solid' + ' green';
};

function hideBlock() {
  // modal.hidden = true;
  modal.style.display = 'none'
};

showModal.onclick = show;

hide.onclick = hideBlock
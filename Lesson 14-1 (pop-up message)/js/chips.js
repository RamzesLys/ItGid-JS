const chips = (message) => {
  let chips = document.createElement('div');
  chips.classList.add('chips');
  chips.innerHTML = message;
  console.log(chips);
  document.querySelector('body').appendChild(chips)
}

document.querySelector('button').onclick = () => {
  chips('Привіт')
};
// chips('hello');



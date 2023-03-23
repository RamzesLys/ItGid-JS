const chips = (message, timeremove = 3000) => {
  //if (timeremove === undefined) timeremove = 3000;
  let chips = document.createElement('div');
  chips.classList.add('chips');
  chips.innerHTML = message;
  chips.style.backgroundColor = 'red'
  addChips(chips)
  setTimeout(() => {deleteChips(chips)}, timeremove);
}

const deleteChips = (chips) => {
  chips.remove();
  let allChips = document.querySelectorAll('.chips-field .chips');
  if (allChips.length == 0) document.querySelector('.chips-field').remove();
}

const addChips = (chips) => {
  let chipsField = document.querySelector('.chips-field');
  if (chipsField) {
    chipsField.appendChild(chips);
  } 
  else {
    let chipsField = document.createElement('div');
    chipsField.classList.add('chips-field');
    document.querySelector('body').appendChild(chipsField);
    chipsField.appendChild(chips);
  }
}

document.querySelector('button').onclick = () => {
  chips('Привіт', 2500)
};


// chips('hello');



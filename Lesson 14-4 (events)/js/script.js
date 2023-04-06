const myClick = (event) => {
  console.log('click');
  console.log('---------------------1');
  console.log(event.target);
  console.log('---------------------2');
  console.log(this);
  //console.log(event);
}

// document.querySelector('#one').onclick = myClick;
// document.querySelector('body').onclick = myClick;
// document.querySelector('html').onclick = myClick;

document.onclick = (event) => {
  //console.log(event);
  if (event.target.id == 'one')
  console.log('Клік на one');
}

document.querySelector('.two').onclick = (e) => {
  e.stopPropagation();
  console.log('Клік на tw0');
}

document.querySelector('.three').onclick = function () {
  this.style.display = 'none';
  console.log('Клік на 3');
}
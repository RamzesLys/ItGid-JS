const myClick = (event) => {
  console.log('click');
  console.log('---------------------1');
  console.log(event.target);
  console.log('---------------------2');
  console.log(this);
  //console.log(event);
}

document.querySelector('#one').onclick = myClick;
document.querySelector('body').onclick = myClick;
document.querySelector('html').onclick = myClick;
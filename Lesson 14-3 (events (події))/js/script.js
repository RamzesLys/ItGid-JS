let one = document.querySelector('#one');

const myClick = () => {
  console.log('Click');
  one.onclick = null;
  let two = document.querySelector('#two');
  two.onclick = myClick2;
}

const myClick2 = () => {
  console.log(2222);
  let two = document.querySelector('#two');
  two.onclick = myClick3;
}

const myClick3 = () => {
  console.log('Wooowowowowo');
}

one.onclick = myClick;

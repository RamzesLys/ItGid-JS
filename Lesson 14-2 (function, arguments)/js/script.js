const f1 = () => {
  let div = document.querySelector('#one');
  div.innerHTML += ' Hello';
     //АБО// -- div.innerHTML = div.innerHTML + ' Hello';
}

f1();

const f2 = () => {
  let div = document.querySelector('#two');
  div.innerHTML += ' Hello';
}

f2();


//-----------------

const f3 = () => {
  c.innerHTML += ' Привіт';
}

let c = document.querySelector('#three');
f3()
c = document.querySelector('#four');
f3()

//--------------------

const f4 = (Uuu) => {
  //Uuu - id елемента
  let d = document.querySelector('#' + Uuu);
  d.innerHTML += ' Працює';
  console.log(Uuu + '-------');
}

f4('one');
f4('two');

//-------------

const summ = (b, a = 3, c = 4) => {
  // if (b) {
  //   b = b;
  // } else {
  //   b = 2;
  // }

  // b ? b = b : b = 1;
  return a*b;
}

console.log(summ(12 ,4));
console.log(summ(4));
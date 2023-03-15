document.querySelector('.onclick').onclick = () => {
  console.log('click');
}

document.querySelector('.ondblclick').ondblclick = () => {
  console.log('dblclick');
}

document.querySelector('.onmousemove').onmousemove = () => {
  console.log('onMouseMove');
}

document.querySelector('.onmouseenter').onmouseenter = () => {
  console.log('onMouseEnter');
}

document.querySelector('.onmouseleave').onmouseleave = () => {
  console.log('onMouseLeave');
}

const container = document.querySelector('.container')
container.onmousewheel = () => {
  console.log('Scrolling')
}

const test = () => {
  // console.log(2/3);
}


const test2 = () => {
  let a = 2
  return a/3
}

test();
console.log(5 * test());
console.log(5 * test2());
document.querySelector('p').innerHTML += ' Приклад span <b>Hi</b>';
document.querySelector('p').innerText += ' Приклад span <b>Hi</b>';

document.querySelector('h1').outerText = ' <h2>jjjjjj<h2>';

document.querySelector('div').insertAdjacentHTML("beforebegin", 2222);
document.querySelector('div').insertAdjacentHTML("afterbegin", 333);

document.querySelector('div').insertAdjacentHTML("afterend", 555);
document.querySelector('div').insertAdjacentHTML("beforeend", 444);

document.querySelector('.one span').innerHTML = 9999;

document.querySelector('img').alt = 'red dog';

document.querySelector('img').style = 'width: 90px';

document.querySelector('img').src = 'https://cdn-icons-png.flaticon.com/512/8149/8149959.png';

document.querySelector('link').href = 'style2.css';


const input = document.querySelector('input');
input.value = '12.02.2012';

input.type = 'range';

const button = document.querySelector('#btn');

const func = () => {
  document.querySelector('link').href = 'style1.css'
}

button.onclick = func




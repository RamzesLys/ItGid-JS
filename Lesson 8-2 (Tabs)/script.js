const init = () => {
 let tabBody = document.querySelectorAll('.tab-body');
 for (let i = 1; i < tabBody.length; i++) {
  tabBody[i].style.display = "none";
 } 
}

init();

function showTabs() {
  let data = this.getAttribute('data');
  let tabBody = document.querySelectorAll('.tab-body');
  for (i = 0; i< tab.length; i ++) {
    tabBody[i].style.display = "none";
  }
  document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}

let tab = document.querySelectorAll('.tab');
tab.forEach((element) => {
  element.onclick = showTabs;
});


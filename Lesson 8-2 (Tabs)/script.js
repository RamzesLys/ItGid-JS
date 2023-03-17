const init = () => {
 let tabBody = document.querySelectorAll('.tab-body');
 for (let i = 1; i < tabBody.length; i++) {
  tabBody[i].style.display = "none"
 } 
}

init()
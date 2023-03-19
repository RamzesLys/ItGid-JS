
document.querySelectorAll('.modal-show').forEach(function (element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
  // закрити вікно на кнопці
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
   // закрити вікно на кліку за межами
  element.onclick = closeModal;
});



function showModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).parentElement.classList.remove('hide');
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function (event) {
   if (event.keyCode == 27) {
      document.querySelectorAll('.modal-wrap').forEach(function (element) {
       closeModal();
      });
    }
  }
}

function closeModal() {
  document.querySelectorAll('.modal-wrap').forEach(function (element) {
    element.classList.add('hide');
    document.onkeydown = null;
  });
}



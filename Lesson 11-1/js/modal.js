
document.querySelectorAll('.modal-show').forEach(function (element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
  element.onclick = closeModal;
});

function showModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).parentElement.classList.remove('hide');
  document.querySelector(modalId).classList.remove('hide');
}

function closeModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).parentElement.classList.add('hide');
  document.querySelector(modalId).classList.add('hide');
}

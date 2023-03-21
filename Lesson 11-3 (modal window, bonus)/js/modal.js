document.querySelectorAll('.modal-show').forEach(function (element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal-close').forEach(function (element) {
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
  //console.log(element)
 element.onclick = closeModalWrap;
});


function showModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.remove('hide');
  // document.onkeydown = function (event) {
  //  if (event.keyCode == 27) {
  //     document.querySelectorAll('.modal-wrap').forEach(function (element) {
  //       element.classList.add('hide');
  //       document.onkeydown = null;
  //     });
  //   }
  // }
}

function closeModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.add('hide');
  document.onkeydown = null;
}

function closeModalWrap() {
  this.classList.add('hide');
  document.onkeydown = null;
}



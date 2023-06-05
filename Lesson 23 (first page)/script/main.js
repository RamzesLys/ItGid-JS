document.addEventListener(`DOMContentLoaded`, function () {
  let elems = document.querySelectorAll('.datepicker');
  let instances = M.Datepicker.init(elems, {
    "format": "yyyy-mm-dd"
  });
});

document.querySelectorAll('.modal-show').forEach(function(element) {
  element.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach(function (element) {
  //закриваємо вікно по кнопці
  element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
  // закриваємо вікно на сірій зоні
 element.onclick = closeModal;
});

function showModal() {
  let modalId = this.dataset.modal;
  document.querySelector(modalId).classList.remove('hide');
  document.onkeydown = function (event) {
   if (event.code == 'Escape') {
    closeModal();
      
    }
  }
}

function closeModal() {

  document.querySelectorAll('.modal-wrap').forEach(function (element) {
  element.classList.add('hide');
});
  document.onkeydown = null;
}

document.querySelector('#log-in .modal-project').onclick = function(event) {
  event.stopPropagation();
}

document.querySelector('#sign-up .modal-project').onclick = function(event) {
  event.stopPropagation();
}

document.querySelector('.read-rules').onclick = () => {
  document.querySelector('.form-slider').style.marginLeft = '-345px'; 
}

// document.querySelector('.read-rules-back').onclick = () => {
//   document.querySelector('.form-slider').style.marginLeft = '0'; 
// }

document.querySelectorAll('.read-rules-back').forEach((element) => {
  element.onclick = () => {
    document.querySelector('.form-slider').style.marginLeft = '0';
  }
})

document.querySelector('#agree-rules').onchange = function () {
  if (this.checked) {
   document.querySelector('#signup-submit').classList.remove('disabled');
  } else {
    document.querySelector('#signup-submit').classList.add('disabled');
  }
}




// document.querySelectorAll('.modal-wrap').forEach(function (element) {
//   element.classList.add('hide');
//   document.onkeydown = null;
// });
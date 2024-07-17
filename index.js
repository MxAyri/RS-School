// DROPDOWN

let flag = 0;

function openNav() {
  if (flag === 0) {
    document.getElementById("dpd").style.width = "100%";
    document.getElementById("dropdown-btn").style.transform = "rotate(90deg)";
    document.getElementById("dropdown").style.width = "320px";
    document.body.style.overflowY = "hidden";
    flag = 1;
  } else {
    document.getElementById("dpd").style.width = "0%";
    document.getElementById("dropdown-btn").style.transform = "rotate(0deg)";
    document.getElementById("dropdown").style.width = "0px";
    document.body.style.overflowY = "scroll";
    flag = 0;
  }
}

let dpdClose = document.getElementById("dpd");

window.onclick = function (event) {
  if (event.target == dpdClose) {
    document.getElementById("dpd").style.width = "0%";
    document.getElementById("dropdown-btn").style.transform = "rotate(0deg)";
    document.getElementById("dropdown").style.width = "0px";
    document.body.style.overflowY = "scroll";
    flag = 0;
  }
};

// MODAL

const btns = document.querySelectorAll('#cardBtn');
const modalOverlay = document.querySelector('.modal');
const modals = document.querySelectorAll('.modal-content');
let close = document.querySelectorAll(".close");


btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    document.body.style.overflowY = "hidden";
  });
});

close.forEach(button => {
  button.onclick = function () {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    document.body.style.overflowY = "scroll";
  };
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
    });
    document.body.style.overflowY = "scroll";
  }
});





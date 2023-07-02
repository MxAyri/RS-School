// NAV BAR//

let flag=0;

function openNav() {
    if (flag === 0){
        document.getElementById("blNav").style.width = "100%";
        document.getElementById("myNav").style.width = "320px";
        document.getElementById("idnavb").style.transform = "rotate(-90deg)";
        document.body.style.overflowY = "hidden";
        flag = 1;
    }
    else{   
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("blNav").style.width = "0%";
        document.getElementById("idnavb").style.transform = "rotate(0deg)";
        flag = 0;
        document.body.style.overflowY = "scroll";
    }
}
///////////
// Get the modal
const btns = document.querySelectorAll('.modalbtn');
const modalOverlay = document.querySelector('#modalbar');
const modals = document.querySelectorAll('.modalall');
let close = document.querySelectorAll(".close");


btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-modal');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-win="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
        document.body.style.overflowY = "hidden";
    });
});

close.forEach(button => {
  button.onclick = function() {
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
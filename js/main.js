"use strict";

// VARIABLES AND DEFAULTS

let navDev; // nav dev modal
let navContact; // nav contact modal


// domListeners();


// LISTENERS

navDev = function () {
    // console.log(`click test`);
    document.querySelector('#container-nav-modal-1-dev').classList.remove('hidden');
    document.querySelector('#container-nav-model-3-contact').classList.add('hidden');
}
document.querySelector('#nav-li-id-1-dev').addEventListener('click', navDev);

navContact = function () {
    // console.log(`click test`);
    document.querySelector('#container-nav-model-3-contact').classList.remove('hidden');
    document.querySelector('#container-nav-modal-1-dev').classList.add('hidden');
}
document.querySelector('#nav-li-id-3-contact').addEventListener('click', navContact);



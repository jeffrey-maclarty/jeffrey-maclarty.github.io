"use strict";

// VARIABLES AND DEFAULTS

let navDev; // nav dev modal
let navDevClose; // nav dev modal close
let navContact; // nav contact modal


domListeners();


// LISTENERS

function domListeners() {
    navDev = function () {
        // console.log(`click test`);
        document.querySelector('#container-nav-modal-1-dev').classList.toggle('hidden');
        document.querySelector('#container-nav-model-3-contact').classList.add('hidden');
    }
    document.querySelector('#nav-li-id-1-dev').addEventListener('click', navDev);

    navDevClose = function () {
        // console.log(`click test`);
        document.querySelector('#container-nav-modal-1-dev').classList.toggle('hidden');
        document.querySelector('#container-nav-modal-1-dev').classList.add('hidden');
    }
    document.querySelector('#nav-dev-close').addEventListener('click', navDevClose);

    navContact = function () {
        // console.log(`click test`);
        document.querySelector('#container-nav-model-3-contact').classList.toggle('hidden');
        document.querySelector('#container-nav-modal-1-dev').classList.add('hidden');
    }
    document.querySelector('#nav-li-id-3-contact').addEventListener('click', navContact);
}
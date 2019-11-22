/*
    This file control the switching of the pictures of the differnt products that are clickable 
    by adding an event listener to each one that changes the target's src attribute to that of the main image
*/

let currentPillow = document.querySelector('.currentPillow');
let pillows = document.querySelectorAll('.pillow');

for(let pillow of pillows) {
    pillow.addEventListener('click' , () => {
        currentPillow.setAttribute('src', pillow.getAttribute('src'));
    });
}
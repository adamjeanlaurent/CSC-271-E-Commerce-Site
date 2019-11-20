let currentPillow = document.querySelector('.currentPillow');
let pillows = document.querySelectorAll('.pillow');

for(let pillow of pillows) {
    pillow.addEventListener('click' , () => {
        currentPillow.setAttribute('src', pillow.getAttribute('src'));
    });
}
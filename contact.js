let thumbsUp1 = document.querySelector('.tu1');
let thumbsUp2 = document.querySelector('.tu2');
let thumbsUp3 = document.querySelector('.tu3');
let thumbsUp4 = document.querySelector('.tu4');
let thumbsUp5 = document.querySelector('.tu5');

let form = document.querySelector('form');

thumbsUp1.addEventListener('click', () => {
    thumbsUp1.style.color = 'green';
    thumbsUp2.style.color = 'black';
    thumbsUp3.style.color = 'black';
    thumbsUp4.style.color = 'black';
    thumbsUp5.style.color = 'black';
});

thumbsUp2.addEventListener('click', () => {
    thumbsUp1.style.color = 'green';
    thumbsUp2.style.color = 'green';
    thumbsUp3.style.color = 'black';
    thumbsUp4.style.color = 'black';
    thumbsUp5.style.color = 'black';
});

thumbsUp3.addEventListener('click', () => {
    thumbsUp1.style.color = 'green';
    thumbsUp2.style.color = 'green';
    thumbsUp3.style.color = 'green';
    thumbsUp4.style.color = 'black';
    thumbsUp5.style.color = 'black';
});

thumbsUp4.addEventListener('click', () => {
    thumbsUp1.style.color = 'green';
    thumbsUp2.style.color = 'green';
    thumbsUp3.style.color = 'green';
    thumbsUp4.style.color = 'green';
    thumbsUp5.style.color = 'black';
});

thumbsUp5.addEventListener('click', () => {
    thumbsUp1.style.color = 'green';
    thumbsUp2.style.color = 'green';
    thumbsUp3.style.color = 'green';
    thumbsUp4.style.color = 'green';
    thumbsUp5.style.color = 'green';
});


let opacity = 0;
let timeInterval = 0;

// fade in animation
function fadeIn() {
    timeInterval = setInterval(show,20);
}

// slowly increases the opacity of the body
function show() {
    opacity = Number(window.getComputedStyle(form).getPropertyValue('opacity'));
    if(opacity < 1){
        // edit the + [value] to change rate at which the body fades in 
        opacity = opacity + 0.007;
        form.style.opacity = opacity;
    }
    else {
        clearInterval(timeInterval);
    }
}

form.style.opacity = 0;
fadeIn();
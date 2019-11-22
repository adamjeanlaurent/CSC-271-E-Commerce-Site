// const txt = document.querySelector('.txt');
// const icc = document.querySelector('.icc');
// const slider = document.querySelector('.slider');
// const headline = document.querySelector('.headline');
// const menn = document.querySelector('.menn');

// const tl = new TimelineMax();

// tl.fromTo(pop, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
//     .fromTo(pop, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
//     .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2")
//     .fromTo(txt, 0.5, {y:"50",opacity: 0 }, { opacity: 1, y: 0 }, "-=0.5")
//     .fromTo(name, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
//     .fromTo(menn, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
document.querySelector("header").style.display = "none";
document.querySelector(".container-fluid").style.display = "none";
document.querySelector(".container").style.display = "none";
document.querySelector(".haha").style.display = "none";
document.querySelector("#footer").style.display = "none";
document.getElementById("load").classList.add(".loader");




setTimeout(() => {
    document.getElementById("load").classList.remove(".loader");
    document.querySelector("header").style.display = "block";
    document.querySelector(".container-fluid").style.display = "block";
    document.querySelector(".container").style.display = "block";
    document.querySelector("#footer").style.display = "block";
    document.querySelector(".haha").style.display = "block";

    document.querySelector(".ans").style.display = "none";

}, 2000);
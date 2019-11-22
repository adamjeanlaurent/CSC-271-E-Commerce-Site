//make everything disappear and load the loading anmation
document.querySelector("header").style.display = "none";
document.querySelector(".container-fluid").style.display = "none";
document.querySelector(".container").style.display = "none";
document.querySelector(".haha").style.display = "none";
document.querySelector("#footer").style.display = "none";
document.getElementById("load").classList.add(".loader");



//after loading make everything back and make loading anmation to be none
setTimeout(() => {
    document.getElementById("load").classList.remove(".loader");
    document.querySelector("header").style.display = "block";
    document.querySelector(".container-fluid").style.display = "block";
    document.querySelector(".container").style.display = "block";
    document.querySelector("#footer").style.display = "block";
    document.querySelector(".haha").style.display = "block";
    document.querySelector(".ans").style.display = "none";

}, 2000);
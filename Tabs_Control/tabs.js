const toyota = document.querySelector(".Toyota");
const honda = document.querySelector(".Honda");
const mazda = document.querySelector(".Mazda");

const dpToyota = document.querySelector(".Toyota-car");
const dpHonda = document.querySelector(".Honda-car");
const dpMazda = document.querySelector(".Mazda-car");

dpToyota.style.display = "none";
dpHonda.style.display = "none";
dpMazda.style.display = "none";


toyota.addEventListener("click", function(){
    dpToyota.style.display = "block";
    dpHonda.style.display = "none";
    dpMazda.style.display = "none";
})

honda.addEventListener("click", function(){
    dpHonda.style.display = "block";
    dpToyota.style.display = "none";
    dpMazda.style.display = "none";
})

mazda.addEventListener("click", function(){
    dpMazda.style.display = "block";
    dpToyota.style.display = "none";
    dpHonda.style.display = "none";
})


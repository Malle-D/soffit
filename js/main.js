var elHeader = document.querySelector(".header");
let elBtn = document.querySelector(".header__button");
let elBody = document.querySelector("body");

elBtn.addEventListener('click', function(){
    elHeader.classList.toggle("header--opener");
    elBody.classList.toggle("body--add");
})



var elHeader = document.querySelector(".header");
let elBtn = document.querySelector(".header__button");

elBtn.addEventListener('click', function(){
    elHeader.classList.toggle("header--opener");
})



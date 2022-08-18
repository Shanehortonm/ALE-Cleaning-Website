window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("", window.scrollY > 0);
})

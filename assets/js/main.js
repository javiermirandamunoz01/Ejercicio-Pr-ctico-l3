
const btn = document.getElementById("btnArriba");


window.onscroll = function() {
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block"; 
    } else {
        btn.style.display = "none";  
    }
};


btn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 
    });
});




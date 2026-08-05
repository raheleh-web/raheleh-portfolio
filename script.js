const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light");

});
const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll", function(){

    reveals.forEach(function(item){

        let windowHeight = window.innerHeight;
        let revealTop = item.getBoundingClientRect().top;
        let revealPoint = 100;


        if(revealTop < windowHeight - revealPoint){
            item.classList.add("active");
        }

    });

});
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const information=document.querySelector("p");
plus.addEventListener("click",function(e) {
    minus.style.display="block";
    plus.style.display="none";
    information.style.display="block";

    });


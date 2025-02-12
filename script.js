const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
const information = document.querySelectorAll(".info");

information[0].style.display = "block";
minus[0].style.display = "block"; 
plus[0].style.display = "none"; 

plus.forEach((pluss, index) => {
    pluss.addEventListener("click", function(e) {
        e.preventDefault();

        
        minus[index].style.display = "block";
        information[index].style.display = "block";

        
        pluss.style.display = "none";
    });
});

minus.forEach((minuss, index) => {
    minuss.addEventListener("click", function(e) {
        e.preventDefault();

        
        
        plus[index].style.display = "block";

        
        
        minuss.style.display = "none";
        information[index].style.display = "none";
    });
});

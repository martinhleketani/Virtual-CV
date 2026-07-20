// ================================
// Martin Chabalala Portfolio
// script.js
// ================================


// Smooth scrolling for navigation links

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Highlight active navigation link while scrolling

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");


window.addEventListener("scroll", () => {

    let current = "";


    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;


        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.id;

        }

    });



    navLinks.forEach(link => {

        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });


});





// Fade-in animation when scrolling


const observer = new IntersectionObserver(entries => {


    entries.forEach(entry => {


        if(entry.isIntersecting){


            entry.target.classList.add("show");


        }


    });


},
{
    threshold:0.15
});



document.querySelectorAll("section").forEach(section => {


    section.classList.add("hidden");

    observer.observe(section);


});







// Back To Top Button


const topButton = document.createElement("button");


topButton.innerHTML = "↑";

topButton.id = "topBtn";


document.body.appendChild(topButton);




window.addEventListener("scroll", () => {


    if(window.scrollY > 400){

        topButton.style.display = "block";

    }

    else{

        topButton.style.display = "none";

    }


});





topButton.addEventListener("click", () => {


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});







// Download CV button tracking

const cvButton = document.querySelector(
    'a[href="Martin_Chabalala_CV_Updated.pdf"]'
);


if(cvButton){


    cvButton.addEventListener("click",()=>{

        console.log("CV downloaded");

    });


}

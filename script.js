// =========================
// Smooth Scrolling
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// =========================
// Download CV
// =========================

const cvButton = document.querySelector('a[href="Martin_Chabalala_CV.pdf"]');

if (cvButton) {

    cvButton.addEventListener("click", function () {

        console.log("Downloading CV...");

    });

}


// =========================
// Fade In Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    observer.observe(section);

});

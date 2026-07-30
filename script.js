// =========================
// Smooth Scrolling
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

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
// Download CV Message
// =========================

const cvButton = document.querySelector('a[href="Martin_Chabalala_CV.pdf"]');

if (cvButton) {

    cvButton.addEventListener("click", function() {

        console.log("Downloading CV...");

    });

}


// =========================
// Fade In Animation
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

sections.forEach(function(section) {

    observer.observe(section);

});


// =========================
// Active Navigation Link
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// =========================
// Current Year in Footer
// =========================

const footer = document.querySelector("footer p");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `© ${year} Martin Chabalala | Aspiring Data Analyst`;

}

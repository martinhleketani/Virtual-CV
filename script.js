// =========================
// Smooth Navigation
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================
// CV Download
// =========================

const cvButton =
    document.querySelector('a[href="Martin_Chabalala_CV.pdf"]');

if (cvButton) {

    cvButton.addEventListener("click", function () {

        console.log("Downloading Martin Chabalala CV");

    });

}


// =========================
// Fade-In Sections
// =========================

const sections =
    document.querySelectorAll("section:not(.hero)");

const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.12
        }

    );

sections.forEach(function (section) {

    observer.observe(section);

});


// =========================
// Active Navigation Link
// =========================

const navLinks =
    document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", function () {

    let currentSection = "home";

    const pageSections =
        document.querySelectorAll("header[id], section[id]");

    pageSections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// =========================
// Current Year Footer
// =========================

const footer =
    document.getElementById("footer-text");

if (footer) {

    const currentYear =
        new Date().getFullYear();

    footer.textContent =
        `© ${currentYear} Martin Chabalala | Graduate / Junior Software Developer`;

}

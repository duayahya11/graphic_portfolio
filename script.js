/* =====================================================
   DUA YAHYA - PORTFOLIO JAVASCRIPT
===================================================== */


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close mobile menu when a link is clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================= NAVBAR SCROLL ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 30px rgba(85, 37, 66, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* ================= PORTFOLIO FILTER ================= */

const filterButtons =
    document.querySelectorAll(".filter");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        /* Add active state */

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        portfolioItems.forEach(item => {

            const category =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                item.style.display = "block";

                item.style.animation =
                    "fadeIn 0.5s ease both";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ================= LIGHTBOX ================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const lightboxDescription =
    document.getElementById("lightboxDescription");

const lightboxClose =
    document.getElementById("lightboxClose");


/* Open lightbox */

portfolioItems.forEach(item => {

    item.addEventListener("click", () => {

        const image =
            item.querySelector("img");

        const title =
            item.getAttribute("data-title");

        const description =
            item.getAttribute("data-description");

        const category =
            item.querySelector(
                ".portfolio-overlay span"
            ).textContent;


        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightboxTitle.textContent = title;

        lightboxDescription.textContent =
            description;

        lightboxCategory.textContent =
            category;


        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close lightbox */

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* Close when clicking outside image */

lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* Close using ESC */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        lightbox.classList.contains("active")
    ) {

        closeLightbox();

    }

});
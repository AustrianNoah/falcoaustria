document.addEventListener("DOMContentLoaded", () => {

    /*
     * Scroll Reveal
     */

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /*
     * Mobile Navigation
     */

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".navbar nav");

    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");

        });

    }


    /*
     * Close mobile navigation after clicking a link
     */

    document.querySelectorAll(".navbar nav a").forEach((link) => {

        link.addEventListener("click", () => {

            nav?.classList.remove("mobile-open");

        });

    });


    /*
     * Navbar background while scrolling
     */

    const navbar = document.querySelector(".navbar");

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 50) {

                navbar.style.background = "rgba(8, 8, 8, 0.92)";

            } else {

                navbar.style.background = "rgba(8, 8, 8, 0.65)";

            }

        },
        {
            passive: true
        }
    );


    /*
     * Smooth parallax effect for the hero
     */

    const heroBackground = document.querySelector(".hero-background");

    window.addEventListener(
        "scroll",
        () => {

            if (!heroBackground) return;

            const scrollPosition = window.scrollY;

            if (scrollPosition < window.innerHeight) {

                heroBackground.style.transform =
                    `translateY(${scrollPosition * 0.15}px)`;

            }

        },
        {
            passive: true
        }
    );

});
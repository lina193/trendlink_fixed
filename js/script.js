// ==========================================
// TRENDLINK SCRIPT
// Modern Affiliate Website
// ==========================================

// ================================
// LOADER
// ================================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);
});


// ================================
// MOBILE NAVBAR TOGGLE
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ================================
// AUTO CLOSE MENU (MOBILE)
// ================================

document.querySelectorAll(".nav-links a")
.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ================================
// FADE-IN ANIMATION ON SCROLL
// ================================

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

fadeElements.forEach(el => {
    observer.observe(el);
});


// ================================
// SEARCH FILTER
// ================================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const searchValue = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchValue) || description.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

});


// ================================
// CATEGORY FILTER — pakai data-kategori
// ================================

const categoryButtons = document.querySelectorAll(".kategori-btn");
const productCards = document.querySelectorAll(".product-card");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        categoryButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const selectedCategory = button.getAttribute("data-kategori");

        productCards.forEach(card => {
            const cardCategory = card.getAttribute("data-kategori");

            if (selectedCategory === "Semua" || cardCategory === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

    });

});


// ================================
// NAVBAR BACKGROUND ON SCROLL
// ================================

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(5,5,5,0.95)";
    } else {
        navbar.style.background = "rgba(10,10,10,0.80)";
    }
});


// ================================
// BUTTON HOVER EFFECT
// ================================

const buttons = document.querySelectorAll(".buy-btn, .hero-btn");

buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-3px)";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0px)";
    });
});


// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// ==========================================
// END SCRIPT
// ==========================================

// ===== Navbar Active Link Highlight =====
const navLinks1 = document.querySelectorAll(".nav-link");

navLinks1.forEach(link => {
    link.addEventListener("click", () => {
        navLinks1.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});

// Auto close navbar on link click (mobile)
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navbarCollapse).hide();
        }
    });
});

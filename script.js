        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
                
                // Update active link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', e => {
            e.preventDefault();
            alert('¡Mensaje enviado! Te contactaré pronto.');
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1
}
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("loginModal");

loginBtn.onclick = () => {
    loginModal.style.display = "flex";
};

closeModal.onclick = () => {
    loginModal.style.display = "none";
};

window.onclick = (e) => {
    if(e.target === loginModal) {
        loginModal.style.display = "none";
    }
};
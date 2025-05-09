// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true
});

// Particles effect
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.querySelector('.particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);
    }
});

// Handle all "Start Free Trial" buttons
document.querySelectorAll('.btn-gradient').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#signup') {
            // Show signup modal or redirect to signup page
            alert('Starting your free trial! Redirecting to signup...');
            // You can replace this with actual signup logic
            window.location.href = '#login';
        }
    });
});

// Handle pricing plan buttons
document.querySelectorAll('.pricing-card .btn-gradient').forEach(button => {
    button.addEventListener('click', function() {
        const plan = this.closest('.pricing-card').querySelector('h3').textContent;
        alert(`Selected ${plan} plan! Redirecting to signup...`);
        window.location.href = '#login';
    });
});

// Password strength meter
const passwordInput = document.getElementById('password');
const strengthMeter = document.querySelector('.strength-meter');
const strengthText = document.querySelector('.strength-text');

passwordInput.addEventListener('input', function() {
    const password = this.value;
    let strength = 0;
    
    if (password.length >= 8) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[^a-zA-Z0-9]+/)) strength += 1;
    
    const strengthLevels = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
    const colors = ['#ff4444', '#ffbb33', '#ffeb3b', '#00C851', '#007E33'];
    
    strengthMeter.style.width = (strength * 20) + '%';
    strengthMeter.style.backgroundColor = colors[strength - 1];
    strengthText.textContent = 'Password strength: ' + strengthLevels[strength - 1];
});

// Billing toggle
const billingToggle = document.getElementById('billingToggle');
const prices = document.querySelectorAll('.price');

billingToggle.addEventListener('change', function() {
    const isAnnual = this.checked;
    prices.forEach(price => {
        const amount = price.textContent.split('$')[1].split('/')[0];
        const newAmount = isAnnual ? (amount * 0.8).toFixed(0) : amount;
        price.innerHTML = `$${newAmount}<span>/${isAnnual ? 'year' : 'month'}</span>`;
    });
});

// Stealth mode toggle
const stealthToggle = document.getElementById('stealthToggle');
const toggleLabel = document.querySelector('.toggle-label');

stealthToggle.addEventListener('change', function() {
    const isHumanMode = this.checked;
    toggleLabel.textContent = isHumanMode ? 'Human Mode' : 'Bot Mode';
    toggleLabel.style.color = isHumanMode ? '#4CAF50' : '#ff4444';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email && password) {
        alert('Login successful! Redirecting to dashboard...');
        // You can replace this with actual login logic
        window.location.href = '#dashboard';
    } else {
        alert('Please fill in all fields');
    }
});

// Social auth buttons
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.classList.contains('btn-google') ? 'Google' : 'Facebook';
        alert(`Logging in with ${provider}...`);
        // You can replace this with actual social auth logic
        window.location.href = '#dashboard';
    });
});

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    } else {
        alert('Please enter your email address');
    }
});

// Mobile menu handling
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function() {
    navbarCollapse.classList.toggle('show');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
        navbarCollapse.classList.remove('show');
    }
});

// Add hover effect to pricing cards
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Add CSS for particles
const style = document.createElement('style');
style.textContent = `
    .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: float linear infinite;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 
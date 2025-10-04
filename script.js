// Scroll and Animation Logic
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Add scrolled class to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for navigation links
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
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards for scroll animations
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe skill categories
    document.querySelectorAll('.skill-category').forEach(skill => {
        skill.style.opacity = '0';
        skill.style.transform = 'translateY(50px)';
        skill.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(skill);
    });
    
    // Hide scroll indicator when scrolling down
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
    
    // Fade overlay on scroll for smooth transition
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroOverlay = document.querySelector('.hero-overlay');
        
        if (scrolled < window.innerHeight) {
            const scrollProgress = Math.min(scrolled / window.innerHeight, 1);
            const opacity = 0.7 + scrollProgress * 0.3;
            heroOverlay.style.background = `linear-gradient(135deg, rgba(0, 0, 0, ${opacity}) 0%, rgba(0, 0, 0, ${opacity - 0.3}) 100%)`;
        }
    });
    
    // Dynamic project card hover effect
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Ensure images are visible immediately
    document.querySelectorAll('.project-image img').forEach(img => {
        img.style.opacity = '1';
    });
    
    // Console easter egg
    console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #00ff88;');
    console.log('%c¿Curioseando el código? Me gusta tu estilo 😎', 'font-size: 14px; color: #0088ff;');
    console.log('%cSi quieres trabajar juntos, ¡contáctame!', 'font-size: 12px; color: #a0a0a0;');
});

// Preload video for better performance
window.addEventListener('load', function() {
    const video = document.getElementById('bgVideo');
    video.load();
});

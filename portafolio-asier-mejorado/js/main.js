// ===== MAIN JAVASCRIPT FILE =====

document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeScrollAnimations();
    initializeBackToTop();
    initializeSmoothScrolling();
    initializeNavbarScroll();
});

// ===== NAVIGATION =====
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    document.addEventListener('click', function (e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function initializeNavbarScroll() {
    const navbar = document.getElementById('main-nav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        navbar.classList.toggle('scrolled', scrollTop > 50);
        navbar.style.transform = (scrollTop > lastScrollTop && scrollTop > 100) ? 'translateY(-100%)' : 'translateY(0)';
        lastScrollTop = scrollTop;
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const navHeight = document.getElementById('main-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll(`
        /* Portfolio general */
        .section-header,
        .about-content > *,
        .skill-category,
        .project-card,
        .other-project-card,
        .contact-content > *,

        /* Casos de estudio */
        .content-section,
        .content-section > *,
        .content-text > *,
        .content-stats > *,
        .challenge-list li,
        .challenge-card,
        .timeline-item,
        .tech-item,
        .feature-card,
        .metric-card,
        .learning-item,
        .results-content > *,
        .cta-content > *
    `);

    animatedElements.forEach(el => {
        el.classList.add('scroll-hidden'); // oculto al principio
        observer.observe(el); // se observa
    });
}


// ===== BACK TO TOP BUTTON =====
function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            backToTopButton.classList.toggle('visible', window.pageYOffset > 300);
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}


// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ===== PERFORMANCE OPTIMIZATIONS =====

// Optimize scroll events with throttling
const optimizedScrollHandler = throttle(function () {
    // Handle scroll-based animations or effects here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Optimize resize events with debouncing
const optimizedResizeHandler = debounce(function () {
    // Handle resize-based layout adjustments here
}, 250);

window.addEventListener('resize', optimizedResizeHandler);

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Handle keyboard navigation
document.addEventListener('keydown', function (e) {
    // Skip to main content with Tab key
    if (e.key === 'Tab' && !e.shiftKey && document.activeElement === document.body) {
        const mainContent = document.querySelector('main') || document.querySelector('#inicio');
        if (mainContent) {
            mainContent.focus();
        }
    }
});

// Announce dynamic content changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ===== ERROR HANDLING =====

// Global error handler
window.addEventListener('error', function (e) {
    console.error('JavaScript error:', e.error);
    // You could send error reports to a logging service here
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function (e) {
    console.error('Unhandled promise rejection:', e.reason);
    // You could send error reports to a logging service here
});

// ===== ANALYTICS (Optional) =====

// Track user interactions for analytics
function trackEvent(category, action, label) {
    // Google Analytics 4 example
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }

    // Console log for development
    console.log('Event tracked:', { category, action, label });
}

// Track form submissions
document.addEventListener('submit', function (e) {
    if (e.target.id === 'contact-form') {
        trackEvent('Contact', 'Form Submit', 'Contact Form');
    }
});

// Track external link clicks
document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname) {
        trackEvent('External Link', 'Click', link.href);
    }
});

// Track project link clicks
document.addEventListener('click', function (e) {
    const projectLink = e.target.closest('.project-link, .btn[href*="projects/"]');
    if (projectLink) {
        const projectName = projectLink.closest('.project-card, .other-project-card')
            ?.querySelector('.project-title')?.textContent || 'Unknown Project';
        trackEvent('Project', 'View Details', projectName);
    }
});

// ===== CONSOLE WELCOME MESSAGE =====
console.log(`
🚀 Portafolio de Asier Rodríguez
📧 asier.rodriguez18@gmail.com
💼 Desarrollador Web Frontend

¡Gracias por visitar mi portafolio!
Si tienes alguna pregunta o propuesta, no dudes en contactarme.
`);

// ===== EXPORT FOR TESTING (if needed) =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateField,
        isValidEmail,
        debounce,
        throttle,
        isInViewport
    };
}


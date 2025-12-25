/* ===================================
   Rapid Recovery: Elite Training Center - JavaScript
   =================================== */

   document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navMobile = document.getElementById('navMobile');
    const presaleModal = document.getElementById('presaleModal');
    const presaleModalClose = document.getElementById('presaleModalClose');
    const presaleBtn = document.getElementById('presaleBtn');
    const presaleForm = document.getElementById('presaleForm');
    const businessModal = document.getElementById('businessModal');
    const businessModalClose = document.getElementById('businessModalClose');
    const businessModalDismiss = document.getElementById('businessModalDismiss');
    const businessLearnMore = document.getElementById('businessLearnMore');
    const reveals = document.querySelectorAll('.reveal');
    const heroVideo = document.getElementById('heroVideo');
    const backToTop = document.getElementById('backToTop');

    let previouslyFocused = null;

    // ===================================
    // Smooth Scrolling
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's a modal trigger
            if (targetId === '#presale-modal') {
                return;
            }
            
            e.preventDefault();
            const target = document.querySelector(targetId);
            
            if (target) {
                // Close mobile menu if open
                closeMobileMenu();
                
                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Set focus for accessibility
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }
        });
    });

    // ===================================
    // Navigation Scroll Effect
    // ===================================
    function handleNavScroll() {
        nav.classList.toggle('scrolled', window.pageYOffset > 100);
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });

    // ===================================
    // Mobile Menu
    // ===================================
    function openMobileMenu() {
        navMobile.classList.add('active');
        navToggle.setAttribute('aria-expanded', 'true');
        navMobile.setAttribute('aria-hidden', 'false');
        navMobile.querySelector('a').focus();
    }

    function closeMobileMenu() {
        navMobile.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
    }

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Close mobile menu when clicking a link
    navMobile.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // ===================================
    // Back to Top Button
    // ===================================
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // Keyboard Navigation
    // ===================================
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Close mobile menu
            if (navMobile.classList.contains('active')) {
                closeMobileMenu();
                navToggle.focus();
            }
            
            // Close presale modal
            if (presaleModal && presaleModal.classList.contains('active')) {
                closePresaleModal();
            }

            // Close business modal
            if (businessModal && businessModal.classList.contains('active')) {
                closeBusinessModal();
            }
        }
    });

    // ===================================
    // Scroll Reveal Animation
    // ===================================
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 120;

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    // Staggered reveal for grid items
    function setupStaggeredReveal() {
        const grids = document.querySelectorAll('.membership-cards, .features-grid, .recovery-grid, .pass-grid');
        
        grids.forEach(grid => {
            const items = grid.querySelectorAll('.reveal');
            items.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
            });
        });
    }

    window.addEventListener('scroll', checkReveal, { passive: true });
    window.addEventListener('load', checkReveal);
    setupStaggeredReveal();

    // ===================================
    // Parallax Effect (Desktop Only)
    // ===================================
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 
                     window.matchMedia('(hover: none)').matches;

    if (!prefersReducedMotion && !isMobile) {
        const heroBg = document.querySelector('.hero-bg');
        
        if (heroBg) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                
                if (scrolled < window.innerHeight) {
                    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
                }
            }, { passive: true });
        }
    }

    // ===================================
    // Hero Video Handling
    // ===================================
    if (heroVideo) {
        // Pause video when out of view for performance
        const heroSection = document.querySelector('.hero');
        
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play().catch(() => {
                        // Autoplay was prevented, that's okay
                    });
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.25 });

        if (heroSection) {
            videoObserver.observe(heroSection);
        }

        // Fallback for mobile - pause video and show poster
        if (isMobile) {
            heroVideo.pause();
            heroVideo.currentTime = 0;
        }
    }

    // ===================================
    // Presale Modal Functions
    // ===================================
    function openPresaleModal() {
        if (!presaleModal) return;
        
        previouslyFocused = document.activeElement;
        presaleModal.classList.add('active');
        presaleModal.setAttribute('aria-hidden', 'false');
        
        const accessCodeInput = document.getElementById('accessCode');
        if (accessCodeInput) {
            accessCodeInput.focus();
        }
        
        document.body.style.overflow = 'hidden';
    }

    function closePresaleModal() {
        if (!presaleModal) return;
        
        presaleModal.classList.remove('active');
        presaleModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        if (previouslyFocused) {
            previouslyFocused.focus();
        }
    }

    // Presale button click
    if (presaleBtn) {
        presaleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openPresaleModal();
        });
    }

    // Close presale modal events
    if (presaleModalClose) {
        presaleModalClose.addEventListener('click', closePresaleModal);
    }

    if (presaleModal) {
        presaleModal.addEventListener('click', (e) => {
            if (e.target === presaleModal) {
                closePresaleModal();
            }
        });

        // Focus trap in modal
        presaleModal.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;

            const focusableElements = presaleModal.querySelectorAll('button, input, a[href]');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        });
    }

    // Handle presale form submission
    if (presaleForm) {
        presaleForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const accessCode = document.getElementById('accessCode').value;
            
            // Log access code (replace with actual validation later)
            console.log('Presale access code:', accessCode);
            
            // Here you would validate the code and redirect to Gym Master
            // For now, just close the modal
            alert('Access code validated! Redirecting to presale...');
            closePresaleModal();
            presaleForm.reset();
        });
    }

    // ===================================
    // Business Owner Modal Functions
    // ===================================
    function openBusinessModal() {
        if (!businessModal) return;
        
        previouslyFocused = document.activeElement;
        businessModal.classList.add('active');
        businessModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeBusinessModal() {
        if (!businessModal) return;
        
        businessModal.classList.remove('active');
        businessModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        
        if (previouslyFocused) {
            previouslyFocused.focus();
        }
    }

    // Show business modal after 5 seconds (only once per session)
    const hasSeenBusinessModal = sessionStorage.getItem('hasSeenBusinessModal');
    if (!hasSeenBusinessModal) {
        setTimeout(() => {
            openBusinessModal();
            sessionStorage.setItem('hasSeenBusinessModal', 'true');
        }, 5000);
    }

    // Close business modal events
    if (businessModalClose) {
        businessModalClose.addEventListener('click', closeBusinessModal);
    }

    if (businessModalDismiss) {
        businessModalDismiss.addEventListener('click', closeBusinessModal);
    }

    if (businessLearnMore) {
        businessLearnMore.addEventListener('click', (e) => {
            e.preventDefault();
            closeBusinessModal();
            
            // Scroll to member business section
            const businessSection = document.getElementById('member-business');
            if (businessSection) {
                businessSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    if (businessModal) {
        businessModal.addEventListener('click', (e) => {
            if (e.target === businessModal) {
                closeBusinessModal();
            }
        });

        // Focus trap in modal
        businessModal.addEventListener('keydown', (e) => {
            if (e.key !== 'Tab') return;

            const focusableElements = businessModal.querySelectorAll('button, a[href]');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        });
    }

    // ===================================
    // Cookie Notice
    // ===================================
    const cookieNotice = document.getElementById('cookieNotice');
    const cookieAccept = document.getElementById('cookieAccept');

    // Check if user has already accepted cookies
    function checkCookieConsent() {
        const cookieConsent = localStorage.getItem('cookieConsent');
        
        if (!cookieConsent && cookieNotice) {
            // Show cookie notice after 1 second
            setTimeout(() => {
                cookieNotice.classList.add('show');
            }, 1000);
        }
    }

    // Accept cookies
    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieNotice.classList.remove('show');
            
            // Remove from DOM after transition
            setTimeout(() => {
                cookieNotice.style.display = 'none';
            }, 400);
        });
    }

    // Initialize cookie notice
    checkCookieConsent();

    // ===================================
    // Contact Form Handling
    // ===================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Log form data (replace with actual API call later)
            console.log('Contact form submission:', data);
            
            // Reset form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
        });
    }
});

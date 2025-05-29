// Additional animations and responsive enhancements for Easy Link Wi-Fi
// This file adds extra animations, responsive features, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Add animated wave effect to headers
    const headers = document.querySelectorAll('header, .page-header');
    headers.forEach(header => {
        // Create wave container
        const waveContainer = document.createElement('div');
        waveContainer.className = 'wave-container';
        
        // Create multiple waves for layered effect
        for (let i = 1; i <= 3; i++) {
            const wave = document.createElement('div');
            wave.className = `wave wave-${i}`;
            waveContainer.appendChild(wave);
        }
        
        // Add waves to header
        if (header.classList.contains('page-header')) {
            // For page headers, add after the background slider
            const backgroundSlider = header.querySelector('.background-slider');
            if (backgroundSlider) {
                header.insertBefore(waveContainer, backgroundSlider.nextSibling);
            } else {
                header.insertBefore(waveContainer, header.firstChild.nextSibling);
            }
        } else {
            // For main header, add at the end
            header.appendChild(waveContainer);
        }
    });

    // Add floating elements animation
    const addFloatingAnimation = () => {
        const elements = document.querySelectorAll('.feature-card, .benefit-card, .detail-card, .method-card');
        elements.forEach(element => {
            element.classList.add('floating-animation');
            
            // Add random animation delay for more natural effect
            const delay = Math.random() * 2;
            element.style.animationDelay = `${delay}s`;
        });
    };
    
    addFloatingAnimation();

    // Add scroll-triggered animations for sections
    const addScrollAnimations = () => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('section-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        sections.forEach(section => {
            section.classList.add('section-animate');
            observer.observe(section);
        });
    };
    
    addScrollAnimations();

    // Add dynamic background gradient animation to specific sections
    const addGradientBackgrounds = () => {
        const sections = document.querySelectorAll('.cta-section, .hero, .newsletter, .share-experience');
        
        sections.forEach(section => {
            section.classList.add('animated-gradient-bg');
        });
    };
    
    addGradientBackgrounds();

    // Add interactive hover effects to buttons
    const enhanceButtons = () => {
        const buttons = document.querySelectorAll('.btn');
        
        buttons.forEach(button => {
            // Create ripple effect container
            const rippleContainer = document.createElement('span');
            rippleContainer.className = 'ripple-container';
            
            // Wrap button content
            const buttonContent = document.createElement('span');
            buttonContent.className = 'btn-content';
            buttonContent.innerHTML = button.innerHTML;
            
            // Clear button and add new elements
            button.innerHTML = '';
            button.appendChild(buttonContent);
            button.appendChild(rippleContainer);
            
            // Add event listener for ripple effect
            button.addEventListener('click', function(e) {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                
                rippleContainer.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    };
    
    enhanceButtons();

    // Add responsive image loading for better performance
    const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(image => {
            imageObserver.observe(image);
        });
    };
    
    optimizeImages();

    // Add responsive navigation enhancements
    const enhanceNavigation = () => {
        const header = document.querySelector('header');
        const navMenu = document.querySelector('.nav-menu');
        
        // Add dropdown functionality for mobile
        const menuItems = document.querySelectorAll('.nav-menu > li');
        
        menuItems.forEach(item => {
            const link = item.querySelector('a');
            
            // Add indicator for current page
            if (link && link.getAttribute('href') === window.location.pathname.split('/').pop()) {
                link.classList.add('active');
            }
        });
        
        // Add scroll indicator for long pages
        const addScrollProgress = () => {
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);
            
            window.addEventListener('scroll', () => {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrollPercent = (scrollTop / scrollHeight) * 100;
                
                progressBar.style.width = `${scrollPercent}%`;
            });
        };
        
        addScrollProgress();
    };
    
    enhanceNavigation();

    // Add "back to top" button for long pages
    const addBackToTopButton = () => {
        const button = document.createElement('button');
        button.className = 'back-to-top';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(button);
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    addBackToTopButton();

    // Add CSS for new dynamic elements and animations
    const addDynamicStyles = () => {
        const style = document.createElement('style');
        style.textContent = `
            /* Wave animation for headers */
            .wave-container {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 50px;
                overflow: hidden;
                z-index: 2;
            }
            
            .wave {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 200%;
                height: 100%;
                background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18.17 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z" fill="%23ffffff" fill-opacity=".25"/></svg>');
                background-size: 1200px 100%;
                animation: wave-animation 25s linear infinite;
            }
            
            .wave-1 {
                animation-duration: 20s;
                opacity: 0.3;
            }
            
            .wave-2 {
                animation-duration: 15s;
                animation-direction: reverse;
                opacity: 0.2;
                bottom: 5px;
            }
            
            .wave-3 {
                animation-duration: 30s;
                opacity: 0.1;
                bottom: 10px;
            }
            
            @keyframes wave-animation {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(-50%);
                }
            }
            
            /* Floating animation for cards */
            .floating-animation {
                animation: floating 5s ease-in-out infinite;
            }
            
            @keyframes floating {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
                100% {
                    transform: translateY(0);
                }
            }
            
            /* Section animations */
            .section-animate {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.8s ease, transform 0.8s ease;
            }
            
            .section-visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            /* Animated gradient backgrounds */
            .animated-gradient-bg {
                background-size: 400% 400% !important;
                animation: gradient-shift 15s ease infinite !important;
            }
            
            @keyframes gradient-shift {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
            
            /* Button ripple effect */
            .btn {
                position: relative;
                overflow: hidden;
            }
            
            .btn-content {
                position: relative;
                z-index: 1;
            }
            
            .ripple-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 0;
            }
            
            .ripple {
                position: absolute;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.4);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            }
            
            @keyframes ripple-animation {
                0% {
                    width: 0;
                    height: 0;
                    opacity: 0.5;
                }
                100% {
                    width: 500px;
                    height: 500px;
                    opacity: 0;
                }
            }
            
            /* Scroll progress indicator */
            .scroll-progress {
                position: fixed;
                top: 0;
                left: 0;
                height: 3px;
                background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
                z-index: 9999;
                width: 0%;
                transition: width 0.2s ease;
            }
            
            /* Back to top button */
            .back-to-top {
                position: fixed;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                cursor: pointer;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s ease, transform 0.3s ease;
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.2rem;
            }
            
            .back-to-top.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .back-to-top:hover {
                transform: translateY(-5px);
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
            }
            
            /* Enhanced responsive styles */
            @media (max-width: 768px) {
                .wave-container {
                    height: 30px;
                }
                
                .back-to-top {
                    width: 40px;
                    height: 40px;
                    bottom: 20px;
                    right: 20px;
                    font-size: 1rem;
                }
            }
            
            @media (max-width: 480px) {
                .wave-container {
                    height: 20px;
                }
            }
        `;
        
        document.head.appendChild(style);
    };
    
    addDynamicStyles();

    // Add preloader for better user experience
    const addPreloader = () => {
        // Create preloader element
        const preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = `
            <div class="loader">
                <div class="loader-logo">Easy<span>Link</span></div>
                <div class="loader-spinner">
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                </div>
            </div>
        `;
        
        // Add to body
        document.body.appendChild(preloader);
        
        // Add preloader styles
        const style = document.createElement('style');
        style.textContent = `
            .preloader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: white;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.5s ease, visibility 0.5s ease;
            }
            
            .loader {
                text-align: center;
            }
            
            .loader-logo {
                font-family: var(--heading-font);
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 20px;
                color: var(--primary-color);
            }
            
            .loader-logo span {
                color: var(--secondary-color);
            }
            
            .loader-spinner {
                display: flex;
                justify-content: center;
                gap: 10px;
            }
            
            .spinner-dot {
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                animation: dot-pulse 1.5s infinite ease-in-out;
            }
            
            .spinner-dot:nth-child(2) {
                animation-delay: 0.2s;
            }
            
            .spinner-dot:nth-child(3) {
                animation-delay: 0.4s;
            }
            
            @keyframes dot-pulse {
                0%, 100% {
                    transform: scale(0.5);
                    opacity: 0.5;
                }
                50% {
                    transform: scale(1);
                    opacity: 1;
                }
            }
            
            body.loaded .preloader {
                opacity: 0;
                visibility: hidden;
            }
        `;
        
        document.head.appendChild(style);
        
        // Hide preloader when page is fully loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.body.classList.add('loaded');
            }, 500);
        });
    };
    
    addPreloader();

    // Add custom cursor for desktop devices
    const addCustomCursor = () => {
        // Only add on non-touch devices
        if (!('ontouchstart' in window)) {
            // Create cursor elements
            const cursor = document.createElement('div');
            cursor.className = 'custom-cursor';
            
            const cursorDot = document.createElement('div');
            cursorDot.className = 'cursor-dot';
            
            // Add to body
            document.body.appendChild(cursor);
            document.body.appendChild(cursorDot);
            
            // Add cursor styles
            const style = document.createElement('style');
            style.textContent = `
                .custom-cursor {
                    position: fixed;
                    width: 40px;
                    height: 40px;
                    border: 2px solid var(--primary-color);
                    border-radius: 50%;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    z-index: 9999;
                    transition: width 0.3s, height 0.3s, border-color 0.3s;
                    opacity: 0;
                }
                
                .cursor-dot {
                    position: fixed;
                    width: 8px;
                    height: 8px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border-radius: 50%;
                    pointer-events: none;
                    transform: translate(-50%, -50%);
                    z-index: 10000;
                    opacity: 0;
                }
                
                body:hover .custom-cursor,
                body:hover .cursor-dot {
                    opacity: 1;
                }
                
                a:hover ~ .custom-cursor,
                button:hover ~ .custom-cursor,
                .btn:hover ~ .custom-cursor {
                    width: 60px;
                    height: 60px;
                    border-color: var(--secondary-color);
                }
            `;
            
            document.head.appendChild(style);
            
            // Update cursor position on mouse move
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = `${e.clientX}px`;
                cursor.style.top = `${e.clientY}px`;
                
                // Add slight delay to dot for smooth effect
                setTimeout(() => {
                    cursorDot.style.left = `${e.clientX}px`;
                    cursorDot.style.top = `${e.clientY}px`;
                }, 50);
            });
            
            // Hide cursor when leaving window
            document.addEventListener('mouseleave', () => {
                cursor.style.opacity = '0';
                cursorDot.style.opacity = '0';
            });
            
            document.addEventListener('mouseenter', () => {
                cursor.style.opacity = '1';
                cursorDot.style.opacity = '1';
            });
        }
    };
    
    addCustomCursor();

    // Add smooth scrolling for all anchor links
    const enhanceSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 100, // Offset for header
                        behavior: 'smooth'
                    });
                }
            });
        });
    };
    
    enhanceSmoothScrolling();

    // Add responsive font sizing
    const addResponsiveFonts = () => {
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 1200px) {
                html {
                    font-size: 15px;
                }
            }
            
            @media (max-width: 992px) {
                html {
                    font-size: 14px;
                }
            }
            
            @media (max-width: 768px) {
                html {
                    font-size: 13px;
                }
            }
            
            @media (max-width: 576px) {
                html {
                    font-size: 12px;
                }
            }
        `;
        
        document.head.appendChild(style);
    };
    
    addResponsiveFonts();

    // Add theme color meta tag for mobile browsers
    const addThemeColorMeta = () => {
        const meta = document.createElement('meta');
        meta.name = 'theme-color';
        meta.content = '#1a73e8'; // Primary color
        document.head.appendChild(meta);
    };
    
    addThemeColorMeta();
});

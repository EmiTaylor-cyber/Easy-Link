// Main JavaScript file for Easy Link Wi-Fi
// Handles animations, navigation, and interactive elements

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: false,
        mirror: false
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Create and add close button if it doesn't exist
            if (navMenu.classList.contains('active') && !document.querySelector('.close-menu')) {
                const closeBtn = document.createElement('div');
                closeBtn.className = 'close-menu';
                closeBtn.innerHTML = '<i class="fas fa-times"></i>';
                navMenu.appendChild(closeBtn);
                
                closeBtn.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                });
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });

    // Background Slider for pages with .background-slider
    const backgroundSlider = document.querySelector('.background-slider');
    if (backgroundSlider) {
        const slides = backgroundSlider.querySelectorAll('.slide');
        let currentSlide = 0;
        
        // Function to change slide
        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }
        
        // Change slide every 5 seconds
        setInterval(nextSlide, 5000);
    }

    // Quote Slider for pages with .quote-slider
    const quoteSlider = document.querySelector('.quote-slider');
    if (quoteSlider) {
        const quotes = quoteSlider.querySelectorAll('.quote');
        let currentQuote = 0;
        
        // Function to change quote
        function nextQuote() {
            quotes[currentQuote].classList.remove('active');
            currentQuote = (currentQuote + 1) % quotes.length;
            quotes[currentQuote].classList.add('active');
        }
        
        // Change quote every 7 seconds
        setInterval(nextQuote, 7000);
    }

    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const testimonials = testimonialSlider.querySelectorAll('.testimonial');
        const dots = testimonialSlider.querySelectorAll('.dot');
        const prevBtn = testimonialSlider.querySelector('.prev-btn');
        const nextBtn = testimonialSlider.querySelector('.next-btn');
        let currentTestimonial = 0;
        
        // Function to show testimonial
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.style.display = 'none');
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonials[index].style.display = 'block';
            dots[index].classList.add('active');
            currentTestimonial = index;
        }
        
        // Initialize first testimonial
        if (testimonials.length > 0) {
            showTestimonial(0);
        }
        
        // Event listeners for controls
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                let index = currentTestimonial - 1;
                if (index < 0) index = testimonials.length - 1;
                showTestimonial(index);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                let index = currentTestimonial + 1;
                if (index >= testimonials.length) index = 0;
                showTestimonial(index);
            });
        }
        
        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showTestimonial(index);
            });
        });
        
        // Auto rotate testimonials
        setInterval(function() {
            let index = currentTestimonial + 1;
            if (index >= testimonials.length) index = 0;
            showTestimonial(index);
        }, 8000);
    }

    // FAQ Accordion
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        if (header) {
            header.addEventListener('click', function() {
                // Close all other items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });

    // Tab Navigation
    function setupTabs(tabBtnSelector, tabPaneSelector) {
        const tabBtns = document.querySelectorAll(tabBtnSelector);
        const tabPanes = document.querySelectorAll(tabPaneSelector);
        
        tabBtns.forEach((btn, index) => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons and panes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabPanes.forEach(p => p.classList.remove('active'));
                
                // Add active class to clicked button and corresponding pane
                btn.classList.add('active');
                if (tabPanes[index]) {
                    tabPanes[index].classList.add('active');
                }
            });
        });
    }
    
    // Setup different tab systems
    setupTabs('.tab-btn', '.tab-pane');
    setupTabs('.category-tab', '.faq-category');

    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Show/hide gallery items based on filter
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Read More functionality for news articles
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const newsCard = this.closest('.news-card');
            newsCard.classList.toggle('expanded');
            
            if (newsCard.classList.contains('expanded')) {
                this.textContent = 'Read Less';
            } else {
                this.textContent = 'Read More';
            }
        });
    });

    // Animated Counter for statistics
    function animateCounter(element, target, duration) {
        let start = 0;
        const increment = target / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
            start += increment;
            element.textContent = Math.floor(start);
            
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }
    
    // Initialize counters when they come into view
    const counters = document.querySelectorAll('.counter');
    
    // Use Intersection Observer to detect when counters are visible
    if (counters.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target, 2000);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => {
            observer.observe(counter);
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Parallax effect for hero and page header sections
    function parallaxEffect() {
        const hero = document.querySelector('.hero');
        const pageHeader = document.querySelector('.page-header');
        
        if (hero) {
            const scrollPosition = window.pageYOffset;
            hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
        
        if (pageHeader) {
            const scrollPosition = window.pageYOffset;
            pageHeader.style.backgroundPositionY = scrollPosition * 0.3 + 'px';
        }
    }
    
    // Apply parallax effect on scroll
    window.addEventListener('scroll', function() {
        parallaxEffect();
    });

    // Sticky header effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.padding = '0.5rem 0';
            header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '1rem 0';
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            
            // Check required fields
            const requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    let errorMsg = field.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'This field is required';
                        field.parentNode.insertBefore(errorMsg, field.nextSibling);
                    }
                } else {
                    field.classList.remove('error');
                    
                    // Remove error message if it exists
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });
            
            // Check email format
            const emailFields = form.querySelectorAll('input[type="email"]');
            emailFields.forEach(field => {
                if (field.value.trim() && !isValidEmail(field.value)) {
                    valid = false;
                    field.classList.add('error');
                    
                    // Add error message if it doesn't exist
                    let errorMsg = field.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.textContent = 'Please enter a valid email address';
                        field.parentNode.insertBefore(errorMsg, field.nextSibling);
                    }
                }
            });
            
            if (!valid) {
                e.preventDefault();
            }
        });
    });
    
    // Email validation helper
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Add animated background to enhanced headers
    const enhancedHeaders = document.querySelectorAll('.enhanced-header');
    enhancedHeaders.forEach(header => {
        // Create animated background particles
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.className = 'header-particle';
            
            // Random position, size and animation duration
            const size = Math.random() * 20 + 5;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
            particle.style.animationDelay = (Math.random() * 5) + 's';
            
            header.appendChild(particle);
        }
    });

    // Initialize dynamic background image slider with quotes
    initBackgroundSlider();
});

// Function to initialize background image slider with quotes
function initBackgroundSlider() {
    const heroSection = document.querySelector('.hero');
    const pageHeaders = document.querySelectorAll('.page-header');
    
    // Add background slider to hero section if it exists
    if (heroSection && !heroSection.querySelector('.background-slider')) {
        createBackgroundSlider(heroSection);
    }
    
    // Add background slider to page headers if they don't have one
    pageHeaders.forEach(header => {
        if (!header.querySelector('.background-slider')) {
            createBackgroundSlider(header);
        }
    });
}

// Function to create background slider
function createBackgroundSlider(container) {
    // Create background slider container
    const sliderContainer = document.createElement('div');
    sliderContainer.className = 'background-slider';
    
    // Create slides with different background images
    const images = [
        '../images/bg-slide-1.jpg',
        '../images/bg-slide-2.jpg',
        '../images/bg-slide-3.jpg'
    ];
    
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        if (index === 0) slide.classList.add('active');
        slide.style.backgroundImage = `url(${image})`;
        sliderContainer.appendChild(slide);
    });
    
    // Insert slider at the beginning of container
    container.insertBefore(sliderContainer, container.firstChild);
    
    // Add quote slider if it doesn't exist
    if (!container.querySelector('.quote-slider')) {
        createQuoteSlider(container);
    }
}

// Function to create quote slider
function createQuoteSlider(container) {
    // Create quote slider container
    const quoteContainer = document.createElement('div');
    quoteContainer.className = 'quote-slider';
    quoteContainer.setAttribute('data-aos', 'fade-up');
    quoteContainer.setAttribute('data-aos-delay', '200');
    
    // Create quotes
    const quotes = [
        {
            text: "Connectivity is the foundation of progress in the digital age.",
            author: "— Easy Link Team"
        },
        {
            text: "Bringing communities together through affordable internet access.",
            author: "— Our Mission"
        },
        {
            text: "The internet is not a luxury, it's a necessity for modern life.",
            author: "— Our Vision"
        }
    ];
    
    quotes.forEach((quote, index) => {
        const quoteElement = document.createElement('div');
        quoteElement.className = 'quote';
        if (index === 0) quoteElement.classList.add('active');
        
        quoteElement.innerHTML = `
            <p>${quote.text}</p>
            <cite>${quote.author}</cite>
        `;
        
        quoteContainer.appendChild(quoteElement);
    });
    
    // Find the right position to insert the quote slider
    const containerContent = container.querySelector('.container');
    if (containerContent) {
        containerContent.appendChild(quoteContainer);
    } else {
        container.appendChild(quoteContainer);
    }
}

// Add animated scroll indicator to hero section
window.addEventListener('load', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '<i class="fas fa-chevron-down"></i>';
        hero.appendChild(scrollIndicator);
        
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: hero.offsetHeight,
                behavior: 'smooth'
            });
        });
    }
});

// Add CSS for new dynamic elements
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .header-particle {
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            pointer-events: none;
            animation: floatParticle linear infinite;
        }
        
        @keyframes floatParticle {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0;
            }
            20% {
                opacity: 0.8;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
        
        .scroll-indicator {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            animation: bounce 2s infinite;
            z-index: 10;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0) translateX(-50%);
            }
            40% {
                transform: translateY(-20px) translateX(-50%);
            }
            60% {
                transform: translateY(-10px) translateX(-50%);
            }
        }
        
        .error {
            border-color: #f44336 !important;
            box-shadow: 0 0 0 3px rgba(244, 67, 54, 0.2) !important;
        }
        
        .error-message {
            color: #f44336;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        }
    `;
    document.head.appendChild(style);
});

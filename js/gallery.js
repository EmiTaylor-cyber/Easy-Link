// Gallery JavaScript for Easy Link Wi-Fi
// Handles gallery filtering, lightbox, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Gallery Filter Functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            // Show/hide gallery items based on filter with animation
            galleryItems.forEach(item => {
                // First fade out all items
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                        // Then fade in the ones that match the filter
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                }, 300);
            });
        });
    });

    // Load More Button Functionality
    const loadMoreBtn = document.getElementById('load-more');
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    
    if (loadMoreBtn && hiddenItems.length > 0) {
        loadMoreBtn.addEventListener('click', function() {
            let itemsToShow = 4; // Number of items to show on each click
            let itemsShown = 0;
            
            hiddenItems.forEach(item => {
                if (item.classList.contains('hidden') && itemsShown < itemsToShow) {
                    item.classList.remove('hidden');
                    item.style.display = 'block';
                    
                    // Animate the newly visible items
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50 * itemsShown); // Stagger the animations
                    
                    itemsShown++;
                }
            });
            
            // Hide the load more button if all items are shown
            if (document.querySelectorAll('.gallery-item.hidden').length === 0) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }

    // Lightbox Customization
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'fadeDuration': 300,
        'imageFadeDuration': 300,
        'alwaysShowNavOnTouchDevices': true
    });

    // Image Hover Effect
    const galleryOverlays = document.querySelectorAll('.gallery-overlay');
    galleryOverlays.forEach(overlay => {
        const parent = overlay.parentElement;
        
        parent.addEventListener('mouseenter', function() {
            overlay.style.opacity = '1';
        });
        
        parent.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
        });
    });

    // Instagram Feed Hover Effect
    const instagramItems = document.querySelectorAll('.instagram-item');
    instagramItems.forEach(item => {
        const overlay = item.querySelector('.instagram-overlay');
        
        item.addEventListener('mouseenter', function() {
            overlay.style.opacity = '0.8';
        });
        
        item.addEventListener('mouseleave', function() {
            overlay.style.opacity = '0';
        });
    });

    // Background Slider for Gallery Header
    const galleryHeader = document.querySelector('.gallery-header');
    if (galleryHeader) {
        const backgroundSlider = galleryHeader.querySelector('.background-slider');
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
    }

    // Quote Slider for Gallery Header
    const quoteSlider = document.querySelector('.gallery-header .quote-slider');
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

    // Photo Submission Form Toggle
    const submitPhotoBtn = document.querySelector('.btn-primary[href="#"]');
    if (submitPhotoBtn) {
        submitPhotoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if form already exists
            let photoForm = document.querySelector('.photo-submission-form');
            
            if (!photoForm) {
                // Create form if it doesn't exist
                photoForm = document.createElement('div');
                photoForm.className = 'photo-submission-form';
                photoForm.innerHTML = `
                    <h3>Submit Your Photo</h3>
                    <form>
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Your Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="photo">Select Photo</label>
                            <input type="file" id="photo" name="photo" accept="image/*" required>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea id="description" name="description" rows="3"></textarea>
                        </div>
                        <div class="form-checkbox">
                            <input type="checkbox" id="consent" name="consent" required>
                            <label for="consent">I consent to Easy Link using this photo on their website and social media</label>
                        </div>
                        <div class="form-submit">
                            <button type="submit" class="btn btn-primary">Submit Photo</button>
                            <button type="button" class="btn btn-outline cancel-btn">Cancel</button>
                        </div>
                    </form>
                `;
                
                // Insert form after the share buttons
                const shareButtons = document.querySelector('.share-buttons');
                shareButtons.parentNode.insertBefore(photoForm, shareButtons.nextSibling);
                
                // Add cancel button functionality
                const cancelBtn = photoForm.querySelector('.cancel-btn');
                cancelBtn.addEventListener('click', function() {
                    photoForm.remove();
                });
                
                // Add form submission handling
                const form = photoForm.querySelector('form');
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Show success message
                    photoForm.innerHTML = `
                        <div class="success-message">
                            <i class="fas fa-check-circle"></i>
                            <h3>Thank You!</h3>
                            <p>Your photo has been submitted successfully. Our team will review it shortly.</p>
                            <button class="btn btn-primary close-btn">Close</button>
                        </div>
                    `;
                    
                    // Add close button functionality
                    const closeBtn = photoForm.querySelector('.close-btn');
                    closeBtn.addEventListener('click', function() {
                        photoForm.remove();
                    });
                });
            } else {
                // Remove form if it already exists
                photoForm.remove();
            }
        });
    }

    // Add CSS for new dynamic elements
    const style = document.createElement('style');
    style.textContent = `
        .gallery-item {
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .gallery-item.hidden {
            display: none;
            opacity: 0;
            transform: scale(0.8);
        }
        
        .photo-submission-form {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            margin-top: 20px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.5s ease;
        }
        
        .success-message {
            text-align: center;
            padding: 20px;
        }
        
        .success-message i {
            font-size: 3rem;
            color: #4caf50;
            margin-bottom: 15px;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

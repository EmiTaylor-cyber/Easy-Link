# README.md - Easy Link Wi-Fi Website

## Overview
This is a modern, responsive multi-page website for Easy Link Wi-Fi hotspot business in Arua City, Uganda. The website is built using pure HTML, CSS, and JavaScript without any backend frameworks or CMS, making it easy to edit and deploy on platforms like GitHub Pages.

## Features
- **Fully Responsive Design**: Works seamlessly on all devices from mobile phones to desktop computers
- **Modern UI/UX**: Clean, professional design with blue and green color scheme
- **Dynamic Animations**: Smooth animations and transitions using AOS (Animate on Scroll) library
- **Interactive Elements**: Background sliders, quote rotations, and interactive components
- **SEO Optimized**: Complete with meta tags, Open Graph data, and Twitter cards
- **Lightweight & Fast**: Optimized images and code for quick loading times
- **Easy to Edit**: Well-structured HTML, CSS, and JavaScript files with clear comments

## Pages Included
1. **Home Page**: Introduction to Easy Link with key features and call-to-action buttons
2. **About Page**: Company information, mission, vision, and history
3. **Packages Page**: Detailed pricing plans and packages
4. **How to Connect Page**: Step-by-step guide for connecting to the Wi-Fi service
5. **Coverage Map Page**: Map showing hotspot locations and coverage areas
6. **FAQ Page**: Frequently asked questions and support information
7. **Partner Page**: Information for potential resellers and partners
8. **News Page**: Company updates and announcements
9. **Gallery Page**: Photo gallery showcasing the business and community
10. **Contact Page**: Contact form and information

## File Structure
```
EasyLink/
├── index.html              # Home page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── main.js             # Main JavaScript functionality
│   ├── animations.js       # Enhanced animations and effects
│   ├── gallery.js          # Gallery page functionality
│   └── coverage-map.js     # Map functionality
├── images/                 # Image assets
│   ├── favicon.svg         # Website favicon
│   └── ...                 # Other images
└── pages/                  # Additional HTML pages
    ├── about.html
    ├── packages.html
    ├── connect.html
    ├── coverage.html
    ├── faq.html
    ├── partner.html
    ├── news.html
    ├── gallery.html
    └── contact.html
```

## How to Use

### Local Development
1. Download and extract the ZIP file
2. Open the folder in Visual Studio Code or your preferred code editor
3. To preview the website locally, simply open `index.html` in your web browser
4. Make edits to HTML, CSS, or JavaScript files as needed
5. Refresh your browser to see changes

### Deployment on GitHub Pages
1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to repository Settings > Pages
4. Select the main branch as the source
5. Click Save, and your website will be published at the provided URL

## Customization Guide

### Changing Content
- Edit the HTML files to update text content, links, and structure
- All pages follow the same structure with header, main content sections, and footer

### Updating Styles
- Modify `css/styles.css` to change colors, fonts, spacing, etc.
- The color scheme uses CSS variables at the top of the stylesheet:
  ```css
  :root {
    --primary-color: #1a73e8;       /* Bright Blue */
    --primary-dark: #0d47a1;        /* Dark Blue */
    --primary-light: #64b5f6;       /* Light Blue */
    --secondary-color: #4caf50;     /* Green */
    --secondary-dark: #2e7d32;      /* Dark Green */
    --secondary-light: #81c784;     /* Light Green */
    /* ... other variables ... */
  }
  ```

### Adding New Pages
1. Copy an existing HTML page as a template
2. Update the page title, meta tags, and content
3. Add a link to the new page in the navigation menu of all pages

### Updating Images
1. Replace images in the `images/` directory with your own
2. Make sure to maintain the same filenames or update references in the HTML
3. Optimize images for web to ensure fast loading times

### Modifying JavaScript Functionality
- `js/main.js` contains core functionality like navigation, sliders, and animations
- `js/animations.js` contains enhanced animations and interactive elements
- `js/gallery.js` contains gallery-specific functionality
- `js/coverage-map.js` contains map functionality

## External Libraries Used
- [AOS (Animate on Scroll)](https://michalsnik.github.io/aos/) - For scroll animations
- [Font Awesome](https://fontawesome.com/) - For icons
- [Lightbox](https://lokeshdhakar.com/projects/lightbox2/) - For gallery image viewing

## Browser Compatibility
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Credits
- Design and Development: Created for Easy Link Wi-Fi
- Icons: Font Awesome
- Fonts: Google Fonts (Roboto, Poppins)

## License
This website is provided for the exclusive use of Easy Link Wi-Fi. All rights reserved.

---

For any questions or support, please contact the developer.

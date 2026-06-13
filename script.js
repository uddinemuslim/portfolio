// Download Resume Function
function downloadResume() {
    // You can update this with your actual resume file path
    const resumeUrl = 'resume.pdf'; // Replace with your resume file path
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Muslim-Uddin-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations (Fade-in effect)
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element hits the bottom
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Stop observing once it has appeared
        }
    });
}, appearOptions);

// Apply the observer to all elements with the 'fade-in' class
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Hide Scroll Indicator on Scroll
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            scrollIndicator.classList.add('scrolled');
        } else {
            scrollIndicator.classList.remove('scrolled');
        }
    });
}
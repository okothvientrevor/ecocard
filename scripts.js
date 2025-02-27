// Advanced GSAP Scroll Animations
gsap.registerPlugin(ScrollTrigger);

// Reveal Text Animation
gsap.utils.toArray('.reveal-text').forEach(text => {
    gsap.fromTo(text, 
        { 
            opacity: 0, 
            y: 50,
            scale: 0.9 
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Section Parallax Effect
gsap.utils.toArray('section').forEach(section => {
    gsap.fromTo(section, 
        { 
            backgroundPosition: "50% 0px" 
        }, 
        {
            backgroundPosition: "50% 100px",
            ease: "none",
            scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
    );
});

// Staggered Card Animations
gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.fromTo(card, 
        { 
            opacity: 0, 
            y: 50,
            rotation: -5 
        },
        {
            opacity: 1,
            y: 0,
            rotation: 0,
            duration: 1,
            delay: index * 0.2,
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// QR Code Modal functionality
const downloadBtn = document.getElementById('download-btn');
const mobileDownloadBtn = document.getElementById('mobile-download-btn');
const qrModal = document.getElementById('qr-modal');
const closeModal = document.getElementById('close-modal');

function toggleModal() {
    qrModal.classList.toggle('hidden');
}

// Check if elements exist before adding event listeners
if (downloadBtn) {
    downloadBtn.addEventListener('click', toggleModal);
}

if (mobileDownloadBtn) {
    mobileDownloadBtn.addEventListener('click', toggleModal);
}

if (closeModal) {
    closeModal.addEventListener('click', toggleModal);
}

// Close modal when clicking outside
if (qrModal) {
    qrModal.addEventListener('click', (e) => {
        if (e.target === qrModal) {
            toggleModal();
        }
    });
}

// Close modal with escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && qrModal && !qrModal.classList.contains('hidden')) {
        toggleModal();
    }
});
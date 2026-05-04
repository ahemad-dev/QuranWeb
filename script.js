document.addEventListener('DOMContentLoaded', () => {
    // Direct Download Link
const DOWNLOAD_URL = "https://github.com/ahemad-dev/QuranWeb/releases/download/v1/QuranWeb-v1.0-beta.apk";
    // Handle Download Buttons
    const downloadButtons = document.querySelectorAll('.download-trigger');

    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Instant direct download without visible link
            const link = document.createElement('a');
            link.href = DOWNLOAD_URL;
            link.setAttribute('download', 'QuranWeb.apk');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    // Reveal on Scroll Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Once visible, we can stop observing this specific element
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15 // Trigger when 15% of element is visible
        });

        revealElements.forEach(el => observer.observe(el));
    };

    revealOnScroll();

    // Subtle Parallax effect on background glow
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.bg-glow');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        glow.style.transform = `translate(${x * 30}px, ${y * 30}px)`;
    });
});

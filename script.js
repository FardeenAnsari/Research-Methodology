// Header auto-hide on scroll
let lastScroll = window.scrollY;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const header = document.querySelector('.fixed-header');
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
    lastScroll = currentScroll;
});

// PDF Generation
function generatePDF() {
    const element = document.querySelector('.main-content');
    const opt = {
        margin: [10, 10],
        filename: 'research_methodology.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');
window.onscroll = function() {
    // Show/hide scroll-to-top button
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Sidebar functionality
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    if (sidebar.classList.contains('open') && 
        !sidebar.contains(e.target) && 
        !hamburger.contains(e.target)) {
        sidebar.classList.remove('open');
    }
});

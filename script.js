/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll sections active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    /* remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Dark/Light Mode Theme */
let themeBtn = document.querySelector('#theme-btn');

// Start with standard dark mode optionally, or read stored
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeBtn.classList.replace('bx-moon', 'bx-sun');
} else if (localStorage.getItem("theme") === "light") {
    document.body.classList.remove("dark-mode");
    themeBtn.classList.replace('bx-sun', 'bx-moon');
} else {
    // Making Dark Mode as the default modern approach often requested
    document.body.classList.add("dark-mode");
    themeBtn.classList.replace('bx-moon', 'bx-sun');
    localStorage.setItem("theme", "dark");
}

themeBtn.onclick = () => {
    themeBtn.classList.toggle('bx-sun');
    if (themeBtn.classList.contains('bx-sun')) {
        themeBtn.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }
};

/* Typed.js logic */
if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: ['AI Engineer', 'Java Developer', 'Frontend Dev'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true
    });
}

/* Geeks for Geeks Link Interaction */
const gfgLink = document.querySelector('.gfg-link');

if (gfgLink) {
    gfgLink.addEventListener('click', () => {
        console.log('Visiting Geeks for Geeks profile!');
        // You could add more functionality here like analytics tracking
    });
}


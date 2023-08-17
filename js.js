window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveall);
function reveall() {
    var revealls = document.querySelectorAll('.reveall');
    for (var i = 0; i < revealls.length; i++) {
        var windowheight = window.innerHeight;
        var revealltop = revealls[i].getBoundingClientRect().top;
        var reveallpoint = 50;
        if (revealltop < windowheight - reveallpoint) {
            revealls[i].classList.add('active');
        }
        else {
            revealls[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', revealll);
function revealll() {
    var reveallls = document.querySelectorAll('.revealll');
    for (var i = 0; i < reveallls.length; i++) {
        var windowheight = window.innerHeight;
        var reveallltop = reveallls[i].getBoundingClientRect().top;
        var revealllpoint = 150;
        if (reveallltop < windowheight - revealllpoint) {
            reveallls[i].classList.add('active');
        }
        else {
            reveallls[i].classList.remove('active');
        }
    }
}

// -----------------------------

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.spa');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = -5 * window.innerWidth / 100;
        const topPos = section.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
}


const navbar = document.getElementsByClassName('nav');
let scrolled = false;

window.addEventListener('scroll', () => {
    if (window.scrollY > 0 && !scrolled) {
        navbar.style.backdropFilter = 'blur(5px)';
        scrolled = true;
    } else if (window.scrollY === 0 && scrolled) {
        navbar.style.backgroundColor = 'transparent';
        scrolled = false;
    }
});
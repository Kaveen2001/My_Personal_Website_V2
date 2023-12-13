/** JS ScrollReveal. */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .experience-box, .contactUs-box form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .aboutMe-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .aboutMe-content', { origin: 'right' });

/** Typed JS. */
const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer.','UI / UX Engineer.','Mobile App Developer.','Graphic Designer.','YouTuber.','Blogger.'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop:true
});

/** Toggle Icon Navbar **/
let menuIcon = document.querySelector(".mainLogo");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

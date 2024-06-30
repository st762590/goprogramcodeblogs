/*==================================== scroll reveal ===================*/

ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .courses-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content, h1, .courses.contact-form', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .courses', { origin: 'right' });

/*==================================== typed js ===================*/
const typed = new Typed('.multiple-text', {
  strings: ['Daily Updates', 'New Video Updates', 'Course Updates', 'Comment Winner Announcement', 'Get Full Course Certificate'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
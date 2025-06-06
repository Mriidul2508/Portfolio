/*=======================toggle icon navbar======================= */

let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = ( ) => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=======================scroll sections active link======================= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        };
    });
    /*=======================sticky navbar======================= */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >100);


/*=======================remove toggle icon and navbar when click navbar link (scroll)======================= */

menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
};

/*=======================Scroll reveal======================= */
ScrollReveal({ 
    //reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img, .home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img ',{ origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content ',{ origin: 'right'});


const typed= new Typed('.multiple-text',{
    strings: ['Software Engineer!', 'Frontend Developer!', 'UI/UX Designer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});

/*=======================Form submission======================= 
let form = document.getElementById('sheetdb-form');
form.addEventListener('submit', e => {3
    e.preventDefault();
    fetch(form, action,{
        method: 'POST',
        body: new FormData(document.getElementById("sheetdb-form")),
    }).then(
        response => response.json()
    ).then((html) =>{
        alert("Succesfully Submitted")
    });
});*/




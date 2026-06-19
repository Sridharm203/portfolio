// tab section

var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname, element) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


// side menu


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-220px";
}


// form submission


const scriptURL = 'https://script.google.com/macros/s/AKfycbxF22xw_x8ihi_bn0Ull593faBVGqWVuPerqlHONAqq5dIpZi73wlw57r9yiwH125lD/exec'
const form = document.forms['YOUR_FORM_NAME']
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => response.json())
        .then(response => {
            console.log('Success!', response);
            formMessage.textContent = 'Message sent successfully!';
            setTimeout(() => {
                formMessage.textContent = '';
            }, 5000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            formMessage.textContent = 'Failed to send message.';
        })
})


//  sticky navbar


const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


//reveal effect


const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const elementTop = section.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();


//Typing effect


const roles = [
    "PYTHON & DJANGO DEVELOPER",
    "REACT DEVELOPER",
    "FULL STACK DEVELOPER"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.querySelector(".typing-text");

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const links = document.querySelectorAll('.navbar a');

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        links.forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
    })
})
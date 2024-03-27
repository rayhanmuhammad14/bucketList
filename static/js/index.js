menu = document.getElementById('navbar-icon-toggle');
nav = document.querySelector('ul');

menu.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

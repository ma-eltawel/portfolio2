let menu = document.querySelector('#menu-but'), nav = document.querySelector('nav'), navLinks = 
    document.querySelectorAll('nav a'), sections = document.querySelectorAll('section');

window.onscroll = () => {
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 80);

    sections.forEach(sec => {
        let top = window.scrollY, offset = sec.offsetTop - 100, height = sec.offsetHeight, id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(el => {
                el.classList.remove('active');
                document.querySelector(`nav a[href*= ${id}]`).classList.add('active');
            });
            sec.classList.add('show-anim');
        }
        else{
            sec.classList.remove('show-anim');
        }
    });

    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']'.classList.add('active'))
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// if(window.matchMedia && window.matchMedia('(prefers-colors-scheme:dark)').matches){
//     alert('Wow je suis en darkmode !')
// // }
// function themeNuitJour() {

//     const date = new Date()
//     const hour = date.getHours()

//     if (hour < 5|| hour > 20) {

//         document.documentElement.style.setProperty('--bg-color', 'white')
//         document.documentElement.style.setProperty('--second-bg-color', '#f1f1f1')
//         document.documentElement.style.setProperty('--text-color', '#333')
//         document.documentElement.style.setProperty('--main-color', '#00ffee')
    
//     } else {

//         document.documentElement.style.setProperty('--bg-color', '#080808')
//         document.documentElement.style.setProperty('--second-bg-color', '#131313')
//         document.documentElement.style.setProperty('--text-color', 'white')
//         document.documentElement.style.setProperty('--main-color', '#00ffee')

//     }
//     }





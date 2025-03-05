const input = document.querySelector('input')
const githubImage = document.getElementById('github')
const mailImage = document.getElementById('mail')
const linkedinImage = document.getElementById('linkedin')
const modeImage = document.querySelector('.modeImage')
const githubProject = document.querySelectorAll('.githubProject')
const button = document.querySelector('button')
const menu = document.querySelector('ul')
const items = document.querySelectorAll('li a:link, li a:visited')
const prefersDark = globalThis.matchMedia('(prefers-color-scheme: dark)')

function showNav() {
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        menu.classList.add('hide');
        menu.addEventListener('animationend', function hideMenu() {
            menu.style.display = 'none';
            menu.classList.remove('hide');
            menu.removeEventListener('animationend', hideMenu);
        });
        items.forEach(item => item.style.opacity = 0);
    } else {
        menu.style.display = 'flex';
        menu.classList.add('show');
        menu.addEventListener('animationend', function showItems() {
            items.forEach(item => item.style.opacity = 1);
            menu.removeEventListener('animationend', showItems);
        });
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 850 && !(menu.classList.contains('show'))) {
        menu.style.display = 'flex';
        items.forEach(item => item.style.opacity = 1);
    }
});

function updateTheme() {
    console.log(prefersDark)
    if (prefersDark.matches){
        input.checked = true
        checkTheme()
    } else {
        input.checked = false
        checkTheme()
    }
}

function checkTheme(){
    const actualPositionY = globalThis.scrollY
    if (input.checked) {
        document.body.classList.add('darkMode')
        githubImage.setAttribute('src','src/github-mark-white.png')
        githubProject.forEach(logo => logo.setAttribute('src','src/github-mark-white.png'))
        linkedinImage.setAttribute('src','src/linkedin-white.png')
        mailImage.setAttribute('src','src/mail-white.png')
        setTimeout(() => modeImage.setAttribute('src','src/moon.png'),100)
    }
    else {
        document.body.classList.remove('darkMode')
        githubImage.setAttribute('src','src/github-mark.png')
        githubProject.forEach(logo => logo.setAttribute('src','src/github-mark.png'))
        linkedinImage.setAttribute('src','src/linkedin.png')
        mailImage.setAttribute('src','src/mail.png')
        setTimeout(() => modeImage.setAttribute('src','src/sun.png'),100)
    }
    globalThis.scrollTo(0,actualPositionY)
}



input.addEventListener('click',checkTheme)
button.addEventListener('click',showNav)
prefersDark.addEventListener('change', updateTheme);

updateTheme()
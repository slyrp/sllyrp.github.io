const darkModeButton = document.querySelector('#darkModeButton');
const urlParams = new URLSearchParams(window.location.search);
const cursorModeButton = document.querySelector('#cursorModeButton');

if (urlParams.get('url')) {
    const backButton = document.createElement('a');
    backButton.href = urlParams.get('url');
    backButton.innerText = 'Back';
    backButton.classList.add('nav-link');
    backButton.classList.add('w-nav-link');
  
    const navMenu = document.querySelector('.nav-menu-2');
    navMenu.prepend(backButton);
}

function checkTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeButton.innerHTML = 'Turn off'
        const headings = document.querySelectorAll('h2');
        headings.forEach(heading => {
            // Do something with each heading
            heading.classList.add('white-text');
            heading.classList.remove('black');
            heading.classList.remove('black-text');
        });
    } else {
        localStorage.setItem('theme', 'light-mode');
        document.body.setAttribute('data-theme', 'light');
        darkModeButton.innerHTML = 'Turn on'
        const headings = document.querySelectorAll('h2');
        headings.forEach(heading => {
            // Do something with each heading
            heading.classList.remove('white-text');
            heading.classList.remove('black');
            heading.classList.add('black-text');
        });
    }
}
checkTheme();

function changeTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        localStorage.setItem('theme', 'light-mode');
        document.body.setAttribute('data-theme', 'light');
        darkModeButton.innerHTML = 'Turn on'
        const headings = document.querySelectorAll('h2');
        headings.forEach(heading => {
            // Do something with each heading
            heading.classList.remove('white-text');
            heading.classList.remove('black');
            heading.classList.add('black-text');
        });
    } else {
        localStorage.setItem('theme', 'dark-mode');
        document.body.setAttribute('data-theme', 'dark');
        darkModeButton.innerHTML = 'Turn off'
        const headings = document.querySelectorAll('h2');
        headings.forEach(heading => {
            // Do something with each heading
            heading.classList.add('white-text');
            heading.classList.remove('black');
            heading.classList.remove('black-text');
        });
    }
}
darkModeButton.addEventListener('click', changeTheme);

function checkCursor() {
    if (localStorage.getItem('cursor') === 'off') {
        cursorModeButton.innerHTML = 'Turn on'
        document.body.style.cursor = "pointer"
    } else {
        localStorage.setItem('cursor', 'on');
        document.body.style.cursor = "none"
        cursorModeButton.innerHTML = 'Turn off'
    }
}
checkCursor();

function changeCursor() {
    if (localStorage.getItem('cursor') === 'on') {
        localStorage.setItem('cursor', 'off');
        cursorModeButton.innerHTML = 'Turn on'
        document.body.style.cursor = "pointer"
        const circles = document.querySelectorAll(".circle");
        circles.forEach(circle => {
            // Do something with each heading
            circle.classList.add('display-none');
        });
    } else {
        localStorage.setItem('cursor', 'on');
        document.body.setAttribute('data-cursor', 'on');
        cursorModeButton.innerHTML = 'Turn off'
        document.body.style.cursor = "none"
        const circles = document.querySelectorAll(".circle");
        circles.forEach(circle => {
            // Do something with each heading
            circle.classList.remove('display-none');
        });
    }
}
cursorModeButton.addEventListener('click', changeCursor);
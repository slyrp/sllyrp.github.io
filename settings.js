const urlParams = new URLSearchParams(window.location.search);
const darkModeButton = document.querySelector('#darkModeButton');
const cursorModeButton = document.querySelector('#cursorModeButton');
const dragScrollButton = document.querySelector('#dragScrollButton');

// Check if the URL has a parameter called 'url' and if it does, create a back button
if (urlParams.get('url')) {
    const backButton = document.createElement('a');
    backButton.href = urlParams.get('url');
    backButton.innerText = 'Back';
    backButton.classList.add('nav-link');
    backButton.classList.add('w-nav-link');
  
    const navMenu = document.querySelector('.nav-menu-2');
    navMenu.prepend(backButton);
}

// Checks if theme is dark or light
function checkTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        document.querySelector('#beta').style.backgroundColor = "#1b1b1b";
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
        document.querySelector('#beta').style.backgroundColor = "#ffffff";
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

// Changes theme from dark to light and vice versa
function changeTheme() {
    if (localStorage.getItem('theme') === 'dark-mode') {
        document.querySelector('#beta').style.backgroundColor = "#ffffff";
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
        document.querySelector('#beta').style.backgroundColor = "#1b1b1b";
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

// Checks if cursor is on or off
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

// Changes cursor from on to off and vice versa
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

function checkScroll() {
    if (localStorage.getItem('scroll') === 'on') {
        dragScrollButton.innerHTML = 'Turn off'
        slider.addEventListener("mousedown", e => {
            isDown = true;
            slider.classList.add("active");
            startY = e.pageY - slider.offsetTop;
            scrollDown = slider.scrollTop;
        });
          
          slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });
          
          slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });
          
          slider.addEventListener("mousemove", e => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - slider.offsetTop;
            const walk = y - startY;
            slider.scrollTo(0, scrollDown - walk);
        });
    } else {
        localStorage.setItem('scroll', 'off');
        dragScrollButton.innerHTML = 'Turn on'
    }
}
checkScroll();

function changeScroll() {
    if (localStorage.getItem('scroll') === 'on') {
        localStorage.setItem('scroll', 'off');
        dragScrollButton.innerHTML = 'Turn on'
        slider.addEventListener("mousedown", e => {
            isDown = false;
            slider.classList.add("active");
            startY = e.pageY - slider.offsetTop;
            scrollDown = slider.scrollTop;
        });
          
          slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });
          
          slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });
          
          slider.addEventListener("mousemove", e => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - slider.offsetTop;
            const walk = y - startY;
            slider.scrollTo(0, scrollDown - walk);
        });
    } else {
        localStorage.setItem('scroll', 'on');
        dragScrollButton.innerHTML = 'Turn off'
        slider.addEventListener("mousedown", e => {
            isDown = true;
            slider.classList.add("active");
            startY = e.pageY - slider.offsetTop;
            scrollDown = slider.scrollTop;
        });
          
          slider.addEventListener("mouseleave", () => {
            isDown = false;
            slider.classList.remove("active");
        });
          
          slider.addEventListener("mouseup", () => {
            isDown = false;
            slider.classList.remove("active");
        });
          
          slider.addEventListener("mousemove", e => {
            if (!isDown) return;
            e.preventDefault();
            const y = e.pageY - slider.offsetTop;
            const walk = y - startY;
            slider.scrollTo(0, scrollDown - walk);
        });
    }
}
dragScrollButton.addEventListener('click', changeScroll);
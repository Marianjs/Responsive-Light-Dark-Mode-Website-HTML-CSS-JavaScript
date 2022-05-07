const themeToggler = document.querySelector(".theme-toggler");

// change theme - cand dam click, culorile din clasa root se vor schimba cu cele din clasa dark-theme-variables
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
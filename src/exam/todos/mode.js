const mode = document.querySelector('.dark-mode')
const root = document.querySelector(':root');
const checked = localStorage.getItem('dark-mode');
mode.checked = JSON.parse(checked);

// console.log(window.matchMedia('(prefers-color-scheme: light)'))

if (
    /* This condition checks whether the user has set a site preference for dark mode OR a OS-level preference for Dark Mode AND no site preference */
    (window.matchMedia('(prefers-color-scheme: dark)').matches &&
     !localStorage.getItem('dark-mode'))
) {
    
    mode.checked=true;
}
else if (localStorage.getItem('dark-mode')==='true'){
    document.documentElement.setAttribute('color-mode', 'dark');
}else if (localStorage.getItem('dark-mode')==='false'){
    document.documentElement.setAttribute('color-mode', 'light');
}

function checkDarkMode(){
    if (mode.checked){
        root.setAttribute('color-mode','dark');
        localStorage.setItem('dark-mode',true);
    }else {
        root.setAttribute('color-mode','light');
        localStorage.setItem('dark-mode',false);
    }
};

// checkDarkMode();
mode.addEventListener('click',()=>checkDarkMode())

const topMenu = document.getElementById('top-menu');
const toggleTopMenuIcon = document.getElementById('toggle-top-menu-icon');


function eventListener() {
    document.addEventListener('click', (e) => {
        if (toggleTopMenuIcon.contains(e.target)) {
            topMenu.classList.toggle('hidden');
            topMenu.classList.toggle('ct-menu-top-header-expanded');
        } else {
            //Outside the toggle menu
    
            if (topMenu.classList.contains('ct-menu-top-header-expanded')) {
                topMenu.classList.remove('ct-menu-top-header-expanded');
                topMenu.classList.add('hidden');
            }
        }
    })
}

eventListener();


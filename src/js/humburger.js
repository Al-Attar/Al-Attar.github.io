window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__items'),
          menuItems = document.querySelectorAll('.header__item'),
          hamburger = document.querySelector('.hamburger');
        
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__items_active');
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__items_active');
        });
    })
})
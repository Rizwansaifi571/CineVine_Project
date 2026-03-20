// Initialize active menu item and underline animation on page load
(function () {
    function initializeMenuAnimation() {
        // Get current page path
        const currentPath = window.location.pathname.toLowerCase();
        
        // Determine which page we're on
        let activePage = 'home'; // default
        if (currentPath.includes('about-me')) {
            activePage = 'about-me';
        } else if (currentPath.includes('our-team')) {
            activePage = 'our-team';
        } else if (currentPath.includes('our-services')) {
            activePage = 'our-services';
        }
        
        // Define which menu item IDs should be active for each page (without variant prefix)
        const pageToMenuNum = {
            'home': '140',
            'about-me': '1405',
            'our-team': '1410',
            'our-services': '1411'
        };
        
        const activeMenuNum = pageToMenuNum[activePage];
        
        // Update all navbar variants (desktop, sticky, mobile)
        const variants = [
            { prefix: '', name: 'main' },
            { prefix: 'sticky-', name: 'sticky' },
            { prefix: 'mobile-', name: 'mobile' }
        ];
        
        variants.forEach(variant => {
            // Remove eltdf-active-item class from all menu items in this variant
            const mainMenu = document.querySelector(`.eltdf-${variant.prefix}main-menu`);
            if (mainMenu) {
                const menuItems = mainMenu.querySelectorAll('ul > li');
                menuItems.forEach(item => {
                    item.classList.remove('eltdf-active-item', 'current-menu-item', 'page_item', 'current_page_item');
                    // Remove page-item-ID class
                    item.className = item.className.replace(/page-item-\d+/g, '');
                });
                
                // Add active class to current page's menu item
                const currentMenuItem = mainMenu.querySelector(`li[id*="-${activeMenuNum}"]`);
                if (currentMenuItem) {
                    currentMenuItem.classList.add('eltdf-active-item');
                    currentMenuItem.classList.add('current-menu-item');
                    currentMenuItem.classList.add('page_item');
                    currentMenuItem.classList.add('current_page_item');
                    currentMenuItem.classList.add(`page-item-${activeMenuNum}`);
                }
            }
        });
    }
    
    // Run on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeMenuAnimation);
    } else {
        initializeMenuAnimation();
    }
    
    // Also run after window load to ensure all elements are ready
    window.addEventListener('load', initializeMenuAnimation);
})();

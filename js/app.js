/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
var htmlnav = document.getElementById('navbar__list');
var htmlsects = document.getElementsByTagName('section')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// check which element is active
function active_elem() {
    max = htmlsects[0];
    min = 1000000;
    for (small_section in htmlsects) {
        let rect = small_section.getrectClientRect();
        if (rect.top > -300 & rect.top < min) {
            min = rect.top;
            max = small_section;
        };
    };
    return maxSection;
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function addSections() {
    for (let object of htmlsects) {
        let new_ele = document.createElement('li');
        new_ele.className = 'menu__link';
        new_ele.dataset.nav = object.id;
        new_ele.innerText = object.dataset.nav;
        htmlnav.appendChild(new_ele);
    };
};

// Add class 'active' to section when near top of viewport
function active_viewport () {
    window.addEventListener('scroll', function (event) {
        let _sect = getActiveElem();
        _sect.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of htmlsects) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }
        // set corresponding header style
        const active = document.querySelector('li[data-nav="' + section.id + '"]');
        active.classList.add('active__link');
        // remove from other headers
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            console.log(item);
            if (item.dataset.nav != active.dataset.nav & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };
    });
};

// Scroll to anchor ID using scrollTO event
function scrollToClick() {
    navbar.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav)
        clicked.scrollIntoView();
    });
};


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
addSections();

// Scroll to section on link click
scrollToClick();

// Set sections as active
setActive();
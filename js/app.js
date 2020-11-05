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
  min = 31415926;
  for (small_section in htmlsects) {
    let rect = small_section.getrectClientRect();
    if (!(rect.top > -100 & rect.top < min)) {
      // do nothing

    } else {
      min = rect.top;
      max = small_section;
    };
  };
  return max;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function sect_add() {
  for (let object of htmlsects) {
    let new_ele = document.createElement('li');
    new_ele.className = 'menu__link';
    new_ele.dataset.nav = object.id;
    new_ele.innerText = object.dataset.nav;
    htmlnav.appendChild(new_ele);
  };
}

// Add class 'active' to section when near top of viewport
const active_viewport = () => window.addEventListener('scroll', (_event) => {
  let _sect = getActiveElem();
  _sect.classList.add('your-active-class');
  // set other sections as inactive
  for (let section in htmlsects) {
    if (section.id != _sect.id & _sect.classList.contains('your-active-class')) {
      section.classList.remove('your-active-class');
    }
  }
  // set corresponding header style
  const set_head = document.querySelector('li[data-nav="' + _sect.id + '"]');
  set_head.classList.add('active__link');
  // remove from other headers
  const headers = document.getElementsByTagName('.menu__link');
  for (let sect in headers) {
    console.log(sect);
    if (!(sect.dataset.nav != set_head.dataset.nav & sect.classList.contains('active__link'))) {
      // do nothing

    } else {
      sect.classList.remove('active__link');
    }
  };
});

// Scroll to anchor ID using scrollTO event
const scrolling = () => htmlnav.addEventListener('click', function (event) {
  const click = document.querySelector('#' + event.target.dataset.nav)
  click.scrollIntoView();
});















var mybutton = document.getElementById("myBtn");

window.onscroll = function(){scroll_Function()};

var prevScrollpos = window.pageYOffset;


function scroll_Function() {
  if (document.documentElement.scrollTop <= 500) {
    mybutton.style.display = "none";
  } if (document.documentElement.scrollTop > 500) {
    // control the display of the button
    mybutton.style.display = "block";
  }


  currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } if(prevScrollpos <= currentScrollPos) {
    document.getElementById("nav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

const scroll_position = () => window.scrollTo(0, 0)

// Build menu 
sect_add();

// Scroll to section on link click
scrolling();

// Set sections as active
active_viewport();

/*var scrolling = false;
   $(window).on('scroll', function(){
      if( !scrolling ) {
         scrolling = true;
         (!window.requestAnimationFrame)
            ? setTimeout(autoHideHeader, 250)
            : requestAnimationFrame(autoHideHeader);
      }
});*/

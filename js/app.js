

// add navbar
var navi = document.getElementById("#navbar list");
const sect = document.getElementsByTagName("section");
const navadd = () => {
  w = 0;
  while (w < sect.length + 1) {
    var sects = new DOMParser();
    const domString = '<div class="menu_link"><a href= "#section1">Sect 1</a></div>';
    const domString2 = '<div class="menu_link"><a href= "#section2">Sect 2</a></div>';
    const domString3 = '<div class="menu_link"><a href= "#section3">Sect 3</a></div>';
    const domString4 = '<div class="menu_link"><a href= "#section4">Sect 4</a></div>';
    var html = sects.parseFromString(domString, 'text/html');
    var html2 = sects.parseFromString(domString2, 'text/html');
    var html3 = sects.parseFromString(domString3, 'text/html');
    var html4 = sects.parseFromString(domString4, 'text/html');
    document.header.append(html.header.childNodes[0]);
    document.header.append(html2.header.childNodes[1]);
    document.header.append(html3.header.childNodes[2]);
    document.header.append(html4.header.childNodes[3]);

    w++;

  }
};
function InViewport(a) {
  let b = a.getBoundingClientRect();
  return (
    b.top >= 0 &&
    b.left >= 0 &&
    b.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    b.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
// add section 4
const section_cont = function () {
  var main = document.getElementsByTagName("main");
  const section4 = document.createElement("section");
  var stringg = '<section id="section4" data-nav="Section 4" class="your-active-class"><h2>Section 4</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p></section>';
  section4.innerHTML = stringg;
  main.innerHTML = section4;
}

//Add class 'active' to section when near top of viewport
function ActiveClass() {
  i = 0;
  do {
    if (InViewport(sect[i])) {
      sect[i].classList.add("your-active-class");
    } else {
      sect[i].classList.remove("your-active-class");
    }
    i = i + 1;
  }
  while (i < sect.length);
}

const scrollToClick = () => navi.onclick = (event) => {
  const clicked = document.querySelector('#' + event.target.dataset.nav)
  clicked.scrollIntoView();
};




//load the section content function first (in the capture phase)
window.addEventListener("DOMContentLoaded", section_cont, true);
//load the navElementAdder function second in the bubbling phase
window.addEventListener("DOMContentLoaded", navadd);

window.addEventListener("DOMContentLoaded", ActiveClass, true);
scrollToClick();
  

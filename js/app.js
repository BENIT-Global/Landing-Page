var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scroll_Function()};


function scroll_Function() {
    if (document.documentElement.scrollTop > 500) {
        // thanh scroll khi keo xuong 20
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scroll_position() {
    window.scrollTo(0, 0);
}
/**
 * Keeps track of the user's scrolling activity so that
 * the .top button can be hidden and displayed correctly.
 */
window.onscroll = function() {
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.querySelector(".top").classList.remove("hide");
    }
    else {
        document.querySelector(".top").classList.add("hide");
    }
};

/**
 * Takes the user to the top of the page in a swift, smooth manner.
 */
$('.top').click(function() {
    $('html, body').animate({scrollTop: '0'}, 400, 'linear');   
});
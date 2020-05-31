/**
 * Runs once the page is ready.
 * Prepares the Slick carousel.
 * Generates the image miniatures.
 * Allows the image popups with MagnificPopup.
 * Allows user to select image to be displayed in the carousel.
 */
$(document).ready(function(){
    $('.carousel').slick({
        autoplay:true,
        infinite:false,
        arrows:true
    });

    generateSlickMiniatures();

    $('.image-link').magnificPopup({
        type:'image'
    });

    $('.popup').magnificPopup({
        type: 'image'
    });

    setupSelectCurrentImage();
});

/**
 * Selects the clicked miniature to be displayed in the main carousel.
 */
function setupSelectCurrentImage() {
    $('.min .wrapper div img').click(function(){
        let slickImgs = $('.slick-img');

        for (let i = 0; i < slickImgs.length; i++){
            if (slickImgs[i].src == this.src) {
                $('.carousel').slick('slickGoTo', i);
            }
        }
    });
}

/**
 * Generates all the miniature images with the ones in display on the
 * main carousel.
 */
function generateSlickMiniatures() {
    let slickImgs = $('.slick-img:not(".slick-clone")');
    let miniatureRow = document.querySelector('.min .wrapper');
    
    for (let i = 0; i < slickImgs.length; i++) {
        let capsule = document.createElement('div');
        let image = document.createElement('img');

        image.src = slickImgs[i].src;
        image.alt = slickImgs[i].alt + ' (miniature).';

        capsule.appendChild(image);
        miniatureRow.appendChild(capsule);
    }
}
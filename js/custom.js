//owl carsual
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
        }
    })
})

//fixed menu
$(document).ready(function () {
    $(".banner").before('<div class="gap"></div>');
    $(".gap").css({
        "height": $(".header").outerHeight()
    });
    $(".section_minimize i").click(function(){
        $(".Lead_Management_area").slideUp();
    });
    
    $('.section_minimize i').click(function() {
        $(".brand_video iframe").attr('src', $(".brand_video iframe", parent).attr('src') + '?autoplay=0'); 
    });

    


});

$('.selectpicker').selectpicker({
    size:10
});
$(document).ready(function(){

    $(window).scroll(function(){
        headerScroll()
    });

    function headerScroll(){
        if($(window).scrollTop() >= 100){
            $('header').addClass('header-bg');
            $('.logo a img').css('width','80%');
            $('.nav-icon').css('margin-top','0');
        }
        else{
            $('header').removeClass('header-bg');
            $('.logo a img').css('width','100%');
            $('.nav-icon').css('margin-top','20px');
        }
    }
    headerScroll()
    

    // if($('header').offset().top >= 100){
    //     $('header').addClass('header-bg');
    //     $('.logo a img').css('width','80%');
    //     $('.nav-icon').css('margin-top','0');
    // }
    mapResize();
    $(window).resize(mapResize);  

    $('.nav-icon .bars').click(mobile_nav_toggle);

    footer_height();
    $(window).resize(footer_height);
 
        $('.awards-slider').slick({
        autoplay:false,
        autoplaySpeed:1500,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4
                // slidesToScroll: 3,
                // infinite: true,
                // dots: true
            }
            },
            {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 567,
            settings: {
                slidesToShow: 1
                
            }
            }
        ]
        });

    var scroll = new SmoothScroll('.desktop-nav a[href*="#"], .mobile-nav a[href*="#"]');

    new WOW({offset:200,
        mobile:false}).init();
});

function footer_height() {
    $('footer').css('height', $('.fixed-content').height());
}

function  mobile_nav_toggle(){
        $('.bars .bar:first-child').toggleClass('bar-top-rotated');
        $('.bars .bar:nth-child(2)').toggleClass('bar-middle-rotated');
        $('.bars .bar:last-child').toggleClass('bar-bottom-rotated');
        $('.nav-bg').toggleClass('nav-bg-active');
        $('.mobile-nav .nav').toggleClass('nav-active');

}


function mapResize() {
    if($(window).width() < 768) {
      $('.branches .map iframe').attr('height', '400px');
    } else {
      $('.branches .map iframe').attr('height', '600px');
    }
  }
  
  


// console.log("Hi there");
// function viewportSize(display) {
//     if(display){
        
//         var width = $(window).width();
//         var height = $(window).height();
//         $('body').prepend('<div id="viewport-size" style="position:fixed; z-index:1999; top: 100px; left: 20px; background: rgba(255,255,255,0.8); color: #555; padding:10px" > width: ' +width + 'px <br> height: ' + height + 'px</div>');
//         $(window).resize(function() {
//             // console.log("Hi there");
//             var width = $(window).width();
//             var height = $(window).height();
//             $('#viewport-size').html(' width:' + width + 'px <br> height: ' + height + ' px ');
//         })
//     }
// }
// viewportSize(true);
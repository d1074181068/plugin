$(document).ready(function () {
    $('a').click(function (e) { 
      e.preventDefault();
      
    });

    const swiper = new Swiper('.swiper', {
        
        loop: true,
        effect: 'coverflow',
        speed:1500,
        autoplay: {
            delay: 2000,
          },
        
        pagination: {
          el: '.swiper-pagination',
        },
      
        
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },   
    });
    $('.menu > li').click(function (e) { 
      e.preventDefault();
      $(this).find('ul').slideToggle();
    });
    $('.menu > li').mouseleave(function () { 
      $('.menu .menu-course').slideUp();
      $('.menu .menu-faq').slideUp();
    });
    $('.top-bt a').click(function(e){
      e.preventDefault();
      $('html,body').animate({
          scrollTop : 0
        },700);
      
    });
});
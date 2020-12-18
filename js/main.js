$(function(){


    $('a').on('click', function(e) {
        e.preventDefault();
    });

    $('.first li').hover(function() {
        $('ul', this).stop(true, true).css('display', 'block');
    });
    $('.first li').mouseleave(function() {
        $('ul', this).delay(100).hide(0);
    });


    $('.main__content-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/slider__arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/slider__arrows-right.svg" alt="">',
        dots: true,
        responsive: [
          {
            breakpoint: 820,
            settings: {
              dots: false
            }
          }
        ]
        
    });

    var $width = $('body').css('width');
    var $px = 867 + 'px';
  //   if($width > $px) {
  //     $('.slider-arrows__right').hover(function(){
  //         $('.slider-arrows__right').attr('src', 'img/slider__arrows-right-hover.svg');
  //         $('.slider-arrows__right').css('z-index', '100');
  //         $('.slider-arrow-right').css('display', 'block');
  //     });
      
  //     $('.slider-arrow-right').hover(function(){
  //         $('.slider-arrow-right').css('display', 'blcok');
  //     });
  //     $('.slider-arrow-right').mouseleave(function(){
  //         $('.slider-arrow-right').css('display', 'none');
  //         $('.slider-arrows__right').attr('src', 'img/slider__arrows-right.svg');
  //     });
  
  
  //     $('.slider-arrows__left').hover(function(){
  //         $('.slider-arrows__left').attr('src', 'img/slider__arrows-left-hover.svg');
  //         $('.slider-arrows__left').css('z-index', '10');
  //         $('.slider-arrow-left').css('display', 'block');
  //     });
      
  //     $('.slider-arrow-left').hover(function(){
  //         $('.slider-arrow-left').css('display', 'blcok');
  //     });
  //     $('.slider-arrow-left').mouseleave(function(){
  //         $('.slider-arrow-left').css('display', 'none');
  //         $('.slider-arrows__left').attr('src', 'img/slider__arrows-left.svg');
  //     });

  //   }else {
  //     $('.slider-arrows__right').hover(function(){
  //       $('.slider-arrows__right').attr('src', 'img/slider__arrows-right-hover.svg');
  //       $('.slider-arrows__right').css('z-index', '100');
  //   });
  //   $('.slider-arrows__right').mouseleave(function(){
  //     $('.slider-arrows__right').attr('src', 'img/slider__arrows-right.svg');
  // });


  
    


  //   $('.slider-arrows__left').hover(function(){
  //       $('.slider-arrows__left').attr('src', 'img/slider__arrows-left-hover.svg');
  //       $('.slider-arrows__left').css('z-index', '100');
  //   });
    
  //   $('.slider-arrows__left').mouseleave(function(){
  //       $('.slider-arrows__left').attr('src', 'img/slider__arrows-left.svg');
  //   });

  //   }



    $('.slider-arrows__right').hover(function(){
      $('.slider-arrows__right').attr('src', 'img/slider__arrows-right-hover.svg');
      $('.slider-arrows__right').css('z-index', '100');
      $('.slider-arrow-right').css('display', 'block');
  });
  
  $('.slider-arrow-right').hover(function(){
      $('.slider-arrow-right').css('display', 'blcok');
  });
  $('.slider-arrow-right').mouseleave(function(){
      $('.slider-arrow-right').css('display', 'none');
      $('.slider-arrows__right').attr('src', 'img/slider__arrows-right.svg');
  });


  $('.slider-arrows__left').hover(function(){
      $('.slider-arrows__left').attr('src', 'img/slider__arrows-left-hover.svg');
      $('.slider-arrows__left').css('z-index', '10');
      $('.slider-arrow-left').css('display', 'block');
  });
  
  $('.slider-arrow-left').hover(function(){
      $('.slider-arrow-left').css('display', 'blcok');
  });
  $('.slider-arrow-left').mouseleave(function(){
      $('.slider-arrow-left').css('display', 'none');
      $('.slider-arrows__left').attr('src', 'img/slider__arrows-left.svg');
  });

    

 

    
    
    $('.main__products-count-inner').each(function() {
        var spinner = $(this),
          input = spinner.find('input[type="number"]'),
          btnUp = spinner.find('.main__products-count-plus'),
          btnDown = spinner.find('.main__products-count-minus'),
          min = input.attr('min'),
          max = input.attr('max');
      
        btnUp.click(function() {
          var oldValue = parseFloat(input.val());
          if (oldValue >= max) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue + 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });
      
        btnDown.click(function() {
          var oldValue = parseFloat(input.val());
          if (oldValue <= min) {
            var newVal = oldValue;
          } else {
            var newVal = oldValue - 1;
          }
          spinner.find("input").val(newVal);
          spinner.find("input").trigger("change");
        });    
      });


      $('.main__menu-nav-btn').on('click', function() {
        var r = $('.main__menu-nav ul').css('display')
        if(r == 'none' ) {
          $('.main__menu-nav ul').slideDown(100);
        } else {
          $('.main__menu-nav ul').slideUp(100);
        }
      });


})
$(document).ready(function() {

    // Adaptive menu toggle
    // ==========================================================

    $('.adaptive-manu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('adaptive-menu-toggle--open');
        $('.adaptive-menu-container').toggleClass('adaptive-menu-container--open');
    });

    // Add active class to header menu after click
    // ==========================================================

    $('.header-menu__link').on('click', function(e) {
        e.preventDefault();
        $('.header-menu__link').removeClass('header-menu__link--active');
        $(this).addClass('header-menu__link--active');
    });

    // Add active class to header adaptive menu after click
    // ==========================================================

    $('.adaptive-menu__link').on('click', function(e) {
        e.preventDefault();
        $('.adaptive-menu__link').removeClass('adaptive-menu__link--active');
        $(this).addClass('adaptive-menu__link--active');
    })

    // Add class to header after scroll > 300 px
    // ==========================================================

    $(window).on('scroll', function() {
        if($(this).scrollTop() > 300) {
            $('.header').addClass('header--scrolled');
        } else {
            $('.header').removeClass('header--scrolled');
        }
    });

    // Scroll to target button
    // ==========================================================

    $('.js-scrollto').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        if(target) {
            $('html, body').animate({scrollTop: $('#' + target).offset().top - 80}, 400);
        }
    });


    // Fancybox config
    // ==========================================================

    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch:false,
    });

    // Perfect slider init
    // ==========================================================

    if($('.perfect-slider').length) {
        $('.perfect-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3000,
        });
    }
    // Review slider init
    // ==========================================================

   if ($('.reviews-slider').length) {
       $('.reviews-slider').owlCarousel({
           loop: true,
           items: 3,
           nav: true,
           dots: false,
           center: true,
           responsive: {
               0: {
                   items: 1,
                   nav: false,
                   dots: true,
               },
               640: {
                   items: 1,
                   nav: false,
                   dots: true,
               },
               768: {
                   items: 2,
                   center: false,
                   margin: 15,
                   nav: false,
               },
               1000: {
                   items: 3,
               },
           },
       });
   }


    // Review modal
    // ==========================================================

  $(document).on('click', '.js-review-modal', function (e) {
      e.preventDefault();
      var review_text = $(this).parents('.reviews-slider__item').find('.reviews-slider-text--formodal').text(),
          review_name = $(this).parents('.reviews-slider__item').find('.reviews-slider__name').text(),
          review_avatar = $(this).parents('.reviews-slider__item').find('.reviews-slider__avatar').html(),
          review_rating = $(this).parents('.reviews-slider__item').find('.reviews-slider__rating').html();
      review_photos = $(this).parents('.reviews-slider__item').find('.reviews-slider__photos').html();

      $('.review-modal__text').text(review_text);
      $('.review-modal__name').text(review_name);
      $('.review-modal__rating').html(review_rating);
      $('.review-modal__avatar').html(review_avatar);
      $('.review-modal__photolist').html('');
      $('.review-modal__photolist').html(review_photos);
  });

    // Buy array: psd, color, quantity, link
    // ==========================================================
    
  var buyArr = [

    // 7 black
    {
        psc: 7,
        color: 'black',
        quantity: 1,
        link: 'https://wep.wf/b/anz4qe'
    }, {
        psc: 7,
        color: 'black',
        quantity: 2,
        link: 'https://wep.wf/b/7qd8th'
    }, {
        psc: 7,
        color: 'black',
        quantity: 3,
        link: 'https://wep.wf/b/e7ya6i'
    },

    // 7 purple
    {
        psc: 7,
        color: 'purple',
        quantity: 1,
        link: 'https://wep.wf/b/6eulmj'
    }, {
        psc: 7,
        color: 'purple',
        quantity: 2,
        link: 'https://wep.wf/b/cbr6nw'
    }, {
        psc: 7,
        color: 'purple',
        quantity: 3,
        link: 'https://wep.wf/b/o0a4xq'
    },

    // 7 navy blue
    {
        psc: 7,
        color: 'navy_blue',
        quantity: 1,
        link: 'https://wep.wf/b/632eff'
    }, {
        psc: 7,
        color: 'navy_blue',
        quantity: 2,
        link: 'https://wep.wf/b/3inr5m'
    }, {
        psc: 7,
        color: 'navy_blue',
        quantity: 3,
        link: 'https://wep.wf/b/95hg17'
    },

    // 7 red
    {
        psc: 7,
        color: 'red',
        quantity: 1,
        link: 'https://wep.wf/b/40wpu7'
    }, {
        psc: 7,
        color: 'red',
        quantity: 2,
        link: 'https://wep.wf/b/aib3sl'
    }, {
        psc: 7,
        color: 'red',
        quantity: 3,
        link: 'https://wep.wf/b/lyzllu'
    },

    // 7 blue
    {
        psc: 7,
        color: 'blue',
        quantity: 1,
        link: 'https://wep.wf/b/ok2zod'
    }, {
        psc: 7,
        color: 'blue',
        quantity: 2,
        link: 'https://wep.wf/b/ju027d'
    }, {
        psc: 7,
        color: 'blue',
        quantity: 3,
        link: 'https://wep.wf/b/zizvla'
    },

    // 7 green
    {
        psc: 7,
        color: 'green',
        quantity: 1,
        link: 'https://wep.wf/b/fwk64y'
    }, {
        psc: 7,
        color: 'green',
        quantity: 2,
        link: 'https://wep.wf/b/ke5s35'
    }, {
        psc: 7,
        color: 'green',
        quantity: 3,
        link: 'https://wep.wf/b/v8mjze'
    },



    // 4 black
    {
        psc: 4,
        color: 'black',
        quantity: 1,
        link: 'https://wep.wf/b/xq3k2z'
    }, {
        psc: 4,
        color: 'black',
        quantity: 2,
        link: 'https://wep.wf/b/p3y51q'
    }, {
        psc: 4,
        color: 'black',
        quantity: 3,
        link: 'https://wep.wf/b/1m2u8w'
    },

    // 4 purple
    {
        psc: 4,
        color: 'purple',
        quantity: 1,
        link: 'https://wep.wf/b/ilw49e'
    }, {
        psc: 4,
        color: 'purple',
        quantity: 2,
        link: 'https://wep.wf/b/jf6iqo'
    }, {
        psc: 4,
        color: 'purple',
        quantity: 3,
        link: 'https://wep.wf/b/gnkfs4'
    },

    // 4 navy blue
    {
        psc: 4,
        color: 'navy_blue',
        quantity: 1,
        link: 'https://wep.wf/b/d69hsj'
    }, {
        psc: 4,
        color: 'navy_blue',
        quantity: 2,
        link: 'https://wep.wf/b/joqus2'
    }, {
        psc: 4,
        color: 'navy_blue',
        quantity: 3,
        link: 'https://wep.wf/b/ddpk3w'
    },

    // 4 red
    {
        psc: 4,
        color: 'red',
        quantity: 1,
        link: 'https://wep.wf/b/r6yu7s'
    }, {
        psc: 4,
        color: 'red',
        quantity: 2,
        link: 'https://wep.wf/b/s1jxx2'
    }, {
        psc: 4,
        color: 'red',
        quantity: 3,
        link: 'https://wep.wf/b/9rb0eb'
    },

    // 4 blue
    {
        psc: 4,
        color: 'blue',
        quantity: 1,
        link: 'https://wep.wf/b/g44qul'
    }, {
        psc: 4,
        color: 'blue',
        quantity: 2,
        link: 'https://wep.wf/b/wapbkr'
    }, {
        psc: 4,
        color: 'blue',
        quantity: 3,
        link: 'https://wep.wf/b/4o4eg4'
    },

    // 4 green
    {
        psc: 4,
        color: 'green',
        quantity: 1,
        link: 'https://wep.wf/b/r4ryaq'
    }, {
        psc: 4,
        color: 'green',
        quantity: 2,
        link: 'https://wep.wf/b/k6hiuv'
    }, {
        psc: 4,
        color: 'green',
        quantity: 3,
        link: 'https://wep.wf/b/3489ei'
    },



    // 3 black
    {
        psc: 3,
        color: 'black',
        quantity: 1,
        link: 'https://wep.wf/b/r4mhx4'
    }, {
        psc: 3,
        color: 'black',
        quantity: 2,
        link: 'https://wep.wf/b/zjio3p'
    }, {
        psc: 3,
        color: 'black',
        quantity: 3,
        link: 'https://wep.wf/b/e4hl5j'
    },

    // 3 purple
    {
        psc: 3,
        color: 'purple',
        quantity: 1,
        link: 'https://wep.wf/b/js50rd'
    }, {
        psc: 3,
        color: 'purple',
        quantity: 2,
        link: 'https://wep.wf/b/ytwnd3'
    }, {
        psc: 3,
        color: 'purple',
        quantity: 3,
        link: 'https://wep.wf/b/b4k0an'
    },

    // 3 navy blue
    {
        psc: 3,
        color: 'navy_blue',
        quantity: 1,
        link: 'https://wep.wf/b/m4t53i'
    }, {
        psc: 3,
        color: 'navy_blue',
        quantity: 2,
        link: 'https://wep.wf/b/xo0j88'
    }, {
        psc: 3,
        color: 'navy_blue',
        quantity: 3,
        link: 'https://wep.wf/b/18otdu'
    },

    // 3 red
    {
        psc: 3,
        color: 'red',
        quantity: 1,
        link: 'https://wep.wf/b/7f39i2'
    }, {
        psc: 3,
        color: 'red',
        quantity: 2,
        link: 'https://wep.wf/b/hynbtp'
    }, {
        psc: 3,
        color: 'red',
        quantity: 3,
        link: 'https://wep.wf/b/07z59l'
    },

    // 3 blue
    {
        psc: 3,
        color: 'blue',
        quantity: 1,
        link: 'https://wep.wf/b/2td0z0'
    }, {
        psc: 3,
        color: 'blue',
        quantity: 2,
        link: 'https://wep.wf/b/cu63t5'
    }, {
        psc: 3,
        color: 'blue',
        quantity: 3,
        link: 'https://wep.wf/b/x7b5ot'
    },

    // 3 green
    {
        psc: 3,
        color: 'green',
        quantity: 1,
        link: 'https://wep.wf/b/tca1ga'
    }, {
        psc: 3,
        color: 'green',
        quantity: 2,
        link: 'https://wep.wf/b/ad2eoq'
    }, {
        psc: 3,
        color: 'green',
        quantity: 3,
        link: 'https://wep.wf/b/cjr0e7'
    },
  ];
    // Change active link after click psc__btn
    // ==========================================================


  $('.buy-filter-psc__btn').on('click', function(e) {
      e.preventDefautl();

      $('.buy-filter-psc__btn.buy-filter-psc__btn--active').removeClass('buy-filter-psc__btn--active');
      $(this).addClass('buy-filter-psc__btn--active');
  });
    // Change active link after click quantity__btn
    // ==========================================================
  $('.buy-filter-quantity__btn').on('click', function(e) {
      e.preventDefault();

      $('.buy-filter-quantity__btn.buy-filter-quantity__btn--active').removeClass('buy-filter-quantity__btn--active');
      $(this).addClass('buy-filter-quantity__btn--active');
  });

    // Change active link after click: color__btn
    // ==========================================================
  $('.buy-filter-color__btn').on('click', function(e) {
      e.preventDefault();

      $('.buy-filter-color__btn.buy-filter-color__btn--active').removeClass('buy-filter-color__btn--active');
      $(this).addClass('buy-filter-color__btn--active');
  });

    // Change href link after choise params
    // ==========================================================
 $('.js-filter-switcher').on('click', function (e) {
     e.preventDefault();
     var psc_val = $('.buy-filter-number--psc').find('.buy-filter-psc__btn--active').data('psc');
     var color_val = $('.buy-filter-color').find('.buy-filter-color__btn--active').data('color');
     var quantity_val = $('.buy-filter-number--quantity').find('.buy-filter-quantity__btn--active').data('quantity');

     // Get data old and new price 
     var old_price = $('.buy-filter-number--psc').find('.buy-filter-psc__btn--active').data('oldPriceDol'),
         new_price = $('.buy-filter-number--psc').find('.buy-filter-psc__btn--active').data('newPriceDol');

     // return old and price * quantity
     var total_old_price = old_price * quantity_val,
         total_new_price = new_price * quantity_val;

     // get integer and float value
     var total_old_price_int = Math.floor(total_old_price),
         total_new_price_int = Math.floor(total_new_price);
     total_old_price_float = (total_old_price % 1).toFixed(2).slice(2),
         total_new_price_float = (total_new_price % 1).toFixed(2).slice(2);

     // set integer and float value to the blocks
     $('.new-price-dollars').text(total_new_price_int);
     $('.old-price-dollars').text(total_old_price_int);

     $('.new-price-cents').text(total_new_price_float);
     $('.old-price-cents').text(total_old_price_float);

     // loop for get payment link
     for (var i = 0; i < buyArr.length; i++) {
         if ((buyArr[i].psc == psc_val) && (buyArr[i].color == color_val) && (buyArr[i].quantity == quantity_val)) {
             $('.buy-total-offer__btn').attr('href', buyArr[i].link);
         }
     }

     // set active current image, forms color+pack+quantity
     $('.buy-img.buy-img--active').removeClass('buy-img--active');
     $('.buy-img--' + psc_val + '-' + color_val).addClass('buy-img--active');

 });
  

    // Scroll to target button
    // ==========================================================





});


$(document).ready(function() {
             
   /* var owl = $("#owl-demo");
          owl.owlCarousel({
          items : 5, //10 items above 1000px browser width
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        });

    // Para que el carousel se mueva cuando cargue la pagina 
      owl.trigger('owl.play',1800); //mil es un segundo
      
      var owl2 =  $("#owl-demo2");
          owl2.owlCarousel({
          items : 5, //10 items above 1000px browser width
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
        });
           owl2.trigger('owl.play',1800);*/

    $("#owl-demo").owlCarousel({
          items : 5, //10 items above 1000px browser width
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
          autoPlay: 2000
        });
     $("#owl-demo2").owlCarousel({
          items : 8, //10 items above 1000px browser width
          itemsDesktop : [1000,5], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 0
          itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
          autoPlay: 3000
        });

    if($('.js-tile-gallery').length){
      $('.tile').magnificPopup({ 
        type: 'image',
        gallery:{
          enabled:true
        }
        // other options
      });
    }

    $('ul.js-tabs').each(function(){

      var $active, $content, $links = $(this).find('a');

      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      $active.addClass('active');

      $content = $($active[0].hash);
      $links.not($active).each(function () {
        $(this.hash).hide();
      });

      $(this).on('click', 'a', function(e){
        $active.removeClass('active');
        $content.hide();
        $active = $(this);
        $content = $(this.hash);
        $active.addClass('active');
        $content.show();
        e.preventDefault();
      });
    });


});
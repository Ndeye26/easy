(function ($) {
  'use strict';

  $(document).ready(function () {
  	
  	function tabs () {

  		// create global variable
  		var $tabWrapper = $('.tab-wrapper'),
  			$tabMenuLi = $tabWrapper.find('.tab-menu li'),
  			$thumbsRow = $tabWrapper.find('.thumbs-row');

  		// hide not first content
  		$thumbsRow.not(':first-of-type').hide();

  		// assignment tata-att
  		$tabMenuLi.each(function(i){
  			$(this).attr('data-tab', 'tab-' + i);
  		});
  		$thumbsRow.each(function(i){
  			$(this).attr('data-tab', 'tab-' + i);
  		});

  		// click function
  		$tabMenuLi.on('click', function(i){
  			i.preventDefault();

  			var $getWrapper = $(this).closest('.tab-wrapper'),
  				dataTab = $(this).attr('data-tab');

  				$getWrapper.find('.tab-menu a').removeClass('active');
  				$(this).find('a').addClass('active');

  				$getWrapper.find('.thumbs-row').hide();
  				$getWrapper.find('.thumbs-row').filter('[data-tab=' +dataTab+ ']').show();
  		});
  	}

  	tabs();

    $(".ninja-btn").click( function() {
      $(this).toggleClass("active");
    });
        

    function blueasyMenu () {

      if ($(window).width() < 992) {
              $('.horizontal-nav').hide();
            } 

      var $trigger = $('.trigger-nav'),
          $menu = $('.trigger-victim');
          $trigger.click(function(){
            $(this).next($menu).slideToggle(); 
          });

          $(window).resize(function () {

            $(".ninja-btn").removeClass('active');

            if ($(window).width() > 992) {

              $menu.removeAttr('style');

            } else {
              $('.horizontal-nav').hide();
            }
            
          });
    }

    blueasyMenu();

  }); //end ready

}(jQuery));
$(document).ready(function(){

	// 전체메뉴
	$('.all-menu').bind('click', function(e) {
		e.preventDefault();
		$(this).parent('.all_menu').addClass('active');
	});
	$('.all_menu .btn-Close').bind('click', function(e) {
		e.preventDefault();
		$(this).parent('.all_menu').removeClass('active');
		$('.all-menu').focus();
	});
	$('.all_menu_wrap a:last').bind('blur', function(e) {
		e.preventDefault();
		$(this).parents('.all_menu').removeClass('active');
		$('.all-menu').focus();
	});


	/* gnb */

	$('.navi_pc > li').on('mouseenter',function(){

	    $('.navi_pc > li.active').removeClass('active');
	    $(this).addClass('active');
	    $('.depth2, .gnb_bg').addClass('active');
	    $('.depth2:eq('+$(this).index()+')').addClass('current');

	  });

	$('.navi_pc > li').on('mouseleave',function(){

	    $('.navi_pc > li.active').removeClass('active');
	    $('.depth2, .gnb_bg').removeClass('active');
	    $('.depth2:eq('+$(this).index()+')').removeClass('current');

	});

	$('.navi_pc > li > a').on('focus',function(){
	  $('.depth2').addClass('active');
	  $(this).siblings('.depth2').addClass('current');
	  $('.gnb_bg').addClass('active');

	});

	$('.navi_pc > li .depth2 a:last').on('blur',function(){
	  $('.gnb_bg.active, .depth2.active').removeClass('active');
	  $('.depth2.current').removeClass('current');


	});

	/* lnb */
  $('.lnb_01 > li:not(:has(.lnb_02 > li))').addClass('no_depth');

  $('.lnb_01 > li > a').on('click',function(e){

    e.preventDefault();

    if($(this).parent('li').hasClass('no_depth') == false){

      if($(this).parent().hasClass('active') == false){
        $('.lnb_02').stop().slideUp(400);
        $(this).next('.lnb_02').stop().slideDown(400);

        $('.lnb_01 > li.active').removeClass('active');
        $(this).parent().addClass('active');
      };

    }else{

      var url=$(this).attr('href')

      if($(this).is('[target]') == false){
        window.location=url;
     }else{
       // window.open(url, '_blank');
	   window.location=url;

     }
   };
  });

	// 메인 슬라이드
	$('.banner_01').slick({
     dots: false,
     infinite: true,
     speed: 600,
	 fade:true,
     slidesToShow: 1,
     cssEase: 'ease-out',
     autoplay: true,
     autoplaySpeed: 3000,
     prevArrow: "<button type='button' class='slide01-prev slide_01'></button>",
 	 nextArrow: "<button type='button' class='slide01-next slide_01'></button>"
   });
   $('#slide01_play').hide();

   $('#slide01_pause').click(function(e) {
	   e.preventDefault();
	   $('.banner_01').slick('slickPause');
	   $(this).hide();
	   $('#slide01_play').show();
   });

	$('#slide01_play').click(function(e) {
		e.preventDefault();
		$('.banner_01').slick('slickPlay');
		$(this).hide();
		$('#slide01_pause').show();
	});

	/* mobile_gnb*/

  var clickType="click";
	if ("ontouchstart" in document.documentElement){
		clickType="touchend";
	};

  $('.btn_m_menu').bind('click',function(){

  if($('gnb_mobile').hasClass('active')==false){
    $('.gnb_mobile').addClass('active');
    $('.overlay').addClass('active');
    $('body').addClass('active');
  }else{
    $('.gnb_mobile').removeClass('active');
    $('.overlay').removeClass('active');
    $('body').removeClass('active');
  }
});
  $('.navi_m_close > a').bind('click',function(){

    $('.gnb_mobile').removeClass('active');
    $('.overlay').removeClass('active');
    $('body').removeClass('active');

  });

  $('.mo_depth_02 > ul > li:not(:has(.mo_depth_03 > ul > li))').addClass('no_depth');
  $('.navi_mobile > li:not(:has(.mo_depth_02))').addClass('no_depth');

  $('.navi_mobile > li > a').bind('click',function(){

    if($(this).parent('li').hasClass('no_depth') == false){
      if($(this).parent().hasClass('active') == false){
        $('.mo_depth_02').stop().slideUp(300);
        $(this).next('.mo_depth_02').stop().slideDown(300);

        $('.navi_mobile > li.active').removeClass('active');
        $(this).parent().addClass('active');
      }else{
        $('.mo_depth_02').stop().slideUp(300);
        $('.navi_mobile > li.active').removeClass('active');
      }

    }else{
      window.location=$(this).attr('href');
    }

  });

  $('.mo_depth_02 > ul > li > a').bind('click',function(e){

		if($(this).parent().hasClass('no_depth') == false){

    if($(this).parent().hasClass('active') == false){

			e.preventDefault();
      $('.mo_depth_03').stop().slideUp(300);
      $(this).next('.mo_depth_03').stop().slideDown(300);

      $('.mo_depth_02 > ul > li.active').removeClass('active');
      $(this).parent().addClass('active');
    }else{
			e.preventDefault();

      $('.mo_depth_03').stop().slideUp(300);
      $('.mo_depth_02 > ul > li.active').removeClass('active');
    }
		}
  });

  var mobile_show=false;
  $(window).bind('resize',function(){
  			mobile_show=false;
  			$('.gnb_mobile, .overlay, body').removeClass("active");
  });


	//새소식 tab 이동
	$('.tab_depth01 > li > p:first-child > a').on('click', function(e) {
		 e.preventDefault();

	});
	$('.tab_depth01 > li > p:first-child > a').on('mouseenter focus', function() {
		var subList = $(this).parent().next();
			siblingsList = $('.tab_depth02');

			siblingsList.hide();
			subList.show();
			$(this).parent().parent().siblings().removeClass('active');
			$(this).parents('li').addClass('active');
	});

	// 강좌 테이블 tab

	$('.tab_lecture > li > p > a').bind('click',function(e){
		e.preventDefault();

		if($(this).parents('li').siblings().hasClass('active') == true){
			$(this).parents('li').siblings().removeClass('active');
			$(this).parents('li').addClass('active');
		};
	});

	// 하단배너
	$('.banner-slide').slick({
	  dots: false,
	  autoplay: true,
	  speed: 500,
	  slidesToShow: 5,
	  arrows: false,
	  variableWidth: true,

	  responsive: [{
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4,
			infinite: true
	      }
	    }, {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3
	      }
	    }]
	});
	//멈춤 버튼 클릭
	$('.btnPS').click(function() {
		$('.banner-slide').slick('slickPause');
	});
	//이전 버튼 클릭
	$('.btnPrev').click(function() {
		$('.banner-slide').slick('slickPrev');
	});
	//다음 버튼 클릭
	$('.btnNext').click(function() {
		$('.banner-slide').slick('slickNext');
	});

});

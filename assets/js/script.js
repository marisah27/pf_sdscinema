// JavaScript Document


//トグルメニュー
$(function(){$(".nav_btn").click(function(){
	
	$(".header_nav").slideToggle(200)});

//totop スムーススクロール
$(".totop_button").click(function(){
	$("html,body").animate({scrollTop: 0},500);
});


//×マーク押したら削除
$(".cross_btn").click(function(){
  $(".cross p,.cross ul").slideToggle(500);
});/*h3以外をスライド*/

/*×マークがハンバーガーになるやつ*/
$('.menu-open').click(function(){
    $('.menu-btn').toggleClass('close');
    $('.cross p,.cross ul').slideToggle(500);
  });
	
//ゆっくり横に自動スライド（名画）
 $('.slider').slick({
	 arrows: false,
	 autoplay: true,
	 autoplaySpeed: 0,
	 cssEase: 'linear',
	 speed: 5000,
	 slidesToShow: 5,
	 slidesToScroll: 1,
	 variableWidth: true,
	 });
		
/*----------------*/

//《下から》スクロールしたら下からふわっと表示
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
	
//《右から》スクロールしたら右からふわっと表示
  $(window).scroll(function () {
    $(".effect-fade2").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll2");
      }
    });
  });
  jQuery(window).scroll();
	
//《左から》スクロールしたら左からふわっと表示
	  $(window).scroll(function () {
    $(".effect-fade3").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll3");
      }
    });
  });
  jQuery(window).scroll();
  

//totop
	$(".totop_button").click(function(){$("html,body").animate({scrollTop: 0},500)});

		
		
/------スライドショー--------/
	var dir = -1;
	var interval = 3000;
	var duration = 700;
	var timer;
	$("#slide ul").prepend($("#slide li:last-child"));
	$("#slide ul").css("left",-960);
	
	//ここまでは準備 ここから自動スライド
 timer = setInterval(slideTimer, interval);
 function slideTimer(){
	 if(dir ==-1){
		 $("#slide ul").animate({"left":"-=960px"},duration,
		 function(){
			 $(this).append($("#slide li:first-child"));
			 $(this).css("left",-960);
			 });
		 }else{
		 $("#slide ul").animate({"left":"+=960px"},duration,
		 function(){
			 $(this).prepend($("#slide li:last-child"));
			 $(this).css("left",-960);
			 dir = -1;
			 });
	 }
 }
//ここからボタン
 $("#prevBtn").click(function(){
	 dir = 1;
	 clearInterval(timer);
	 timer=setInterval(slideTimer,interval)
	 slideTimer();
 });
 
 $("#nextBtn").click(function(){
	 dir = -1;
	 clearInterval(timer);
	 timer=setInterval(slideTimer,interval)
	 
	 slideTimer();
 });

//メインスライドショー
   $('.mypattern').slick({
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '10%'
  });

	});
	
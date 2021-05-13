// JavaScript Document

$(function(){
	//トグルメニュー
$(".nav_btn").click(function(){
	$(".header_nav").slideToggle(200)});
	
	/*-《下から》スクロールするとふわと表示するやつ---*/
	$(window).scroll(function () {
    $(".section").each(function () {
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
	
	
	/*-totop スムーススクロール---*/
	
	$(".totop_button").click(function(){
		$("html,body").animate({scrollTop: 0},600);
	});
	
	/*-モーダルウィンドウ---*/
	$(".shop_about a").click(function(){
		$("body").append('<div id="bg">');
		$("body").append('<div id="photo">');
		
		//非表示にする
		$("#bg").hide();
		$("#photo").hide();
		
		//img要素の追加
		$("#photo").html("<img>");
		
		$("#photo img").attr("src",$(this).attr("href"));
		$("#photo img").attr("width",1000);
		$("#photo img").attr("height",675);
		$("#photo img").attr("alt","店の写真");
		
		$("#bg").fadeIn();
		$("#photo").fadeIn();
		
		$("#bg").click(function(){
			$(this).fadeOut(function(){
				       $(this).remove();
				});
			
			
			$("#photo").fadeOut(function(){
				       $(this).remove();
				});
				
			});
			
		
		
		return false;
		
		});
	
});
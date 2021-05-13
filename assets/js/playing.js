// JavaScript Document


$(function(){
	
//トグルメニュー
	$(".nav_btn").click(function(){
	$(".header_nav").slideToggle(200)});
	

//フィルタリング
	$("#buttons button").click(function(){
		var target=$(this).attr("value");
//alert(target);
		$("#list>li").each(function(){
		  $(this).animate({"opacity":0},300,function(){
				$(this).hide();	
				 if($(this).hasClass(target)||target=="all"){
						 $(this).show();
						 $(this).animate({"opacity" : 1}, 300);
						 $("main>div").removeClass("main_pink_bg");
						 $("main>div").addClass("jq_main_pink_bg");
						 $(this).removeClass("rank_content2");
						 $(this).removeClass("rank_content3");
						 $(this).addClass("rank_content1");
					}
			});
		});
	});
	/*-totop スムーススクロール---*/
	
	$(".totop_button").click(function(){
		$("html,body").animate({scrollTop: 0},600);
	});
	
	
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
	
	
});
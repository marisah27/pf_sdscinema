// JavaScript Document


$(function(){
	
	/*下からふわっと別の方法*/
    $(window).scroll(function (){
        $('.pricetable').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
	
});
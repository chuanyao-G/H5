	var currentSwiper = new Swiper('.current-swiper',{
		loop : true,
	});
	currentSwiper.$el.parent().find('.swiper-button-next').on('click',function(){//去除按钮阴影
		currentSwiper.slideNext();
	})
	currentSwiper.$el.parent().find('.swiper-button-prev').on('click',function(){
		currentSwiper.slidePrev();
	})			
	var leftSwiper = new Swiper('.left-swiper',{
		loop : true,
		simulateTouch : false,
	});
	var rightSwiper = new Swiper('.right-swiper',{
		loop : true,
		simulateTouch : false,
	});			
	currentSwiper.controller.control = [leftSwiper,rightSwiper];
	
	//https://www.css-js.com/ jspack压缩
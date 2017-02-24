
// 点击去掉遮罩展示大图
$('body').on('click','.picture-2 li',function(){
	$('.picture-2 li i').addClass('featured-image');
	$(this).find('i').removeClass('featured-image');
	var imgurl=$(this).find('img').attr('src');
	var imgtxt=$(this).find('em').html();
	$('.bigimg img').attr('src',imgurl);
	$('.bigimg i').html(imgtxt);
})


//书店活动上下按钮
var tulong = $('.picture-2 li').length,
    tuwid = 115,
    number=0;
move=function(num){
	$('.picture-2').animate({'marginTop':-num*tuwid+'px'},500,'swing');
};
$('body')
	.on('click','.scroll_tabs .prev',function(){
	    number-=1;
	    if(number<=0){
	    	number=0;
	    }
	    move(number);
	})
	.on('click','.scroll_tabs .next',function(){
        number+=1;
        if(number>tulong-4){
        	number=tulong-4;
        }
	    move(number);
	});


// 书店联盟切换
$('body').on('click','.topic-1 a',function(){	
    $('.topic-1 a').removeClass('til-border');
    $(this).addClass('til-border');
    $('.picture-4 ol').removeClass('booklist');
    $('#'+$(this).attr('data-for')).addClass('booklist');
    
})




$(function() {
//	ctrl+shift+f
	//	获取屏幕的宽高
	var nowpage = 0;
	//	当前页数
	var width = window.innerWidth;
	var height = window.innerHeight;

	$(".content").width(width);
	$(".content").height(4 * height);

	$(".page").width(width);
	$(".page").height(height);
	//不是jquery自带的，是引入的插件
	//手指触屏滑动的事件

	$(".content").swipe({
		swipe:function(event,direction,distance,duration,fingerCount){
			//上拉和下滑的设置
			if(direction=="up"){
				nowpage++;
			}
			if(direction=="down"){
				nowpage--;
			}
			if(nowpage<0){
				nowpage=0;
			}else if(nowpage>3){
				nowpage=3;
			}
			
			$(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
				//滑到第二页，设计效果
				//先让第一个图出现，在让第二个图出现，在css里面将两个图片先隐藏
				if(nowpage==1){
					$(".page2-farm").fadeIn(2000,function(){
						$(".page2-it").fadeIn(2000)
					})
				}
				//滑到第三页，效果设计
				//两个上面的图依次显示
				//车跑，人跟着跑，动态过程
				if(nowpage==2){
					$(".page3-earlytitle").fadeIn(2000);
					$(".page3-lastbustitle").fadeIn(3000);
					$(".page3-bus").animate({left:"-100%"},{duration:2000});
					$(".page3-human").animate({right:"50%"},{duration:3000,complete:function(){
						$(".page3-bus").fadeOut("slow");
						$(".page3-busstation").fadeOut("slow");
						$(".page3-human").fadeOut("slow");
						$(".page3-earlytitle").fadeOut("slow");
						$(".page3-lastbustitle").fadeOut("slow",function(){
							$(".page3-human2").fadeIn("slow");
					    	$(".page3-teamwall").fadeIn("slow",function(){
					    		$(".page3-teamspace").animate({width:"30%"},{duration:400,complete:function(){
					    			 $(".page3-wheretxt").animate({width:"50%"},{duration:400})
					    		}})
					           
					    	});
					        
						})
						
					}});
				}
				
//				if(nowpage==3){
//					$(".page4-lighton").fadeOut("slow",function(){
//						$(".page4-lightoff").fadeIn("slow");
//					})
//				}
                if(nowpage==3){
                	
                }
				
				
			}})
		}
	});
//	animate({要做的动画效果},{duration:动画时长,comlete:动画执行完了要做的事情})
	



    $(".page1-Building").fadeIn(400,function(){
    	$(".page1-flight").animate({width:"70%"},{duration:2000})
    })
    
    $(".page4-lighton").click(function(){
    	$(this).attr("src","img/lightOn.png")
    	$(".page4-bg").fadeOut("slow")
    	$(".page4-title").fadeOut("slow")
    	$(".page4-guide").fadeOut("slow",function(){
    		$(".page4-lightonbg").fadeIn("slow")
    		$(".page4-txt").fadeIn("slow")
    	})
    })
    
    $(".musicbtn").click(function(){
    	var music=$("#music")[0];//相当于 document.getElementByID("#music")
    	if(music.paused){
    		music.play();
    		$(this).attr("src","img/musicBtn.png");
    	}else{
    		music.pause();
    		$(this).attr("src","img/musicBtnOff.png");
    	}
    })

})
/*$(document).ready(function(){
	
})*/

//等文档完成之后再执行js代码
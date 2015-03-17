/**
 * 右边滑动
 * 
	// css 
	横 
	.horizontal-modle{
		position:fixed;
		right:0;
		width:0%;
		background:#707070;
		transition: width 2s;
		background: rgba(112,112,112,0.6);
	}
	
	.horizontal-level{
		position:absolute;
		right:-400px;
		width:400px;
		background:#f0f0f0;
		transition: right 2s;		
	}
	
	.horizontal-modle,.horizontal-level{
		top:0;
		bottom:0;
		z-index:1;
	}
	
	// 竖 
	.vertical-modle{
		position:fixed;
		bottom:0;
		height:0%;
		background:#707070;
		transition: height 2s;
		background: rgba(112,112,112,0.6);
	}
	
	.vertical-level{
		position:absolute;
		bottom:-400px;
		height:400px;
		background:#f0f0f0;
		transition: bottom 2s;		
	}
	
	.vertical-modle,.vertical-level{
		left:0;
		right:0;
		z-index:1;
	}
	
	// html
	<div id="modl">
		<div id="level">
		
		</div>
	</div>
	
	//  js
	$('#horizontal-trigger').broadside({module:'#horizontal-modle',floor:'#horizontal-level',orientation:'horizontal'});
 */
 (function($){

	$.fn.broadside = function(obj){
	
		// 默认
		var config ={
			orientation:'horizontal',// vertical
		}
		
		// 必需
		var me = $(this),
		el = $(obj.module),
		el1 = $(obj.floor);
		
		// 获取值
		for(var i in config){
			config[i] = obj[i];
		}
			
		
		// 返回方法		
		var refult = {
			open:function(){

				if(config.orientation == 'horizontal'){
					$(el).css('width','100%');
					$(el1).css('right',0);
				}
				if(config.orientation == 'vertical'){
					$(el).css('height','100%');
					$(el1).css('bottom',0);
				}
			},
			close:function(){
				
				if(config.orientation == 'horizontal'){
					$(el).css('width','0%');
					$(el1).css('right',-400);
				}
				
				if(config.orientation == 'vertical'){
					$(el).css('height','0%');
					$(el1).css('bottom',-400);
				}
			}
		};
		
		// 打开
		$(me).bind('click',function(e){
			refult.open();
		});
		
		// 阻止事件
		$(el1).bind('click',function(e){
		  if ( e && e.preventDefault ){
				e.preventDefault(); 
			}else {
				window.event.returnValue = false; 
			}
			return false; 
		});
		
		// 关闭
		$(el).bind('click',function(){
			refult.close();
		});
		
		// 返回
		return refult;
		
	}
	
}(Zepto))
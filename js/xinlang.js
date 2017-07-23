$(function(){
	//下拉
	$('.leftNav>li').hover(function(){
		$(this).find('.showList').stop().slideDown()
	},function(){
		$(this).find('.showList').stop().slideUp()	
	})
	$('.leftNav>li>.showList').click(function(){
		$(this).stop().slideUp()
	})
	
	//微博
	$('.searchTxt').click(function(){
		$(this).siblings('.list').stop().slideToggle()
	    return false
	})
	$('.list>li').click(function(){
		$('.list').stop().slideUp()
		$('.searchTxt').html($(this).find('a').html())
		
	})
	$(document).click(function(){
		$('.list').stop().slideUp()
		
	})
	
	//全选
	$('#qx').click(function(){
		$('.list_item li label input').attr('checked',true)
	})
	//全不选
	$('#qbx').click(function(){
		$('.list_item li label input').attr('checked',false)
	})
	//反选
	$('#fx').click(function(){
		$(".list_item li label input").each(function () {
			$(this).attr("checked", !$(this).attr("checked"));
		})
	})
	//选项卡
	
	
	function tabs(cl,parent){
	$(cl).hover(function(){
		var index = $(this).index()
		
		$(this).addClass('active').siblings().removeClass('active')
        var child = $(this).parents(parent).siblings('.tabs').children('.tabs_item')
        child.eq(index).show().siblings('.tabs_item').hide()
		console.log(child.eq(index))
	},function(){
		
	})
	}
	
	tabs('.comTitle_tabs>li','.comTitle')
	tabs('.comTitle_f>.day>a','.comTitle_f')
	
	
	$('.contNav>.contNav_item').hover(function(){
		var index = $(this).index()
		
		$(this).addClass('active').siblings().removeClass('active')
        var child = $(this).parents('.contNav').next('.tabs').children('.tabs_item')
        child.eq(index).show().siblings('.tabs_item').hide()
		console.log(child.eq(index))
	},function(){
		
	})
	
	
	$('.tab_title>li>div').click(function(){
		var index = $(this).parent().index()
		
		$(this).addClass('active').parent().siblings().find('div').removeClass('active')
        var child = $(this).parents('.tab_title').next().children('.item')
        
        child.eq(index).show().siblings('.item').hide()
		console.log(child.eq(index))
	})
	
	
})







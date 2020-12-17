d58(function(){
  var footerlink = d58('.footerlink ul li').length;
  if(footerlink>1){
	d58(".footerlink").addClass("footerlinkC")
  };
  d58("#category_container").hover(
    function(){
	  d58(".cate_bd").stop().animate({
	    height:'525px'
	  }, 200)
	},
	function(){
	  d58(".cate_bd").stop().animate({
	    height:'325px'
	  },200);
	}
  );
  d58("#category_container .item_hd").hover(
    function(){
	  d58(this).find('dd').stop().animate({
		height:'50px'
	  }, 200);
	  d58(".cate_bd").stop().animate({
	    height:'550px'
	  }, 200);
	},
	function(){
	  d58(this).find('dd').stop().animate({
		height:'25px'
	  }, 200);
	  d58(".cate_bd").stop().animate({
	    height:'525px'
	  }, 200)
	}
  );
  d58("#category_container dl").hover(
    function(){
	  d58(this).css('background','#222');
	},
	function(){
	  d58(this).css('background','');
	}
  );
  
  d58('.mainTitle').each(function(index, element){
    d58(element).addClass('f'+(index+1));
  });
  d58('.floor_bd .indexLeft').each(function(index, element){
    d58(element).addClass('f'+(index+1));
  });
  d58('.SalesRank').each(function(index, element){
    d58(element).addClass('f'+(index+1));
  });
  d58('.slideTxtBox .hd ul').find('li').hover(function(){
    d58('.slideTxtBox .hd ul').find('li').removeClass('on');
    d58('.slideTxtBox .bd ul').css({display:'none'});
    d58(this).addClass('on');
    d58('.slideTxtBox .bd ul').eq(d58(this).index()).css({display:'block'});
  });
  
  d58('.AnnouncementTitle').find('span').click(function(){
    d58('.AnnouncementTitle').find('span').removeClass('cur');
    d58('.announcementC').css({display:'none'});
    d58(this).addClass('cur');
    d58('.announcementC').eq(d58(this).index()).css({display:'block'});
  });
});


function AutoScroll1(obj) {
	d58(obj).find("ul:first").animate({
		top: "-45px"
	}, 500, function() {
		d58(this).css({top: "0px"}).find("li:first").appendTo(this);
	});
}
d58(document).ready(function() {
	var myar = setInterval('AutoScroll1(".TheyareBuyingC")', 3000)
	d58(".TheyareBuyingC").hover(function() {clearInterval(myar);}, function() {myar = setInterval('AutoScroll1(".TheyareBuyingC")', 3000)});
});

function footerlink(obj) {
	d58(obj).find("ul:first").animate({
		top: "-23px"
	}, 500, function() {
		d58(this).css({top: "0px"}).find("li:first").appendTo(this);
	});
}
d58(document).ready(function() {
	var myar = setInterval('footerlink(".footerlinkC")', 3000)
	d58(".footerlinkC").hover(function() {clearInterval(myar);}, function() {myar = setInterval('footerlink(".footerlinkC")', 8000)});
});

d58(document).ready(function(){
jQuery(function(){
  jQuery(".indexmax .Btn").click(function(){
    jQuery('.indexmax').slideUp(500);
    jQuery('.indexmin').slideDown(500);
  });
  jQuery(".indexmin .Btn").click(function(){
    jQuery('.indexmin').slideUp(500);
    jQuery('.indexmax').slideDown(500);
  });
});
setTimeout(function(){
  jQuery('.indexmin').slideUp(500);
  jQuery('.indexmax').slideDown(500);
},500);
setTimeout(function(){
  jQuery('.indexmax').slideUp(500);
  jQuery('.indexmin').slideDown(500);
},3500);
});
d58(function(){
	var KF = d58(".footer_kf");
	var wkbox = d58(".keifu_box");
	var kf_close = d58(".keifu .keifu_close");
	var icon_keifu = d58(".icon_keifu");
	var kH = wkbox.height();
	var kW = wkbox.width();
	var wH = d58(window).height();
	KF.css({height:kH});
	icon_keifu.css("bottom",parseInt((kH-10)/5));
	var KF_top = (wH-kH)/0;
	if(KF_top<0) KF_top=0;
	KF.css("top",KF_top);
	d58(kf_close).click(function(){
		KF.animate({width:"0"},200,function(){
			wkbox.hide();
			icon_keifu.show();
			KF.animate({width:26},300);		
		});	
	});
	d58(icon_keifu).click(function(){
			d58(this).hide();
			wkbox.show();
			KF.animate({width:kW},200);
	});
});


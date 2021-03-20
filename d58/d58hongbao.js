var _popurl = 'https://www.baidu.com'; //点击图片跳转网址
var _popimg = 'https://img.ytop8.com/zfbongbao.gif'; //图片网址
var _poptime = '1000'; //延迟时间以秒计算，1000等于1秒，5分钟等于300000秒
var _poptop = '100px'; //距离顶部高度
var _poptxt = '温馨提示'; //文字提示
var _popcss = '<style type="text/css">#bodybg{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:1000;opacity:0.5;filter:alpha(Opacity=50);-moz-opacity:0.5;}.popup_box{display:none;width:330px;border:0;border-radius:6px;margin:0 auto;background:none; position:fixed;left:0;right:0;top:'+_poptop+';z-index:999999;color:#444}#tg_cont{padding:10px 15px 10px;}.popup_box .popup_cont{padding:0;color:#444;position: relative;}.popup_cont .closepop{    position: absolute;z-index: 9999;right: 5px;top: 5px;font-size:12px;cursor:pointer;border:0;border-radius: 4px;padding: 3px;}.popup_box .popup_cont img{border-radius:6px;width:100%;height:auto}#open_popup{cursor:pointer}@media screen and (max-width:799px){.popup_box{width:245px;margin:0 auto}}</style>';
var _pophtml = '<div id="bodybg"></div><div class="popup_box"><div class="popup_cont"><span class="closepop">关闭</span><a href="'+_popurl+'" target="_blank"><img src="'+_popimg+'" /></a></div></div>';
var _popObj=document.createElement("div"); 
_popObj.innerHTML=_popcss+_pophtml;
var _popfirst=document.body.firstChild;
document.body.insertBefore(_popObj,_popfirst);
d58(document).ready(function(){
  if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
     setTimeout(function(){
	  d58('#bodybg,.popup_box').fadeIn(1000);
	 },_poptime);
  }
 d58('.closepop').click(function(){
  d58('#bodybg,.popup_box').fadeOut();	
 })
})
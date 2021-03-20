var _popdat = [
{"url":"http://jy.mii5.com/zbapp.html?d58=chaping","pic":"https://img.ytop8.com/chatbao.png"},
{"url":"http://jy.mii5.com/mvod.html?d58=chaping","pic":"https://img.ytop8.com/vodbao.png"},
];
var _poprand = Math.floor(Math.random()*_popdat.length);
var _poptime = '300000'; //延迟时间以秒计算，1000等于1秒，5分钟等于300000秒
var _poptop = '220px'; //距离顶部高度
var _poptxt = '温馨提示'; //文字提示
var _popcss = '<style type="text/css">#bodybg{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:9999;opacity:0.5;filter:alpha(Opacity=50);-moz-opacity:0.5;}.popup_box{display:none;width:330px;border:0;border-radius:6px;margin:0 auto;background:none; position:fixed;left:0;right:0;top:'+_poptop+';z-index:999999;color:#444}#tg_cont{padding:10px 15px 10px;}.popup_box .popup_cont{padding:0;color:#444;position: relative;}.popup_cont .closepop{    position: absolute;z-index: 9999;right: 5px;top: 5px;font-size:12px;cursor:pointer;border:0;border-radius: 4px;padding: 3px;}.popup_box .popup_cont img{border-radius:6px;width:100%;height:auto}#open_popup{cursor:pointer}@media screen and (max-width:799px){.popup_box{width:245px;margin:0 auto}}</style>';
var _pophtml = '<div id="bodybg"></div><div class="popup_box"><div class="popup_cont"><span class="closepop">关闭</span><a href="'+_popdat[_poprand]["url"]+'" target="_blank"><img src="'+_popdat[_poprand]["pic"]+'" /></a></div></div>';
var _popObj=document.createElement("div"); 
_popObj.innerHTML=_popcss+_pophtml;
var _popfirst=document.body.firstChild;
document.body.insertBefore(_popObj,_popfirst);
$(document).ready(function(){
  if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
     setTimeout(function(){
	  $('#bodybg,.popup_box').fadeIn(1000);
	 },_poptime);
  }
 $('.closepop').click(function(){
  $('#bodybg,.popup_box').fadeOut();	
 })
})          



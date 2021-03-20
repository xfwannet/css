$(document).ready(function () {
             let data= {
                "status": {
                    "code": 200,
                    "message": "success"
                },
                "response": {
                    "ios": {
                        "status": 1,
                        "href": ["http://jy.mii5.com/voddown.html"]
                    },
                    "android": {
                        "status": 1,
                        "href": ["http://jy.mii5.com/voddown.html"]
                    },
                    "pwa": {
                        "status": 1,
                        "href": ["https:\/\/ap.myfavourite.cn\/qdl-pwa.mobileconfig", "https:\/\/ap.huachuanchuan.cn\/qdl-pwa.mobileconfig"]
                    },
                    "h5": {
                        "status": 1,
                        "href": ["https:\/\/redirect.jmbjfw.cn"]
                    },
                    "social": {
                        "status": 1,
                        "href": ["https:\/\/pt.im\/joinchat\/lDMX2bOMFAwO4-pMo8tLIw"]
                    },
                    "ios_tf": {
                        "status": 1,
                        "href": "https:\/\/testflight.apple.com\/join\/6J7MTDJ8"
                    }
                }
            };
            // console.log(data);
            var list = ['android', 'ios', 'pwa'];
            // android、ios、pwa
            list.forEach(function (item) {
                if (data.response[item].status === 1) {
                    // pwa 行銷代碼
                    if (item === 'pwa') {
                        $(`.top-content .${item}-1`).attr('href', data.response[item].href[0] + window.location.search)
                        $(`.download-btn-group.desktop .${item}-1`).attr('href', data.response[item].href[0] + window.location.search)
                        $(`.download-btn-group.${item} .${item}-1`).attr('href', data.response[item].href[0] + window.location.search)
                    } else {
                        $(`.top-content .${item}-1`).attr('href', data.response[item].href[0])
                        $(`.download-btn-group.desktop .${item}-1`).attr('href', data.response[item].href[0])
                        $(`.download-btn-group.${item} .${item}-1`).attr('href', data.response[item].href[0])
                    }
                    // 上方按鈕
                    $(`.top-content .${item}-1`).removeClass('btn-loading')
                    $(`.top-content .${item}-1 span`).text($(`.top-content .${item}-1`).data('text'))
                    
                    // 中間按鈕
                    $(`.download-btn-group.desktop .${item}-1`).removeClass('btn-loading')
                    $(`.download-btn-group.desktop .${item}-1 span`).text($(`.download-btn-group.desktop .${item}-1`).data('text'))

                    $(`.download-btn-group.${item} .${item}-1`).removeClass('btn-loading')
                    $(`.download-btn-group.${item} .${item}-1 span`).text($(`.download-btn-group.${item} .${item}-1`).data('text'))
                    if (data.response[item].href[1]) {
                        // pwa 行銷代碼
                        if (item === 'pwa') {
                            $(`.download-btn-group.${item} .${item}-2`).attr('href', data.response[item].href[1] + window.location.search)
                        } else {
                            $(`.download-btn-group.${item} .${item}-2`).attr('href', data.response[item].href[1])
                        }
                        $(`.download-btn-group.${item} .${item}-2`).removeClass('btn-loading')
                        $(`.download-btn-group.${item} .${item}-2 span`).text($(`.download-btn-group.${item} .${item}-2`).data('text'))
                    } else {
                        $(`.download-btn-group.${item} .${item}-2`).addClass('btn-disabled')
                        $(`.download-btn-group.${item} .${item}-2 span`).text('維修中')
                    }
                } else {
                    // 上方按鈕
                    $(`.top-content .${item}-1`).addClass('btn-disabled')
                    $(`.top-content .${item}-1 span`).text('維修中')
                    // 中間按鈕
                    $(`.download-btn-group.desktop .${item}-1`).addClass('btn-disabled')
                    $(`.download-btn-group.desktop .${item}-1 span`).text('維修中')

                    $(`.download-btn-group.${item} .${item}-1`).addClass('btn-disabled')
                    $(`.download-btn-group.${item} .${item}-1 span`).text('維修中')

                    $(`.download-btn-group.${item} .${item}-2`).addClass('btn-disabled')
                    $(`.download-btn-group.${item} .${item}-2 span`).text('維修中')
                }
         

           
        
    });

    var clipboardJS = new ClipboardJS('#copy');
    $('.year').text(new Date().getFullYear());

    var md = new MobileDetect(window.navigator.userAgent);
    var body = $('body');

    if (md.os() === 'iOS') {
        body.addClass('ios');
        // $('source').attr('src', 'video/girl-mobile.mp4');
        // $('.myVideo')[0].load();
        $('.item-certificate').addClass('active');
    } else if (md.os() === 'AndroidOS') {
        body.addClass('android');
        // $('source').attr('src', 'video/girl-mobile.mp4');
        // $('.myVideo')[0].load();
        $('.item-android').addClass('active');
    } else {
        body.addClass('desktop');
        // $('source').attr('src', 'video/girl-desktop.mp4');
        // $('.myVideo')[0].load();
        $('.item-certificate').addClass('active');
    }

    // 切換教學tab選單
    $('.btn-install').on('click', function (e) {
        e.preventDefault();
        $('.btn-install').removeClass('active');
        $('.btn-install').removeClass('default');
        $('.tutorial-content-item').removeClass('active');
        $(this).addClass('active');
        $('.item-' + $(this).attr('href')).addClass('active');
    });

    // 桌機版開啟qrcode
    $('.scan-qrcode, .btn-mobile').on('click', function (e) {
        if ($(this).attr('class').indexOf('scan-qrcode') > -1) {
             // 生成qrcode
             e.preventDefault();
             $('.qrcode-img').empty();
             $('.qrcode-img').qrcode({
                 width: 260,
                 height: 260,
                 text: $(this).attr('href')
             });
             $('.qrcode').addClass('active');
        } else if ($(this).attr('class').indexOf('btn-mobile') > -1) {
            if (md.os() === 'iOS' || md.os() === 'AndroidOS') {
                var queryString = window.location.search;
                if (queryString !== '') {
                    var input = $('#queryString');
                    var button = $('#copy');
                    input.val(queryString)
                    button.click();
                }
            }
        }
    });

    // 關閉qrcode畫面
    $('.qrcode').on('click', function (e) {
        e.preventDefault();
        $('.qrcode').removeClass('active');
    });

    // ios滑動ios教學位置
    $('.notice').on('click', function (e) {
        $('.btn-install').removeClass('active');
        $('.tutorial-content-item').removeClass('active');

        $('.btn-install-ios').addClass('active');
        $('.item-ios').addClass('active');
    });


    // 回到網頁頂端
    $('.go-top').on('click', function (e) {
        var scrollDuration = 300;
        var scrollStep = -window.scrollY / (scrollDuration / 15)
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });





    
});
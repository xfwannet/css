(function (c, d) {
  var e = document.documentElement || document.body,
      a = "orientationchange" in window ? "orientationchange" : "resize",
      b = function () {
        var f = e.clientWidth;
        // var f = e.clientHeight;
        e.style.fontSize = (f >= 750) ? "100px" : 100 * (f / 750) + "px"
        // e.style.fontSize = (f >= 1100) ? "100px" : 100 * (f / 1100) + "px"
      };
  b();
  c.addEventListener(a, b, false)
})(window);
function isWeiXin(){
    return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) === "micromessenger"
}
function isIos() {
    return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
}
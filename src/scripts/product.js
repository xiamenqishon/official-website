$(function () {
    var url = window.location.href.split("#");
    if(url.length > 1){
        var tabId = url[1];
        if(!!tabId){
            var _this = $("a[href=#"+tabId+"]");
            var tabId = $("#"+tabId);
            _this.parent().find("a.active").removeClass("active");
            _this.addClass("active");
            tabId.parent().find("div.active").removeClass("active in");
            tabId.addClass("active in");
        }
    }
})
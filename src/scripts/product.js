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

    /**
     * 产品页footer跳转问题
     */
    $('.nav-tab-footer').click(function () {
        var name = $(this).attr('name');
        if(name){
            $('.nav-tab').parent().find('a').removeClass("active");
            $('.nav-tab').eq(name).addClass('active')
            positioning(0,0);
        }
    });


})
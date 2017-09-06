/**
 * description：通用js文件
 * author：洪俊勇
 * createTime：2017/8/31
 * version:1.0.0.0
 * history:
 *   1、
 *   2、
 */
$(function(){
    /**
     * 通用：tab页面切换(tab在同级)
     * active为灰色背景
     */
    $('.nav-tab, .nav-tab-span').click(function () {
        $(this).parent().find('.active').removeClass();
        $(this).addClass('active');
    });
    /**
     * 通用：tab页面切换(tab在上上级)
     * active为白色背景
     */
    $('.nav-tab-child').click(function () {
        $(this).parent().parent().find('#active').attr('id','');
        $(this).attr('id','active');
    });

});

/**
 * 通用url解析(获取到url上的值)
 * @returns {Object}
 * 如何调用？
 * var request = getRequest(),
 * total = request['total'];
 */
function getRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1),
            strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

/**
 * description：通用js文件
 * author：洪俊勇
 * createTime：2017/8/31
 * version:1.0.0.0
 * history:
 *   1、
 *   2、
 */
/**
 * 通用：tab页面切换(tab在同级)
 */
$('.nav-tab').click(function () {
    $(this).parent().find(".active").removeClass();
    $(this).addClass("active");
})
/**
 * 通用：tab页面切换(tab在上上级)
 */
$('.nav-tab-child').click(function () {
    $(this).parent().parent().find("#active").attr("id","");
    $(this).attr("id","active");
})
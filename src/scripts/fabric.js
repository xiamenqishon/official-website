/**
 * description：
 * author：洪俊勇
 * createTime：2017/9/6
 * version:1.0.0.0
 * history:
 *   1、
 *   2、
 */
$(function () {
    to_customization();
});
/**
 * 进入文档中心
 */
function to_customization() {
    var request = getRequest(),
        tag = request['tag'];
    if(tag == 1){//tag为1：从【SaaS定制平台】进入【SaaS面料平台】
        $('.my-tab').parent().find('.active').removeClass();
        $('.my-tab').find('a').eq(1).addClass('active');
        $('.my-tab').find('a').eq(1).click();
    }
}
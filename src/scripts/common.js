/**
 * description：通用js文件
 * author：洪俊勇
 * createTime：2017/8/31
 * version:1.0.0.0
 * history:
 *   1、
 *   2、
 */
$(function () {
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
        $(this).parent().parent().find('#active').attr('id', '');
        $(this).attr('id', 'active');
    });

    /*
    *   tab
    *  
        <div class="webTab">
            <a name="tab1" class="nav-tab-span">tab1</a>
            <a name="tab2" class="nav-tab-span">tab2</a>
        </div>
        <div>
            <div id="tab1"></div>
            <div id="tab2"></div>
        </div>
    *
    */
    function ChangeTabComponent() {
        var $tabList = $('.webTab');

        function changeTab(tabPanel) {

            var tabPanelList = [];

            // 获取显示的panel
            $(tabPanel).find('.nav-tab-span').each(function (index, item) {
                tabPanelList.push($(item).attr('name'));
            })

            $(tabPanel).find('.nav-tab-span').on('click', function () {

                console.log($(tabPanel).find('.nav-tab-span'))



                clearClass(tabPanelList);
                console.log()
                $('#' + $(this).attr('name')).show();

            })

            // 隐藏不必要
            clearClass = function (arr) {
                for (var i in arr) {
                    $('#' + arr[i]).hide();
                }
            }

        }

        for (var i = 0; i < $tabList.length; i++) {
            (function (d) {
                changeTab($tabList[d]);
            })(i)
        }
    }
    ChangeTabComponent();

});

/**
 * 通用：滚动条定位
 * 调用：
 * positioning(0,0);            // 置顶
 * positioning(0,"bottom");     // 置底
 * @param x
 * @param y
 */
function positioning(x, y) {
    if (y == "bottom") {              // 滚动条置底
        window.scrollTo(x, document.body.scrollHeight);
    } else {                          // 根据X轴、Y轴位置定位滚动条
        window.scrollTo(x, y);
    }
}
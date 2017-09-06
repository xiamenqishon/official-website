$(function () {
    var banner = new Swiper('.banner', {
        // autoplay: 5000, //可选选项，自动滑动
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
    var pain = new Swiper('.pain', {
        initialSlide: 0,
        //拖拽滑动
        onSlideChangeStart: function() {
            if(!pain) return;
            $(".tab-horizontal li.active").removeClass('active');
            $(".tab-horizontal li").eq(pain.activeIndex).addClass('active');
        }
    });

    var resolveSwiper = new Swiper('.resolve-swiper',{
        autoplay: 5000, //可选选项，自动滑动
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 20
    })

    $(".tab-horizontal li").on('touchstart mousedown', function(e) {
        e.preventDefault();
        $(".tab-horizontal .active").removeClass('active');
        $(this).addClass('active');
        pain.slideTo($(this).index());
    });

    /*
     * 企业问题鼠标滑过、点击事件
     * */
    $(".panel-default").hover(function () {
        $(".panel-default .active").removeClass("active");
        $(this).find(".question-content").addClass("active");
        var $resolve = $(this).closest('.swiper-slide').find(".resolve-content");
        $resolve.parent().find(".active").removeClass("active");
        $resolve.eq($(this).index()).addClass("active");
    })


})
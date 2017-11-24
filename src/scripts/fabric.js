/*
* zhibin.zhao
* 2017.11.23
* */
$(function () {
    $(".my-tab2 a, .nav-tab-span").off("click").on("click", function () {
        if($(this).hasClass("active")) return;
        $active = $(this).siblings(".active");
        $active.removeClass("active");
        $("#"+$active.attr("name")).removeClass("active");
        $(this).addClass("active");
        $("#"+$(this).attr("name")).addClass("active");
    })
})
/**
 * Created by czx on 2016/6/21.
 */
// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(118.184641,24.498631);
map.centerAndZoom(point, 19);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);               // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
map.enableScrollWheelZoom(true);
var opts = {
    width : 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title : "软件园二期" , // 信息窗口标题
    enableMessage:true,//设置允许信息窗发送短息
    message:"？戳下面的链接看下地址喔~"
}
var infoWindow = new BMap.InfoWindow("地址：望海路25号楼厦门启尚科技有限公司", opts);  // 创建信息窗口对象
marker.addEventListener("click", function(){
    map.openInfoWindow(infoWindow,point); //开启信息窗口
});
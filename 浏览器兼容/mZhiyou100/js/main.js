/* 53客服 */

// (function () {
//     var _53code = document.createElement("script")
//     _53code.src = "//tb.53kf.com/code/code/10138919/1"
//     var s = document.getElementsByTagName("script")[0]
//     s.parentNode.insertBefore(_53code, s)

//     _53code.onload = function () {
//         var kefu = document.querySelector("#zxkf")

//         kefu.onclick = function () {
//             var icon = document.querySelector("#mobile_icon_div")
//             location.href = icon.href
//         }
//     }
// })()


/* 页面滚动时导航固定到顶部 */

var fixTop = $('nav')

$(window).scroll(function () {
    var top = $(document).scrollTop()
    if (top > 100) {
        fixTop.addClass('fixTop')
    } else {
        fixTop.removeClass('fixTop')
    }
})

// 左右滑动切换页面

var body = $('body').hammer()
$('body').hammer().bind('swiperight', function (ev) {
    var i = $('.active').index()
    i--;
    if (i == -1) {
        i = 4
    }
    $('li').eq(i).addClass('active').siblings().removeClass('active')
    $('li').eq(i).click()
})
$('body').hammer().bind('swipeleft', function (ev) {
    var i = $('.active').index()
    i++;
    if (i == 5) {
        i = 0
    }
    $('li').eq(i).addClass('active').siblings().removeClass('active')
    $('li').eq(i).click()
})


// 轮播图
// var l = $('.ban_dots_active').index();
// 不能使用i，火狐下会出错
// setInterval(function () {
//     l++;
//     l = l == 4 ? 0 : l;
//     $('#imgs').css({
//         position:'relative',
//         left:  -l * 100 + 'vw'
//     });
//     $('#dots li').eq(l).addClass('ban_dots_active').siblings().removeClass('ban_dots_active');
// }, 3000)


// 轮播图
var lbi = 0
$('#banner #imgs li').eq(0).fadeIn(300).siblings().fadeOut(200)
var timer = setInterval(lunbo, 3000)
function lunbo(){
    lbi++
    if(lbi == 4){
        lbi = 0
    }
    $('#banner #imgs li').eq(lbi).fadeIn(300).siblings().fadeOut(200)
    $('#banner #dots li').css('background-color', 'transparent')
    $('#banner #dots li').eq(lbi).css('background-color', '#fff')
}
$('#banner #dots li').mouseenter(function(){
    clearInterval(timer)
    lbi = $(this).index()
    $('#banner #dots li').css('background-color', 'transparent')
    $('#banner #imgs li').eq(lbi).fadeIn(300).siblings().fadeOut(200)
    $('#banner #dots li').eq(lbi).css('background-color', '#fff') 
})
$('#banner #dots li').mouseleave(function(){
    timer = setInterval(lunbo, 3000) 
})

// 统计分析代码
// var  _hmt  =  _hmt  ||  [];
// (function ()  {  
//     var  hm  =  document.createElement("script");  
//     hm.src  =  "//hm.baidu.com/hm.js?f332255684b865b63a32b53e00b3f7a8";  
//     var  s  =  document.getElementsByTagName("script")[0];   
//     s.parentNode.insertBefore(hm,  s);
// })();
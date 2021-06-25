$(document).ready(function () {
    var onOff = true;
    var div = $(".div");
    div.click(function () {
        if (div.onOff) {
            div.text("关注我");
            div.onOff = false;
        } else {
            div.text("已关注");
            div.css({'margin':'0px 10px'})
            div.onOff = true;
        }
    });
});
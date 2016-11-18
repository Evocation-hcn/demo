/**
 * Created by HUCC on 2016/5/15.
 */
$.fn.changeBgColor = function (color) {
    //this:jquery对象
    //$("div").css("backgroundColor", "red");
    this.css("backgroundColor", color);
    return this;
};

$.changeColor = function () {
    alert("我执行了");
};
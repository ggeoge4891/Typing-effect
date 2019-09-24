var texts = ["儲備幹部" , "資深老屁股" , "小小小幹部"]; // 陣列
var speed = 1000;                                    // 打字速度
var index = 0;                                       // 編號
var count = 0;                                       // 字數
var id ="type-box";

function type(){

    var box = document.getElementById(id);
    box.innerHTML = texts[index];

}

document.addEventListener("DOMContentLoaded" , type);
$(document).ready(function(){
    $('.nav .gnb>li').hover(function(){
        $(this).find('ul').stop().slideDown();
    },function(){
        $(this).find('ul').stop().slideUp();
    });
});
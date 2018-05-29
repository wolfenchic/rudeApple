$(document).ready(function(){

  
$('a').mouseenter(function() {
 	$(this).css("color", "#92a48c");
 });

$('a').mouseleave(function(){
    $(this).css("color", "#4a4a4f");
});

$(".card").mouseenter(function(){
    $(this).add(".cardTitle").css("background-color", "#92a48c").css("color", "white");
    $(".btn-default").css("background-color", "white").css("color", "#92a48c");
    
});

$(".card").mouseleave(function(){
    $(this).add(".cardTitle").css("background-color", "white").css("color", "#4a4a4f");
    $(".btn-default").css("background-color", "#92a48c").css("color", "white");
    $(".cardTitle").css("background-color", "white").css("color", "#5EC5C4")
   
});

$(".categoryCard2").mouseenter(function(){
    $(this).add(".cardTitle").css("background-color", "#5EC5C4").css("color", "white");
    $(".btn-default").css("background-color", "white").css("color", "#92a48c");
    
});

$(".categoryCard2").mouseleave(function(){
    $(this).add(".cardTitle").css("background-color", "white").css("color", "#4a4a4f");
    $(".btn-default").css("background-color", "#92a48c").css("color", "white");
    $(".cardTitle").css("background-color", "white").css("color", "#92a48c")
   
});

});





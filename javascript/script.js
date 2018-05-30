$(document).ready(function(){

  
$('a').mouseenter(function() {
 	$(this).css("color", "#92a48c");
 });

$('a').mouseleave(function(){
    $(this).css("color", "#4a4a4f");
});




$(".card").mouseenter(function(){
    $(this).add(".cardTitle").css("background-color", "#92a48c").css("color", "white");
  
    
});

$(".card").mouseleave(function(){
    $(this).add(".cardTitle").css("background-color", "white").css("color", "#4a4a4f");
    $(".cardTitle").css("background-color", "white").css("color", "#5EC5C4")
   
});

$(".categoryCard2").mouseenter(function(){
    $(this).add(".cardTitle").css("background-color", "#5EC5C4").css("color", "white");
    
    
});

$(".categoryCard2").mouseleave(function(){
    $(this).add(".cardTitle").css("background-color", "white").css("color", "#4a4a4f");
    $(".cardTitle").css("background-color", "white").css("color", "#92a48c")
   
});

});





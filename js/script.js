//menu
function openNav() {
    document.getElementById("mySidenavTop").style.width = "280px";
  }

function closeNav() {
    document.getElementById("mySidenavTop").style.width = "0";
}

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});
(function(){
 
  $("#cart").on("click", function() {
    $(".top").fadeToggle( "slow");
  });
  
})();
$(".logo-buy , .logo-search").on("click", function() {
        $(this).parent().find('.top , .timkiem').slideToggle('fast');
    });
jQuery(document).ready(function($) {
    "use strict";
// Fiter......................................................................................
    $('.button2').on('click', function(){
    $("#mySidenavv").css("width","300px");
    $(".collapsee").css("visibility","visible");
});

$('.closebtn').on('click', function(){
    $("#mySidenavv").css("width","0");
    $(".collapsee").css("visibility","hidden");
});
});
$('#btn-left1').on('click', function(){
    var x= $("#btn-left1").attr("aria-expanded");
    if(x=="true"){
        $(".up1").css("display","none");
        $(".down1").css("display","inline-block");
    }
    else{
         $(".down1").css("display","none");
         $(".up1").css("display","inline-block");
    }
});
$('#btn-left2').on('click', function(){
    var x= $("#btn-left2").attr("aria-expanded");
    if(x=="true"){
        $(".up2").css("display","none");
        $(".down2").css("display","inline-block");
    }
    else{
         $(".down2").css("display","none");
         $(".up2").css("display","inline-block");
    }
});
$('#btn-top1').on('click', function(){
    var x= $("#btn-top1").attr("aria-expanded");
    if(x=="true"){
        $(".up-top1").css("display","none");
        $(".down-top1").css("display","inline-block");
    }
    else{
         $(".down-top1").css("display","none");
         $(".up-top1").css("display","inline-block");
    }
});
$('#btn-top2').on('click', function(){
    var x= $("#btn-top2").attr("aria-expanded");
    if(x=="true"){
        $(".up-top2").css("display","none");
        $(".down-top2").css("display","inline-block");
    }
    else{
         $(".down-top2").css("display","none");
         $(".up-top2").css("display","inline-block");
    }
});
$('#btn-top2-1').on('click', function(){
    var x= $("#btn-top2-1").attr("aria-expanded");
    if(x=="true"){
        $(".up-top2-1").css("display","none");
        $(".down-top2-1").css("display","inline-block");
    }
    else{
         $(".down-top2-1").css("display","none");
         $(".up-top2-1").css("display","inline-block");
    }
});
$('#btn-top2-2').on('click', function(){
    var x= $("#btn-top2-2").attr("aria-expanded");
    if(x=="true"){
        $(".up-top2-2").css("display","none");
        $(".down-top2-2").css("display","inline-block");
    }
    else{
         $(".down-top2-2").css("display","none");
         $(".up-top2-2").css("display","inline-block");
    }
});
$('#btn-top2-3').on('click', function(){
    var x= $("#btn-top2-3").attr("aria-expanded");
    if(x=="true"){
        $(".up-top2-3").css("display","none");
        $(".down-top2-3").css("display","inline-block");
    }
    else{
         $(".down-top2-3").css("display","none");
         $(".up-top2-3").css("display","inline-block");
    }
});
$('#btn-top3').on('click', function(){
    var x= $("#btn-top3").attr("aria-expanded");
    if(x=="true"){
        $(".up-top3").css("display","none");
        $(".down-top3").css("display","inline-block");
    }
    else{
         $(".down-top3").css("display","none");
         $(".up-top3").css("display","inline-block");
    }
});
$('#btn-top4').on('click', function(){
    var x= $("#btn-top4").attr("aria-expanded");
    if(x=="true"){
        $(".up-top4").css("display","none");
        $(".down-top4").css("display","inline-block");
    }
    else{
         $(".down-top4").css("display","none");
         $(".up-top4").css("display","inline-block");
    }
});
$('#btn-top5').on('click', function(){
    var x= $("#btn-top5").attr("aria-expanded");
    if(x=="true"){
        $(".up-top5").css("display","none");
        $(".down-top5").css("display","inline-block");
    }
    else{
         $(".down-top5").css("display","none");
         $(".up-top5").css("display","inline-block");
    }
});
$('#btn-top6').on('click', function(){
    var x= $("#btn-top6").attr("aria-expanded");
    if(x=="true"){
        $(".up-top6").css("display","none");
        $(".down-top6").css("display","inline-block");
    }
    else{
         $(".down-top6").css("display","none");
         $(".up-top6").css("display","inline-block");
    }
});
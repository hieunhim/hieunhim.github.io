function openNav() {
    document.getElementById("mySidenavTop").style.width = "250px";
  }

function closeNav() {
    document.getElementById("mySidenavTop").style.width = "0";
}

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
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
$('#btn1').on('click', function(){
    var x= $("#btn1").attr("aria-expanded");
    if(x=="true"){
        $(".up1").css("display","none");
        $(".down1").css("display","inline-block");
    }
    else{
         $(".down1").css("display","none");
         $(".up1").css("display","inline-block");
    }
});
$('#btn4').on('click', function(){
    var x= $("#btn4").attr("aria-expanded");
    if(x=="true"){
        $(".up4").css("display","none");
        $(".down4").css("display","inline-block");
    }
    else{
         $(".down4").css("display","none");
         $(".up4").css("display","inline-block");
    }
});
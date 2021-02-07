$(document).ready(function() {

$("#bar1").click(function(){
    $("#bar2").show();
  });

  $("#bar1").dblclick(function(){
        $("#bar2").hide();
  });

$("#strawberrydraggable").draggable();
$("#crumbs").draggable();

$("#strawberrydraggable").click(function(){
        $("#strawberrydraggable").hide();
        $("#crumbs").show();
        });

$("#nudedraggable").draggable();
$("#crumbs").draggable();

$("#nudedraggable").click(function(){
        $("#nudedraggable").hide();
        $("#crumbs").show();
        });

$("#oreodraggable").draggable();
$("#crumbs").draggable();

$("#oreodraggable").click(function(){
        $("#oreodraggable").hide();
        $("#crumbs").show();
        });

$("#earphones").hover(function(){
         $("#daydream").css("color", "pink");
         });

$("#tired").hover(function(){
          $("#straight").css("color", "brown");
          });

$("#blackandwhite").hover(function(){
          $("#remote").css("color", "black");
          });
  })

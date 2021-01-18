$(document).ready(function() {alert("searchforme");

 $("#quote1overlay").draggable();

 $("#quote2overlay").draggable();

 $("#quote3overlay").draggable();

 $("#quote1").click(function(){
     $("#quote1surprise").show();
 });

  $("#quote2").click(function(){
     $("#quote2surprise").show();
         });

 $("#quote3").click(function(){
        $("#quote3surprise").show();
          });

$("#core").hover(function(){
    $("#emotional").css("color", "red");
          });

$("#source").hover(function(){
    $("#problem").css("color", "red");
            });

$("#design").hover(function(){
    $("#visual").css("color", "red");
            });
})

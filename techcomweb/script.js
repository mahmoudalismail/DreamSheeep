


function init(){

  var windowheight = $(window).height()
  var windowwidth = $(window).width()
  var menuon = false;
  $("#menu").click(function(){
    if (menuon == false){
    $("#menubar").animate({height: "500px"},1000,
      function(){
        //animate complete
      });
    menuon = true;
    }else{
    $("#menubar").animate({height: "0px"},1000,
      function(){
        //animate complete
      }); 
    menuon = false;
    }
  });

   $(".title1").fadeIn(1000, function(){
    $(".title2").fadeIn(1000, function button(){

    });
  });


   $("#mainbutton").click(function(){
    $("#page1").animate({display: "none"},1000,
      function(){
        $("#page2").animate({display: "block"},1000,
          function(){

          });
      });
   });

};
 
 $("#startbutton").hover(function(){
  alert("lolol")
  $("#startword").css("display","block")
 });
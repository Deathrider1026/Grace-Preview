$(document).ready(function(){
  $("#bolt")
  .animate({"marginTop": "+=225px"}, 800)
  .delay(500)
  .fadeOut(function(){
    $("#red").fadeOut(function(){
      $("#slideo").slideDown(1000);
    });
  });
});

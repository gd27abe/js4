/*js file*/
$(function(){

  var count = 0;
  var countMax = 10;
  var $txt = $(".container__count-text");
  var $btn = $(".container__btn");
  var btn_fade_spd = 300;
  var $max = $(".count_max");
  var $min = $(".count_min");

  $btn.mouseover(
    function(){
      $(this).stop().fadeTo(btn_fade_spd,0.5);
    }
  );
  $btn.mouseout(
    function(){
      $(this).stop().fadeTo(btn_fade_spd,1);
    }
  );

  $btn.click(function(){
    num = $(this).hasClass("increment") ? 1 : -1;
    count += (num);
    if( count < 0 ) count = 0;
    if( count > countMax ) count = countMax;
    $txt.text(count);
    $(this).css("opacity","0.2")
    $(this).stop().fadeTo(btn_fade_spd,1);
    if( count >= 1 && count <= 9) $max.hide(); $min.hide();
    if( count >= 10 ) $max.show();
    if( count <= 0 ) $min.show();
  })

})//end function

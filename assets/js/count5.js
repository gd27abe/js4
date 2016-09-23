/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");
  var $dec = $(".decrement");
  var $txt = $(".container__count-text");

  function countUp(){
    if( count < maxCount){
      count = count + 1;
    }
    countAction();
  }

  function countDown(){
    if( count > 0){
      count = count - 1;
    }
    countAction();
  }

  function countAction(){
    $txt.text(count);
  }

  $inc.click(
    function(){
      countUp();
    }
  )

  $dec.click(
    function(){
      countDown();
    }
  )



})//end function

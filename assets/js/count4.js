/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");
  var $dec = $(".decrement");

  function countUp(){
    if( count < maxCount){
      count = count + 1;
    }

    console.log(count);
  }

  function countDown(){
    if( count > 0){
      count = count - 1;
    }
    console.log(count);
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

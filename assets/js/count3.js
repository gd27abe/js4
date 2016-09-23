/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");

  function countUp(){
    if( count < maxCount){
      count = count + 1;
    }
    console.log(count);
  }

  $inc.click(
    function(){
      countUp();
    }
  )

})//end function

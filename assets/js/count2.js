/*js file*/
$(function(){

  var count = 0;
  var $inc = $(".increment");

  function countUp(){
    count = count + 1;
    console.log(count);
  }

  $inc.click(
    function(){
      countUp();
    }
  )

})//end function

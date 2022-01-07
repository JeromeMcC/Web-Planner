$( document ).ready(function() {

    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));


function timeClock(){
    var currentHour= moment().hours();
    $(".time-block").each(function(){
        var currentBlockHour = parseInt($(this).attr("id").split("-")[1])
        if (currentBlockHour < currentHour){
            $(this).addClass("past")
     }
     else if (currentBlockHour === currentHour){
         $(this).addClass("present")
     }

     else {
         $(this).addClass("future")
     }
    })

    }

    timeClock()

$( ".saveBtn" ).click(function() {
  var textContent= $(this).prev().val()
    console.log( $(this).prev().val())
    localStorage.setItem("description",textContent)
    //hour
    //description
  });
});

localStorage.getItem("description")

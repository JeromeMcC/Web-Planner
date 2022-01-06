$( document ).ready(function() {
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
$( ".saveBtn" ).click(function() {
    alert( "Handler for .click() called." );
  });
    console.log( "ready!" );
});

localStorage.getItem
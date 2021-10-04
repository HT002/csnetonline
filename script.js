$(document).ready(function(){
  // Change color of heart
  $( ".blue-option" ).on( "click", function() {                     $(".heart").addClass("blue-heart").removeClass().addClass("heart blue-heart");
  });
  $( ".pink-option" ).on( "click", function() {             $(".heart").removeClass().addClass("heart pink-heart");
  });
  $( ".yellow-option" ).on( "click", function() {           $(".heart").removeClass().addClass("heart yellow-heart");
  });
  $( ".green-option" ).on( "click", function() {             $(".heart").removeClass().addClass("heart green-heart");
  });
  $( ".purple-option" ).on( "click", function() {           $(".heart").removeClass().addClass("heart purple-heart");
  });
  $( ".orange-option" ).on( "click", function() {           $(".heart").removeClass().addClass("heart orange-heart");
  });
  
  // Adds custom Heart Text
 // Take the value of the #fLine input, and adds it to span.firstLine
  
  $("#fLine").on("change keyup paste click", function(){
    var firstLineValue = $('#fLine').val();
    console.log(firstLineValue);
    
    $('.firstLine').text(firstLineValue);
})
  
  $("#sLine").on("change keyup paste click", function(){
    var secondLineValue = $('#sLine').val();
    console.log(secondLineValue);
    
    $('.secondLine').text(secondLineValue);
  })
  
  $("#recipient").on("change keyup paste click", function(){
    var recipient = $('#recipient').val();
    console.log(recipient);
    
    $('.recipientValue').text(recipient + '!');
  })
  
  $("#giver").on("change keyup paste click", function(){
    var giver = $('#giver').val();
    console.log(giver);
    
    $('.giverValue').text(giver);
  })
  
 
window.location.href = image;

});


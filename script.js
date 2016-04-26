$(document).ready(function(){
// Actions/User Interaction
// When the "about" button is clicked, scroll to the about div
$("#aboutbut").click(function() {
  $('html,body').animate({
    scrollTop: $(".aboutbox").offset().top},
    'fast');
});


// When the "features" button is clicked, scroll to the features div
$("#featuresbut").click(function(){
  $('html,body').animate({
    scrollTop: $(".featuresblock").offset().top},
    'fast');
});


// When the "signup" button is clicked, scroll to the signup div
$("#weatherbut").click(function(){
  $('html,body').animate({
    scrollTop: $(".weatherbox").offset().top},
    'fast');
});

// When the "back to top" button is clicked, scroll to the top of the page
$("#bttbut").click(function(){
  $('html,body').animate({
    scrollTop: $(".mainimgbox").offset().top},
    'fast');
});

// When the "back to top" button is clicked, scroll to the top of the page
$("#bttbut2").click(function(){
  $('html,body').animate({
    scrollTop: $(".mainimgbox").offset().top},
    'fast');
});

// Get input from user when "Save Me Button Pressed"
// Return message letign user know help is on the way
$('#savemebut').click(function(){
var name;
var number;

name = prompt("Don't panic. We'll send help your way in no time. Please enter your emergency contact's name");
var prompt2message = "Thank you. Now enter " + name + "'s phone number";
number = prompt(prompt2message);
var alertmessage = "Thank you! " + name + " has been alerted and given your exact location. We are also alerting the nearest authorities. Thank you for your patience.";
alert(alertmessage);

});

});
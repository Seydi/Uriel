$(document).ready(function(){

 $.restive.startMulti();
    
$('body').restive({
      platform: 'ios', 
      breakpoints: ['240', '320', '480', '640', '960', '1024'],
      classes: ['css-i-240', 'css-i-320', 'css-i-480', 'css-i-640', 'css-i-960', 'css-i-1024']
});
    
$('body').restive({
      platform: 'android', 
      breakpoints: ['240', '320', '480', '640', '960', '1024'],
      classes: ['css-a-240', 'css-a-320', 'css-a-480', 'css-a-640', 'css-a-960', 'css-a-1024']
});
    
$.restive.endMulti();

//To validate the phone number input
  function validatenumber(number) 
{
  var regex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

;
  return regex.test(number);
}

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
if (name == null || name== ''){
  while (name == null || name==''){
    name = prompt("You did not enter a name. To make sure you're safe, please enter your emergency contact's name");
  }
}
var prompt2message = "Thank you. Now enter " + name + "'s phone number";
var prompt2message2 = "You did not enter a phone number. To make sure you're safe, please enter " + name + "'s phone number";

number = prompt(prompt2message);
if (number == null || number == ''){
  while (number == null || number==''){
    number = prompt(prompt2message2);
  }
}
var prompt2message3 = "The phone number you entered is invalid. Make sure to enter a valid phone number";
if (!validatenumber(number)){
  while (!validatenumber(number)){
  number = prompt(prompt2message3);
  }
}

var alertmessage = "Thank you! " + name + " has been alerted and given your exact location. We are also alerting the nearest authorities. Thank you for your patience.";
alert(alertmessage);

});

});
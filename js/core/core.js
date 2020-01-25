"use strict"

$("#main-button").click(function() {
   $("#m-window").css("background-size", "200% 25%");
   $("#m-window").css("animation", "gradient-mini 15s ease infinite");
   $("#m-window").addClass("second-page");
   $("#m-window h2").text("Enter Your Credentials");
   $("#m-window button").text("NEXT");
});
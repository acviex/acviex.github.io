"use strict"

$("#main-button").click(function() {
   if ($("#main-button").text() === "START MESSAGING")
   {
      $("#m-window").css("background-size", "200% 25%");
      $("#m-window").css("animation", "gradient-mini 15s ease infinite");
      $("#m-window").addClass("second-page");
      $("#m-window h2").text("Authentication");
      $("#main-button").text("NEXT");
   }
   else
   {
      $("#m-window").remove();
      $(".chat").addClass("visible");
   }
});
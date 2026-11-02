$(document).ready(function () {

  // task 0
  console.log("jQuery is ready!");

  // task 1
  $("#greeting").html("Welcome to My Portfolio");
  $(".intro").css("font-size", "15px");

  $("#lightBtn").click(function () {
    $("body").removeClass("dark");
  });

  $("#darkBtn").click(function () {
    $("body").addClass("dark");
  });

  // task 2
  $("#hideBtn").click(function () {
    $("#status, #facts").hide();
  });

  $("#showBtn").click(function () {
    $("#status, #facts").show();
  });

  $("#toggleBtn").click(function () {
    $("#status, #facts").toggle();
  });

  // task 3
  $("#fadeInBtn").click(function () {
    $(".photo").fadeIn(500);
  });

  $("#fadeOutBtn").click(function () {
    $(".photo").fadeOut(500);
  });

  $("#fadeToggleBtn").click(function () {
    $(".photo").fadeToggle(500);
  });

  // task 4
  $(".slideTitle").click(function () {
    var target = $(this).data("target");
    $(target).slideToggle(300);
  });

  // task 5
  $("#addBtn").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      alert("Please enter a skill");
      return;
    }
    $("#skillList").append("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#prependBtn").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      alert("Please enter a skill");
      return;
    }
    $("#skillList").prepend("<li>" + skill + "</li>");
    $("#skillInput").val("");
  });

  $("#removeBtn").click(function () {
    $("#skillList li:last").remove();
  });

  // task 6
  var isGithub = true;
  $("#changeLinkBtn").click(function () {
    if (isGithub) {
      $("#socialLink").attr("href", "https://linkedin.com").text("My LinkedIn");
    } else {
      $("#socialLink").attr("href", "https://github.com").text("My GitHub");
    }
    isGithub = !isGithub;
  });

   // task 7
  $("#nameInput, #emailInput").on("input", function () {
    var name = $("#nameInput").val();
    var email = $("#emailInput").val();
    $("#preview").text("Name: " + name + " | Email: " + email);
  });


  $("#contactForm").submit(function (event) {
    event.preventDefault(); 
    var email = $("#emailInput").val().trim();
    
    if (name === "" || email === "") {
      alert("Please fill in all fields");
    } else {
      alert("Thanks, " + name + "! Form submitted.");
      $("#nameInput").val("");
      $("#emailInput").val("");
      $("#preview").text(""); 
    }
  });

  // task 8
  var expanded = false;
  $("#animateBtn").click(function () {
    if (!expanded) {
      $(".fill").each(function () {
        $(this).animate({ width: $(this).data("width") }, 900);
      });
      expanded = true;
      $(this).text("Reset Skills");
    } else {
      $(".fill").animate({ width: "0%" }, 900);
      expanded = false;
      $(this).text("Animate My Skills");
    }
  });

});
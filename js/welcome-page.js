var auth = Cookies.getJSON("auth");
console.log(auth);
if (!auth) {
  console.log("Bypassed Login\nRedirecting to login page...");
  location.replace("../index.html");
}

$(document).ready(function () {
  $("h4").text("Welcome " + auth.user + "!");

  // Add click handler for the take-exam button
  $("#take-exam").click(function () {
    window.location.href = "quiz.html"; // Redirect to quiz page
  });
});

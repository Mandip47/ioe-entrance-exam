//called in case the fields in the form were blank while submitting
function blankFields(param) {
  param.preventDefault();
  console.log(emptyFieldLog);
  alert(emptyFieldAlert);
  return 0;
}

var repeatedLoginFail = false;
var loginFailCount = 0;

//authenticates the username and password
function auth(text, pwd, param) {
  //XmlHttpRequest to fetch valid usernames and password
  if (loginFailCount > 0) {
    repeatedLoginFail = true;
  }
  $.ajax({
    async: false, //Request should be sync instead of async because json(null) will be returned before http request can be completed.
    url: "json/users.json",
    dataType: "json",
    success: function (data) {
      console.log("Ajax http request : success"); //program log

      //authenticating
      console.log("Authenticating...");
      //All about checking username and password
      for (key in data) {
        if (text == data[key].userName && pwd == data[key].password) {
          var pass = {
            auth: true,
            user: key,
          };
          break;
        }
      }
      if (pass) {
        console.log("User " + pass.user + " authenticated.");
        //Set cookie and redirect to welcome page
        Cookies.set("auth", pass);
        location.replace("site/welcome-page.html");
      } else {
        //Show that usename and password is incorrect.
        console.log("Authentication Failed");
        if (!repeatedLoginFail) {
          $(".form-control").addClass("form-control-alert");
          $("#password").append(
            '<span id="wrong" class="wrong">*Incorrect Username or Password or Both</span>'
          );
        }
        $("#text").val("");
        $("#pwd").val("");
        loginFailCount++;
        param.preventDefault();
      }
    },
  })
    .fail(function () {
      console.log("Ajax http request : error"); //program log
    })
    .always(function () {
      console.log("Ajax http request : complete"); //program log
    });
  param.preventDefault();
}
$(document).ready(function () {
  $("form").submit(function (event) {
    //form submitted
    console.log("Form Submitted");

    console.log("Validating Form fields...");
    if ($("#text").val() == "" || $("#pwd").val() == "") {
      blankFields(event);
    } //validating form fields
    //Authenticating form fields
    else {
      console.log("Validation Complete");
      console.log("Authenticating form fields");
      auth($("#text").val(), $("#pwd").val(), event);
    }

    return 0;
  });
});

    var auth = Cookies.getJSON('auth');
    console.log(auth);
    if(!auth){
        console.log("Bypassed Login\nRedirecting to login page...");
        location.replace("../index.html");//In case someone gets access to this page without auth
    };

    $(document).ready(function(){
        $("h4").text("Welcome "+auth.user+"!");
    });

//Take examination still left.

    var auth = Cookies.getJSON('auth');
    console.log(auth);
    if(!auth){
        console.log("Bypassed Login\nRedirecting to login page...");
        location.replace("../index.html");//In case someone gets access to this page without auth
    };

    function noob() {
        if (auth.user == "Ishani"){
            alert("What the !@#$ are you doing here.\nGo study your !@#$ing Biology, NOOB");
        }
    }

    $(document).ready(function(){
        $("h4").text("Welcome "+auth.user+"!");
    });

//Take examination still left.
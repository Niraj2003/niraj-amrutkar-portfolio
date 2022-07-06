function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
var text = '<center><br><div style=" font-size: 20px;"> <a href=``> Resume </a> </div></center>'

function contact() {
    console.log("contact");
    $("#change").html("&emsp;Email ID : nirajamr03@gmail.com ");
}

function about() {
    console.log("about")
    $("#change").html("&emsp;Pursuing Engineering in Information technology from Vishwakarma Institute of Information Technology, Pune. Self Learner, Self Coder, Always ready to learn new Technology and want to work with new technologies and explore knowedge");
}

function home() {
    console.log("home")
    $("#change").html("&emsp;A Front-End Developer Enthusiast, an Engineer and a Keen-Learner! I have deep interest in Coding.<br> &emsp;Passionate about competitive coding and web development. Team player, hardworking and passionate about learning new technology seeking a beginner role to explore my technical knowledge.");
}
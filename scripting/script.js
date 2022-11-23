
    $(document).ready(function() {
    let screenWidth = window.innerWidth;
    if(screenWidth <= 991){
        $(".mobilenav").show();
        $(".monitornav").hide();
        $(".mobilesidenav").hide();
        $(".mobilesidenavbutton").show();
    }
    else{
        $(".mobilenav").hide();
        $(".monitornav").show();
        $(".mobilesidenav").show();
        $(".mobilesidenavbutton").hide();
    }


    $(".mobilesidenav").click(()=>{
        $(".movilesidenavbuttonouterbtn").css("left", `${$(".mobilesidenav").width()-32}px`);
    })
    $(".movilesidenavbuttonouterbtn").click(function(){
        $(".mobilesidenav").toggle();
        if($(".mobilesidenav").is(":visible")){
            $(".movilesidenavbuttonouterbtn").css("left", `${$(".mobilesidenav").width()-32}px`);
        }
        else{
            $(".movilesidenavbuttonouterbtn").css("left", "-35px");
        }

    });

     $("#ac_layer_ce24ec3_u").hide()

    $(".anychart-credits").hide()
});


function myFunction() {
    var sidebardivemenuicons = document.getElementById("myLinks");
    if (sidebardivemenuicons.style.display === "block") {
        sidebardivemenuicons.style.display = "none";
    } else {
        sidebardivemenuicons.style.display = "block";
        sidebardivemenuicons.style.position = "absolute";
        sidebardivemenuicons.style.zIndex = "1000";
        sidebardivemenuicons.style.top = "50px";
        sidebardivemenuicons.style.right = "10px";
        sidebardivemenuicons.style.background = "white"
        sidebardivemenuicons.style.width = "50%"

    }
}





$(document).ready(function(){
    var result;

    $("#click00").click(function(){
        
      result=$("#usr").val();
    });




/*$(document).ready(function(){*/
    $("#click01").click(function(){
        var result=$("#login").val();
        alert("vous êtes inscrit et votre identifiant est :  " + result);
       /* window.location.assign("locvelo3.html");
        $(".affich0").text("vous etes insrit et votre identifiant est: " + result);*/
    });


/*$(document).ready(function(){*/
    $("#affichuser").text("result");




/*$(document).ready(function(){*/
    $(".affich1").hide();$(".affich2").hide();

/*$(document).ready(function(){*/
    $("#click1").click(function(){
        $(".affich1").show();
    });


/*$(document).ready(function(){*/
    $("#click2").click(function(){
   if ( $("#cb").prop("checked")==true) {$(".affich2").show();$("html, body").animate({ scrollTop: $(document).height() }, "slow")} else {window.location.assign("http://www.paypal.com")};
});
});
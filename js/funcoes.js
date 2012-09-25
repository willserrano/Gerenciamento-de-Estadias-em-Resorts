$(document).ready(function(){
    $("div#form-cad-cliente").hide();

    $("a#button").toggle(function(){
        $("div#form-cad-cliente").fadeIn(); // ou slideDown()
    },
    function(){
        $("div#form-cad-cliente").fadeOut(); // ou slideUp()
    })
});
$(document).ready(function(){
    $("div#oculto").hide();

    $("a#button").toggle(function(){
        $("div#oculto").fadeIn(); // ou slideDown()
    },
    function(){
        $("div#oculto").fadeOut(); // ou slideUp()
    })
});
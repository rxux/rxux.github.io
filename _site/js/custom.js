$(document).ready(function() {

    // HAMBURGER ICON AND MENU OPTIONS
    $("#menu").mmenu({
        //extensions: ["widescreen"]
    });

    var hamburger = $('#hamburger-icon');
    var API = $("#menu").data( "mmenu" );

    hamburger.click(function() {
        if ($(this).hasClass('active')) {
            API.close();
            hamburger.removeClass('active');
        } else {
            hamburger.addClass('active');
        }
    });

    $('#mm-blocker').click(function() {
        if (hamburger.hasClass('active')) {
            API.close();
            hamburger.removeClass('active');
        }
    });
    API.bind( "closed", function() {
        API.closeAllPanels();
    });
    // END HAMBURGER ICON AND MENU OPTIONS
});
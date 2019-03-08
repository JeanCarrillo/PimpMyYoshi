var currentSection = 1;

$(document).ready(function () {

    // Change section on scroll
    $('body').bind('mousewheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            switchSection('up');
        }
        else {
            switchSection('down');
        }

    });

    // Scroll  item click
    $('.scroll_item').click(function (event) {
        var page = $(this).attr('id');
        displayPage(page);
        if (page <= 5 & page >= 1){
            currentSection = parseInt(page, 10);
        }
    });

    // Listen to key
    document.addEventListener("keydown", keyPressed);

    displayPage("loading");


});

window.onload = function() {
    ini();
  };


// Switch section on key press
function keyPressed(event) {
    if (event.keyCode == 38) {
        switchSection('up');
    } else if (event.keyCode == 40) {
        switchSection('down');
    }
}

// update currentSection depending on user input
function switchSection(direction) {
    if (direction == 'up') {
        if (currentSection > 1) {
            currentSection -= 1;
            console.log(direction);
        }

    } else if (direction == 'down') {
        if (currentSection < 5 ) {
            currentSection += 1;
            console.log(direction);
        }
    }
    displayPage(currentSection);
}

// Display the n page
function displayPage(n) {

    if (parseInt(n)){
        $("#loading").css("visibility", "hidden"); 


        $('.scroll_item').removeClass('scroll_item_active');
        $("#" + n).addClass('scroll_item_active');
    
        $(".page").css("visibility", "hidden");
        $("#section" + n).css("visibility", "visible");
    
        $(".page").css("opacity", 0);
        $("#section" + n).css("opacity", 1);
    
        if( n == 5){
            $('iframe').css("visibility", "visible"); 
        } else {
            $('iframe').css("visibility", "hidden");
        }
    
        if( n == 4){
            $('.ytplayer').css("visibility", "visible"); 
        } else {
            $('.ytplayer').css("visibility", "hidden");
        }
    } else if (n == "loading"){
        $(".page").css("visibility", "hidden"); 
        $("#loading").css("visibility", "visible"); 
    }


    // if( n == 1){
    //     $(".navbar" + n).css("opacity", 1);
    //     $('.navbar').css("visibility", "visible"); 
    // } else {
    //     $(".navbar" + n).css("opacity", 0);
    //     $('.navbar').css("visibility", "hidden");
    // }

    console.log(n);
    }

function resize() {
    //Do stuff.
}

function ini(){
    resize();
    displayPage(currentSection);
}

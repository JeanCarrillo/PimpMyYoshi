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

        displayPage($(this).attr('id'));
    });

    // Listen to key
    document.addEventListener("keydown", keyPressed);


    resize();
    displayPage(currentSection);
});

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
        if (currentSection < 5) {
            currentSection += 1;
            console.log(direction);
        }
    }
    displayPage(currentSection);
}

// Display the n page
function displayPage(n) {
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

    console.log(n);
    }

function resize() {
    //Do stuff.
}


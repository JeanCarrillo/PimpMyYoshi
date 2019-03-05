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

    //Customization 
    $('.pink-button').on({'click': function(){
        $('#change-image').attr('src','https://vignette.wikia.nocookie.net/yoshi/images/6/68/Yoshi_rose.png/revision/latest?cb=20181128093639&path-prefix=fr');}
    });
 
    $('.green-button').on({'click': function(){
        $('#change-image').attr('src','https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/YoshiMarioParty10.png/220px-YoshiMarioParty10.png');}
    });
 
    $('.blue-button').on({'click': function(){
        $('#change-image').attr('src','https://vignette.wikia.nocookie.net/yoshi/images/4/49/Yoshi_bleu_clair.png/revision/latest?cb=20181128093330&path-prefix=fr');}
     });

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

    $(".page").css("opacity", 0);
    $("#section" + n).css("opacity", 1);

    console.log(n);
    }

function resize() {
    //Do stuff.
}

$(function() {
 $('.menulink').click(function(){
   $("#bg").attr('src',"https://vignette.wikia.nocookie.net/yoshi/images/6/68/Yoshi_rose.png/revision/latest?cb=20181128093639&path-prefix=fr");
   return false;
 });
});

$(function() {
 $('.menulinkvert').click(function(){
   $("#bg").attr('src',"https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/YoshiMarioParty10.png/220px-YoshiMarioParty10.png");
   return false;
 });
});

$(function() {
 $('.menulinkbleu').click(function(){
   $("#bg").attr('src',"https://vignette.wikia.nocookie.net/yoshi/images/4/49/Yoshi_bleu_clair.png/revision/latest?cb=20181128093330&path-prefix=fr");
   return false;
 });
});

var currentSection = 1;
let canvasShowcase =  document.getElementById('canvasShowcase');
let showcaseCtx = canvasShowcase.getContext('2d');


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



        $('.scroll_item').removeClass('scroll_item_active');
        $("#" + n).addClass('scroll_item_active');
    
        $(".page").css("visibility", "hidden");
        $("#section" + n).css("visibility", "visible");
    
        $(".page").css("opacity", 0);
        $("#section" + n).css("opacity", 1);

        $("#loading").css("opacity", 0);
        $("#loading").css("visibility", "hidden"); 
    
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

        if (n == 1){
            //superCool = setInterval(randomYoshiElements, 2900);
        }
            
        if (n == 2){
            clearInterval(superCool)
        }
            
    } else if (n == "loading"){
        $(".page").css("visibility", "hidden"); 
        $("#loading").css("visibility", "visible"); 
        $("#loading").css("opacity", 1);
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

// Yoshi Object

const yoshi = {
    image: {
        pink: {
            none: 'assets/images/yoshiRose.png',
            moustache: 'assets/images/yoshiRoseMoustache.png',
            sunglasses: 'assets/images/yoshiRoseLunettes.png',
        },
        green: {
            none: 'assets/images/yoshiVert.png',
            moustache: 'assets/images/yoshiVertMoustache.png',
            sunglasses: 'assets/images/yoshiVertLunettes.png',
        },
        blue: {
            none: 'assets/images/yoshiBleu.png',
            moustache: 'assets/images/yoshiBleuMoustache.png',
            sunglasses: 'assets/images/yoshiBleuLunettes.png',
        },
    },
    sentence: {
        pink: 'The pink Yoshi for candy floss lovers.',
        green: 'The orignal green Yoshi for purists.',
        blue: 'The blue Yoshi for dreamers.',
        moustache: 'Yoshi dressed as his best friend.',
        sunglasses: 'Yoshi with his coolest look.',
    },
    titleCard: {
        pink: {
            none: 'Pink Yoshi',
            moustache: 'Pink Yoshi with Mario\'s hat',
            sunglasses: 'Pink Yoshi with sunglasses',
        },
        green: {
            none: 'Green Yoshi',
            moustache: 'Green Yoshi with Mario\'s hat',
            sunglasses: 'Green Yoshi with sunglasses',
        },
        blue: {
            none: 'Blue Yoshi',
            moustache: 'Blue Yoshi with Mario\'s hat',
            sunglasses: 'Blue Yoshi with sunglasses',
        },
    }
}


function resizecanvasCusto() {

    // Section 1 //
    if( window.innerWidth / 3> 360){
        canvasShowcase.width = 360;
    }else{
        canvasShowcase.width = window.innerWidth / 3; //450
    }
    
    canvasShowcase.height = canvasShowcase.width * 1.50; //600



    // Section 2 //
    if( window.innerWidth / 3> 360){
        canvasCusto.width = 360;
    }else{
        canvasCusto.width = window.innerWidth / 3; //450
    }
    
    canvasCusto.height = canvasCusto.width * 1.30; //600
    console.log("Resizing.." + canvasCusto.width + "x" + canvasCusto.height);
}

$(window).resize(resizecanvasCusto);

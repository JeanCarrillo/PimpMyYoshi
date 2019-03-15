

//Objet contenant les caractéristiques du Yoshi à customiser
// const yoshi = {
//     image: {
//         pink: {
//             none: 'assets/images/yoshiRose.png',
//             moustache: 'assets/images/yoshiRoseMoustache.png',
//             sunglasses: 'assets/images/yoshiRoseLunettes.png',
//         },
//         green: {
//             none: 'assets/images/yoshiVert.png',
//             moustache: 'assets/images/yoshiVertMoustache.png',
//             sunglasses: 'assets/images/yoshiVertLunettes.png',
//         },
//         blue: {
//             none: 'assets/images/yoshiBleu.png',
//             moustache: 'assets/images/yoshiBleuMoustache.png',
//             sunglasses: 'assets/images/yoshiBleuLunettes.png',
//         },
//     },
//     sentence: {
//         pink: 'The pink Yoshi for candy floss lovers.',
//         green: 'The orignal green Yoshi for purists.',
//         blue: 'The blue Yoshi for dreamers.',
//         moustache: 'Yoshi dressed as his best friend.',
//         sunglasses: 'Yoshi with his coolest look.',
//     },
//     titleCard: {
//         pink: {
//             none: 'Pink Yoshi',
//             moustache: 'Pink Yoshi with Mario\'s hat',
//             sunglasses: 'Pink Yoshi with sunglasses',
//         },
//         green: {
//             none: 'Green Yoshi',
//             moustache: 'Green Yoshi with Mario\'s hat',
//             sunglasses: 'Green Yoshi with sunglasses',
//         },
//         blue: {
//             none: 'Blue Yoshi',
//             moustache: 'Blue Yoshi with Mario\'s hat',
//             sunglasses: 'Blue Yoshi with sunglasses',
//         },
//     },
// }

const customizationElements = {
    base: {
        pink: 'assets/images/Customization/yoshiRose.png',
        green: 'assets/images/Customization/yoshiVert.png',
        blue: 'assets/images/Customization/yoshiBleu.png'
    },
    hat: {
        marioCap: 'assets/images/Customization/cap-mario.png',
        raymanHair: 'assets/images/Customization/rayman-hair.png',
        marioCrown: 'assets/images/Customization/crown-mario.png',
        banana: 'assets/images/Customization/banana.png'

    },
    mustache: {
        mario: 'assets/images/Customization/moustache-mario.png'

    },
    glasses: {
        sunglasses: 'assets/images/Customization/sunglasses.png'

    },
    glove: {
        white: 'assets/images/Customization/glovesWhite.png'
    }
}

$(document).ready(function () {
    let color = 'green';
    let accessory = 'none';
    let price = 'base';

    //Fonction pour indiquer visuellement quel bouton est actif
    function activeButtonColor(button, activeState) { 
        $('#'+activeState).removeAttr('id');
        $(button).attr('id', activeState);
    }
    function noneButton (button, activeState){
        if ($( ".sunglasses" ).is( ".active-none" ) || $( ".moustache" ).is( ".active-none" )){
            $('.button-custom-accessory').toggleClass(activeState);
        }
        $(button).attr('id', activeState); 
    }
    function activeButtonAccessory(button, activeState) {
            $(button).toggleClass(activeState)
            $('#'+activeState).removeAttr('id');
            if ($( ".none" ).is( ".active-none" )){
            $('.none').toggleClass(activeState);
        }
    }
    //Fonction qui choisit image et texte à afficher en fonction de la couleur et l'accessoire
    function customYoshi(colorYoshi, accessoryYoshi) {
        $('#change-image').attr('src', yoshi.image[colorYoshi][accessoryYoshi]);

        //activeYoshi = yoshiFactory(customizationElements.base[colorYoshi], customizationElements.hat['raymanHair'], customizationElements.glasses['sunglasses'], customizationElements.mustache['mario'], customizationElements.glove['white']);
        activeYoshi = yoshiFactory(customizationElements.base[colorYoshi]);


        $('.title-custom').text(yoshi.titleCard[colorYoshi][accessoryYoshi]);
        $('.text-custom').text(yoshi.sentence[colorYoshi]);
    }
    //Fonction ppur augmenter ou diminuer le prix si ajout ou non d'un accessoire
    function lowerPrice(actualPrice) {
        if (price == 'expensive') {
            $('.price').text('30€');
        }
    }
    function increasedPrice(actualPrice) {
        if (price == 'base') {
            $('.price').text('40€');
        }
    }
    //Color buttons on click
    $('.green-button').on({
        'click': function () {
            activeButtonColor('.green-button', 'active');
            $('#section2').css('background-color','#e6fff9');
            color = 'green';
            customYoshi(color, accessory);
            activeYoshi = yoshiFactory(customizationElements.base[color]);
        }
    });
    $('.pink-button').on({
        'click': function () {
            activeButtonColor('.pink-button', 'active');
            $('#section2').css('background-color','#ffe6e6');
            color = 'pink';
            customYoshi(color, accessory);
            activeYoshi = yoshiFactory(customizationElements.base[color]);
        }
    });
    $('.blue-button').on({
        'click': function () {
            activeButtonColor('.blue-button', 'active');
            $('#section2').css('background-color','#E8F1F8');
            color = 'blue';
            customYoshi(color, accessory);
            activeYoshi = yoshiFactory(customizationElements.base[color]);
        }
    });
    //Accessory buttons on click
    $('.none').on({
        'click': function () {
            noneButton('.none', 'active-none');
            accessory = 'none';
            customYoshi(color, accessory);
            lowerPrice(price)
            price = 'base';
            activeYoshi = yoshiFactory(customizationElements.base[color]);
        }
    });
    $('.moustache').on({
        'click': function () {
            activeButtonAccessory('.moustache', 'active-none');
            accessory = 'moustache';
            customYoshi(color, accessory);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(customizationElements.base[color], customizationElements.hat['marioCap'], undefined, customizationElements.mustache['mario']);
        }
    });
    $('.sunglasses').on({
        'click': function () {
            activeButtonAccessory('.sunglasses', 'active-none');
            accessory = 'sunglasses';
            customYoshi(color, accessory);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(customizationElements.base[color], undefined, customizationElements.glasses['sunglasses'], undefined);
        }
    });
});



// CANVAS Dynamic customization//

let canvasCusto = document.getElementById('canvasCusto');
let ctxContainer = document.getElementById('customizationContainer');
let context = canvasCusto.getContext('2d');
let running = true;

class Yoshi {
    constructor(couleur, hat, glasses, mustache, glove) {
        this.base = couleur;
        this.hat = hat;
        this.glasses = glasses;
        this.mustache = mustache;
        this.glove = glove;
        this.y = 50;
        this.dy = 0.3;
        this.hatY = canvasCusto.height*0.006;
        this.glassesY = canvasCusto.height*0.085;
        this.mustacheY = canvasCusto.height*0.2;
        this.gloveY = canvasCusto.height*0.205;
    }

    draw() {
        //animation
        if (this.y < 25) {
            this.dy = -this.dy
        }
        if (this.y > 50) {
            this.dy = -this.dy
        }
        this.y += this.dy;
        this.hatY += this.dy;
        this.glassesY += this.dy;
        this.mustacheY += this.dy;
        this.gloveY += this.dy;

        //draw elements
        context.drawImage(this.base, 50, this.y, canvasCusto.width - 50, canvasCusto.height - 50);
        if (this.hat){
            context.drawImage(this.hat, canvasCusto.width*0.404, this.hatY, canvasCusto.width*0.611, canvasCusto.height*0.351);
        }
        if (this.glasses){
            context.save();
            context.globalAlpha = 0.8;
            context.drawImage(this.glasses, canvasCusto.width*0.345, this.glassesY, canvasCusto.width*0.65, canvasCusto.height*0.32);
            context.restore()
        }
        if (this.mustache){
            context.drawImage(this.mustache, canvasCusto.width*0.148, this.mustacheY, canvasCusto.width*0.61, canvasCusto.height*0.32);
        }
        if (this.glove){
            context.drawImage(this.glove, canvasCusto.width*0.138, this.gloveY, canvasCusto.width*0.88, canvasCusto.height*0.7);
        }
        //context.drawImage(this.hat, 10, this.y, 200, 250);
    }
}





let activeYoshi = yoshiFactory(customizationElements.base['green']);

$(window).resize(resizecanvasCusto);

function resizecanvasCusto() {
    if( window.innerWidth / 3> 360){
        canvasCusto.width = 360;
    }else{
        canvasCusto.width = window.innerWidth / 3; //450
    }
    
    canvasCusto.height = canvasCusto.width * 1.50; //600
    console.log("Resizing.." + canvasCusto.width + "x" + canvasCusto.height);

    //hRatio = (sec4Canvas.width / videoTuto.videoWidth) * videoTuto.videoHeight;
}

resizecanvasCusto();

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(function () {

                callback(+performance.now());
            }, 1000 / 60);
        };
})();



function animate() {


    context.clearRect(0, 0, canvasCusto.width, canvasCusto.height);
    // context.fillStyle = 'black';
    // context.fillRect(0, 0, canvasCusto.width, canvasCusto.height);
    activeYoshi.draw();
    if (running) {
        requestAnimFrame(animate);
    }


}
animate();


function yoshiFactory(base, hat, glasses, mustache, glove) {

    this.base = new Image();
    this.base.src = base;
    if (hat) {
        this.hat = new Image();
        this.hat.src = hat;
    }
    if (glasses) {
        this.glasses = new Image();
        this.glasses.src = glasses;
    }
    if (mustache){
        this.mustache = new Image();
        this.mustache.src = mustache;
    }
    if (glove){
        this.glove = new Image();
        this.glove.src = glove;
    }



    this.wellCraftedYoshi = new Yoshi(this.base, this.hat, this.glasses, this.mustache, this.glove);

    return wellCraftedYoshi
}

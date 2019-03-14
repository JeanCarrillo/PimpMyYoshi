
    //Objet contenant les caractéristiques du Yoshi à customiser
    const yoshi = {
        image : {  
            pink : {
                none : 'assets/images/yoshiRose.png', 
                moustache : 'assets/images/yoshiRoseMoustache.png', 
                sunglasses : 'assets/images/yoshiRoseLunettes.png',
            },
            green : {
                none : 'assets/images/yoshiVert.png', 
                moustache : 'assets/images/yoshiVertMoustache.png', 
                sunglasses : 'assets/images/yoshiVertLunettes.png',
            },
             blue : {
                none : 'assets/images/yoshiBleu.png', 
                moustache : 'assets/images/yoshiBleuMoustache.png', 
                sunglasses : 'assets/images/yoshiBleuLunettes.png',
             },
         },
        sentence : {  
            pink : 'The pink Yoshi for candy floss lovers.',
            green : 'The orignal green Yoshi for purists.',
            blue : 'The blue Yoshi for dreamers.',
            moustache : 'Yoshi dressed as his best friend.',
            sunglasses : 'Yoshi with his coolest look.',
        },
        titleCard : {
            pink : {
                none : 'Pink Yoshi', 
                moustache : 'Pink Yoshi with Mario\'s hat', 
                sunglasses : 'Pink Yoshi with sunglasses',
            },
            green : {
                none : 'Green Yoshi', 
                moustache : 'Green Yoshi with Mario\'s hat', 
                sunglasses : 'Green Yoshi with sunglasses',
            },
             blue : {
                none : 'Blue Yoshi', 
                moustache : 'Blue Yoshi with Mario\'s hat', 
                sunglasses : 'Blue Yoshi with sunglasses',
            },
        }
    }
$(document).ready(function () {
    let color = 'green';
    let accessory = 'none';
    let price = 'base';

    //Fonction pour indiquer visuellement quel bouton est actif
    function activeButton(button, activeState) {
        $('#'+activeState).removeAttr('id');
        $(button).attr('id', activeState);
    }
   //Fonction qui choisit image et texte à afficher en fonction de la couleur et l'accessoire
   function customYoshi(colorYoshi, accessoryYoshi) {
        $('#change-image').attr('src', yoshi.image[colorYoshi][accessoryYoshi]);
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
            activeButton('.green-button', 'active');
            color = 'green';
            customYoshi(color, accessory);
        }
    });
    $('.pink-button').on({
        'click': function () {
            activeButton('.pink-button', 'active');
            color = 'pink';
            customYoshi(color, accessory);
        }
    });
    $('.blue-button').on({
        'click': function () {
            activeButton('.blue-button', 'active');
            color = 'blue';
            customYoshi(color, accessory);
        }
    });
    //Accessory buttons on click
    $('.none').on({
        'click': function () {
            activeButton('.none', 'active-none');
            accessory = 'none';
            customYoshi(color, accessory);
            lowerPrice(price)
            price = 'base'; 
        }
    });
    $('.moustache').on({
        'click': function () {
            activeButton('.moustache', 'active-none');
            accessory = 'moustache';
            customYoshi(color, accessory);
            increasedPrice(price)
            price = 'expensive';
        }
    });
    $('.sunglasses').on({
        'click': function () {
            activeButton('.sunglasses', 'active-none');
            accessory = 'sunglasses';
            customYoshi(color, accessory);
            increasedPrice(price)
            price = 'expensive';
        }
    });
});



// CANVAS Dynamic customization//

let canvasCusto = document.getElementById('canvasCusto');
let ctxContainer = document.getElementById('customizationContainer');
let context = canvasCusto.getContext('2d');
let running = true;

canvasCusto.width = 250;
canvasCusto.height = 300;

class Yoshi {
    constructor(couleur, hat, glasses){
        this.base = couleur;
        this.hat = hat;
        this.glasses = glasses;
        this.y = 10;
        this.dy = 0.3;
    }

    draw(){
        if (this.y < 5){
            this.dy = -this.dy
        }
        if (this.y > 25){
            this.dy = -this.dy
        }
        this.y += this.dy;
        context.drawImage(this.base, 10, this.y, 200, 250);
    }
}

// $(window).resize(resizecanvasCusto);

// function resizecanvasCusto(){
//     canvasCusto.width = 250;
//     canvasCusto.height = 300;
//     console.log("Resizing.." + canvasCusto.width + "x" + canvasCusto.height);

//     //hRatio = (sec4Canvas.width / videoTuto.videoWidth) * videoTuto.videoHeight;
// }

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame   || 
    window.mozRequestAnimationFrame      || 
    window.oRequestAnimationFrame        || 
    window.msRequestAnimationFrame       || 
    function(callback, element){
        window.setTimeout(function(){
           
            callback(+performance.now());
        }, 1000 / 60);
    };
})();

let testCouleur = new Image();
testCouleur.src = yoshi.image.pink.none;
let testYoshi = new Yoshi(testCouleur);

function animate(){


    context.clearRect(0, 0, canvasCusto.width, canvasCusto.height);
    // context.fillStyle = 'black';
    // context.fillRect(0, 0, canvasCusto.width, canvasCusto.height);
    testYoshi.draw();
    if (running){
        requestAnimFrame(animate);
    }


}
animate();


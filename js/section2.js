
class Yoshi {
    constructor(couleur, hat, glasses, mustache, glove, section) {
        this.base = couleur;
        this.hat = hat;
        this.glasses = glasses;
        this.mustache = mustache;
        this.glove = glove;
        this.y = 50;
        this.dy = 0.3;
        this.hatY = canvasCusto.height * 0.006;
        this.glassesY = canvasCusto.height * 0.085;
        this.mustacheY = canvasCusto.height * 0.2;
        this.gloveY = canvasCusto.height * 0.205;
        this.section = section;
    }

    draw() {

        //console.log(this.section);
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
        this.section.drawImage(this.base, 50, this.y, canvasCusto.width - 50, canvasCusto.height - 50);
        if (this.hat) {
            this.section.drawImage(this.hat, canvasCusto.width * 0.404, this.hatY, canvasCusto.width * 0.611, canvasCusto.height * 0.351);
        }
        if (this.glasses) {
            this.section.save();
            this.section.globalAlpha = 0.8;
            this.section.drawImage(this.glasses, canvasCusto.width * 0.345, this.glassesY, canvasCusto.width * 0.65, canvasCusto.height * 0.32);
            this.section.restore()
        }
        if (this.mustache) {
            this.section.drawImage(this.mustache, canvasCusto.width * 0.148, this.mustacheY, canvasCusto.width * 0.61, canvasCusto.height * 0.32);
        }
        if (this.glove) {
            this.section.drawImage(this.glove, canvasCusto.width * 0.138, this.gloveY, canvasCusto.width * 0.88, canvasCusto.height * 0.7);
        }
        //context.drawImage(this.hat, 10, this.y, 200, 250);
    }
}


const customizationElements = {
    base: {
        pink: 'assets/images/Customization/yoshiRose.png',
        green: 'assets/images/Customization/yoshiVert.png',
        blue: 'assets/images/Customization/yoshiBleu.png',
        purple: 'assets/images/Customization/yoshiViolet.png'
    },
    hat: {
        marioCap: 'assets/images/Customization/cap-mario.png',
        raymanHair: 'assets/images/Customization/rayman-hair.png',
        marioCrown: 'assets/images/Customization/crown-mario.png',
        banana: 'assets/images/Customization/banana.png',
        none: 'assets/images/Customization/none.png'

    },
    mustache: {
        mario: 'assets/images/Customization/moustache-mario.png',
        fancyMoustache: 'assets/images/Customization/fancy-moustache.png',
        none: 'assets/images/Customization/none.png'

    },
    glasses: {
        sunglasses: 'assets/images/Customization/sunglasses.png',
        fancyGlasses: 'assets/images/Customization/fancy-monocle.png',
        none: 'assets/images/Customization/none.png'

    },
    glove: {
        white: 'assets/images/Customization/glovesWhite.png',
        none: 'assets/images/Customization/none.png'
    },
    sentence: {
        pink: 'The pink Yoshi for candy floss lovers.',
        green: 'The orignal green Yoshi for purists.',
        purple: 'The purple Yoshi for eccentrics.',
        blue: 'The blue Yoshi for dreamers.',
    },
    titleCard: {
        pink: 'Pink Yoshi',
        blue: 'Blue Yoshi',
        green: 'Green Yoshi',
        purple: 'Purple Yoshi',
        marioHat: 'Yoshi with Mario\'s hat',
        banana: 'Yoshi with a banana hat',
        crown: 'Yoshi with a crown',
        marioMoustache: 'Mario\'s moustache',
        fancyMoustache: 'Fancy moustache',
        sunglasses: 'Yoshi with sunglasses',
        fancyGlasses: 'Yoshi with a monocle',
    },
}

const magik = {
    base : ['.green-button', '.pink-button', '.blue-button', '.purple-button'],

    hat : ['.noneHat', '.hatMario', '.banana', '.crown', ],

    mustache : ['.noneMoustache', '.moustacheMario', '.fancyMoustache'],

    glasses : ['.noneGlasses', '.sunglasses', '.fancyGlasses']
}


$(document).ready(function () {
    let color = 'green';
    let accessory = 'none';
    let moustache = 'none';
    let hat = 'none';
    let glasses = 'none';
    let gloves = 'none';
    let price = 'base';

    //Fonction pour indiquer visuellement quel bouton est actif
    function activeButtonColor(button, activeState) {
        $('#' + activeState).removeAttr('id');
        $(button).attr('id', activeState);
    }

    //Fonction qui choisit image et texte à afficher en fonction de la couleur et l'accessoire
    function customYoshi(colorYoshi, accessoryYoshi) {

        //activeYoshi = yoshiFactory(customizationElements.base[colorYoshi], customizationElements.hat['raymanHair'], customizationElements.glasses['sunglasses'], customizationElements.mustache['mario'], customizationElements.glove['white']);
        //activeYoshi = yoshiFactory(context, customizationElements.base[colorYoshi]);


        $('.title-custom').text(customizationElements.titleCard[accessoryYoshi]);
        $('.text-custom').text(customizationElements.sentence[colorYoshi]);
    }
    //Fonction ppur augmenter ou diminuer le prix si ajout ou non d'un accessoire
    function lowerPrice(actualPrice) {
        if (price == 'expensive') {
            //$('.price').text('30€');
        }
    }
    function increasedPrice(actualPrice) {
        if (price == 'base') {
            //$('.price').text('30€');
        }
    }


    //Color buttons on click
    $('.green-button').on({
        'click': function () {
            activeButtonColor('.green-button', 'active');
            $('#section2').css('background-color', '#e6fff9');
            color = 'green';

            accessory = 'green';

            customYoshi(color, accessory);
            activeYoshi = yoshiFactory(context, customizationElements.base[color]);
        }
    });
    $('.pink-button').on({
        'click': function () {
            activeButtonColor('.pink-button', 'active');
            $('#section2').css('background-color', '#fff3f3');
            color = 'pink';

            accessory = 'pink'
          
            customYoshi(color, accessory);
            activeYoshi = yoshiFactory(context, customizationElements.base[color]);
        }
    });
    $('.blue-button').on({
        'click': function () {
            activeButtonColor('.blue-button', 'active');
            $('#section2').css('background-color', '#E8F1F8');
            color = 'blue';

            accessory = 'blue';

            customYoshi(color, accessory);
            activeYoshi = yoshiFactory(context, customizationElements.base[color]);
        }
    });
    $('.purple-button').on({
        'click': function () {
            activeButtonColor('.purple-button', 'active');
            $('#section2').css('background-color', '#f2ecf7');
            color = 'purple';
            accessory = 'purple';
            customYoshi(color, accessory);
            activeYoshi = yoshiFactory(context, customizationElements.base[color]);
        }
    });
    //Accessory buttons on click
    //Hat buttons
    $('.noneHat').on({
        'click': function () {
            activeButtonColor('.noneHat', 'active-none-hat');
            hat = color;
            customYoshi(color, hat);
            lowerPrice(price)
            price = 'base';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], customizationElements.hat['none'], undefined, undefined);
        }
    });
    $('.hatMario').on({
        'click': function () {
            activeButtonColor('.hatMario', 'active-none-hat');
            hat = 'marioHat';
            customYoshi(color, hat);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], customizationElements.hat['marioCap'], undefined, undefined);

        }
    });
    $('.banana').on({
        'click': function () {
            activeButtonColor('.banana', 'active-none-hat');
            hat = 'banana';
            customYoshi(color, hat);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], customizationElements.hat['banana'], undefined, undefined);

        }
    });
    $('.crown').on({
        'click': function () {
            activeButtonColor('.crown', 'active-none-hat');
            hat = 'crown';
            customYoshi(color, hat);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], customizationElements.hat['marioCrown'], undefined, undefined);

        }
    });
    //Moustache buttons
    $('.noneMoustache').on({
        'click': function () {
            activeButtonColor('.noneMoustache', 'active-none-moustache');
            moustache = color;
            customYoshi(color, moustache);
            lowerPrice(price)
            price = 'base';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], undefi-gregoirened, undefined, customizationElements.mustache['none']);
        }
    });
    $('.moustacheMario').on({
        'click': function () {
            activeButtonColor('.moustacheMario', 'active-none-moustache');
            moustache = 'marioMoustache';
            customYoshi(color, moustache);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], undefined, undefined, customizationElements.mustache['mario']);

        }
    });
    $('.fancyMoustache').on({
        'click': function () {
            activeButtonColor('.fancyMoustache', 'active-none-moustache');
            moustache = 'fancyMoustache';
            customYoshi(color, moustache);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], undefined, undefined, customizationElements.mustache['fancyMoustache']);

        }
    });
    //Lunettes buttons
    $('.noneGlasses').on({
        'click': function () {
            activeButtonColor('.noneGlasses', 'active-none-glasses');
            glasses = color;
            customYoshi(color, glasses);
            lowerPrice(price)
            price = 'base';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], undefined, customizationElements.glasses['none'], undefined);
        }
    });
    $('.sunglasses').on({
        'click': function () {
            activeButtonColor('.sunglasses', 'active-none-glasses');
            glasses = 'sunglasses';
            customYoshi(color, glasses);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], undefined, customizationElements.glasses['sunglasses'], undefined);

        }
    });
    $('.fancyGlasses').on({
        'click': function () {
            activeButtonColor('.fancyGlasses', 'active-none-glasses');
            glasses = 'fancyGlasses';
            customYoshi(color, glasses);
            increasedPrice(price)
            price = 'expensive';
            activeYoshi = yoshiFactory(context, customizationElements.base[color], undefined, customizationElements.glasses['fancyGlasses'], undefined);

        }
    });
});



// CANVAS Dynamic customization//

let canvasCusto = document.getElementById('canvasCusto');
let ctxContainer = document.getElementById('customizationContainer');
let context = canvasCusto.getContext('2d');
let running = true;



// showcaseCtx.fillStyle = 'black';
// showcaseCtx.fillRect(0,0, canvasShowcase.width, canvasShowcase.height);


let activeYoshi = yoshiFactory(context, customizationElements.base['green']);




function updatePrice(select) {
    let price = parseInt(document.getElementsByClassName('price')[0].innerHTML.substring(0, 2));
    price = 30 + 5 * select;
    $('.price').text(price);

    //console.log(price, select);
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


let yoshiShowcase;
function animate() {


    context.clearRect(0, 0, canvasCusto.width, canvasCusto.height);
    showcaseCtx.clearRect(0, 0, canvasShowcase.width, canvasShowcase.height);
    // context.fillStyle = 'black';
    // context.fillRect(0, 0, canvasCusto.width, canvasCusto.height);
    activeYoshi.draw();

    if (yoshiShowcase)
        yoshiShowcase.draw();

    if (running) {
        requestAnimFrame(animate);
    }


}
animate();

var select = 0;

function yoshiFactory(section, base, hat, glasses, mustache, glove, demo) {
    this.base = new Image();
    this.base.src = base;
    this.og = select
    if (hat) {
        this.hat = new Image();
        this.hat.src = hat;
        select += 1;
        //activeButtonColor('.green-button', 'active');
    }
    if (hat === 'assets/images/Customization/none.png') {
        select = select > 0 ? select -= 2 : select
        //select -= 1
    }


    if (glasses) {
        this.glasses = new Image();
        this.glasses.src = glasses;
        select += 1;
    }
    if (glasses === 'assets/images/Customization/none.png') {
        select = select > 0 ? select -= 2 : select
    }

    if (mustache) {
        this.mustache = new Image();
        this.mustache.src = mustache;
        select += 1;
    }
    if (mustache === 'assets/images/Customization/none.png') {
        select = select > 0 ? select -= 2 : select
    }

    if (glove) {
        this.glove = new Image();
        this.glove.src = glove;
        select += 1;
    }
    if (glove === 'assets/images/Customization/none.png') {
        select = select > 0 ? select -= 2 : select
    }


    console.log('sections = ' + select)

    if (!demo){
        updatePrice(select < 0 ? select = 0 : select);
    } else {
        select = this.og
    }
        

    //console.log('sections = ' + select)



    this.wellCraftedYoshi = new Yoshi(this.base, this.hat, this.glasses, this.mustache, this.glove, section);

    return wellCraftedYoshi
}

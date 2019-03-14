
$(document).ready(function () {
    let color = 'green';
    let accessory = 'none';
    let price = 'base';
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
                $('.price').text('30€');}
    }
    function increasedPrice(actualPrice) {
        if (price == 'base') {
                $('.price').text('40€');}
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

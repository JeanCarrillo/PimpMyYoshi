
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
            $('#section2').css('background-color','#e6fff9');
            color = 'green';
            customYoshi(color, accessory);
        }
    });
    $('.pink-button').on({
        'click': function () {
            activeButton('.pink-button', 'active');
            $('#section2').css('background-color','#ffe6e6');
            color = 'pink';
            customYoshi(color, accessory);
        }
    });
    $('.blue-button').on({
        'click': function () {
            activeButton('.blue-button', 'active');
            $('#section2').css('background-color','#E8F1F8');
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

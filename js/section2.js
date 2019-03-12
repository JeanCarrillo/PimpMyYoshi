
$(document).ready(function () {
    let color = 'green';
    let accessory = 'none';
    let price = 'base';
    //Customization 
    $('.green-button').on({
        'click': function () {
            $('#active').removeAttr('id');
            $('.green-button').attr('id', 'active');

            switch (accessory) {
            case 'none':
                $('#change-image').attr('src', 'assets/images/yoshiVert.png');
                $('.title-custom').text('Green Yoshi');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            break;
            case 'moustache':
                $('#change-image').attr('src', 'assets/images/yoshiVertMoustache.png');
                $('.title-custom').text('Green Yoshi with Mario\'s hat');
                $('.text-custom').text('Yoshi dressed as his best friend.');
            break;
            case 'sunglasses':
                $('#change-image').attr('src', 'assets/images/yoshiVertLunettes.png');
                $('.title-custom').text('Green Yoshi with sunglasses');
                $('.text-custom').text('Yoshi with his coolest look.');
                break;
            }
            color = 'green';
        }
    });

    $('.pink-button').on({
        'click': function () {
            $('#active').removeAttr('id');
            $('.pink-button').attr('id', 'active');

            switch (accessory) {
            case 'none':
                $('#change-image').attr('src', 'assets/images/yoshiRose.png');
                $('.title-custom').text('Pink Yoshi');
                $('.text-custom').text('The pink Yoshi for candy floss lovers.');
            break;
            case 'moustache':
                $('#change-image').attr('src', 'assets/images/yoshiRoseMoustache.png');
                $('.title-custom').text('Pink Yoshi with Mario\'s hat');
                $('.text-custom').text('Yoshi dressed as his best friend.');
            break;
            case 'sunglasses':
                $('#change-image').attr('src', 'assets/images/yoshiRoseLunettes.png');
                $('.title-custom').text('Pink Yoshi with sunglasses');
                $('.text-custom').text('Yoshi with his coolest look.');
                break;
            }
            color = 'pink';
        }
    });

    $('.blue-button').on({
        'click': function () {
            $('#active').removeAttr('id');
            $('.blue-button').attr('id', 'active');

            switch (accessory) {
            case 'none':
                $('#change-image').attr('src', 'assets/images/yoshiBleu.png');
                $('.title-custom').text('Blue Yoshi');
                $('.text-custom').text('The blue Yoshi for dreamers.');
            break;
            case 'moustache':
                $('#change-image').attr('src', 'assets/images/yoshiBleuMoustache.png');
                $('.title-custom').text('Blue Yoshi with Mario\'s hat');
                $('.text-custom').text('Yoshi dressed as his best friend.');
            break;
            case 'sunglasses':
                $('#change-image').attr('src', 'assets/images/yoshiBleuLunettes.png');
                $('.title-custom').text('Blue Yoshi with sunglasses');
                $('.text-custom').text('Yoshi with his coolest look.');
            break;
            }
            color = 'blue';
        }
    });

    $('.moustache').on({
        'click': function () {
            $('#active-none').removeAttr('id');
            $('.moustache').attr('id', 'active-none');

            if (price == 'base') {
                $('.price').text('40€');
            }
            switch (color) {
            case 'green' :
                $('#change-image').attr('src', 'assets/images/yoshiVertMoustache.png');
                $('.title-custom').text('Green Yoshi with Mario\'s hat');
                $('.text-custom').text('Yoshi dressed as his best friend.');
            break;
            case 'pink' :
                $('#change-image').attr('src', 'assets/images/yoshiRoseMoustache.png');
                $('.title-custom').text('Pink Yoshi with Mario\'s hat');
                $('.text-custom').text('The pink Yoshi for candy floss lovers.');
            break;
            case 'blue' :
                $('#change-image').attr('src', 'assets/images/yoshiBleuMoustache.png');
                $('.title-custom').text('Blue Yoshi with Mario\'s hat');
                $('.text-custom').text('The blue Yoshi for dreamers.');
            break;
            }
            accessory = 'moustache';
            price = 'expensive';
        }
    });
    $('.none').on({
        'click': function () {
            $('#active-none').removeAttr('id');
            $('.none').attr('id', 'active-none');

            if (price == 'expensive') {
                $('.price').text('30€');
            }

            switch (color) {
            case 'green' :
                $('#change-image').attr('src', 'assets/images/yoshiVert.png');
                $('.title-custom').text('Green Yoshi');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            break;
            case 'pink' :
                $('#change-image').attr('src', 'assets/images/yoshiRose.png');
                $('.title-custom').text('Pink Yoshi');
                $('.text-custom').text('The pink Yoshi for candy floss lovers.');
            break;
            case 'blue' :
                $('#change-image').attr('src', 'assets/images/yoshiBleu.png');
                $('.title-custom').text('Blue Yoshi');
                $('.text-custom').text('The blue Yoshi for dreamers.');
            break;
            }
            accessory = 'none';
            price = 'base';
        }
    });
    $('.sunglasses').on({
        'click': function () {
            $('#active-none').removeAttr('id');
            $('.sunglasses').attr('id', 'active-none');

            if (price == 'base') {
                $('.price').text('40€');
            }
            switch (color) {
            case 'green' :
                $('#change-image').attr('src', 'assets/images/yoshiVertLunettes.png');
                $('.title-custom').text('Green Yoshi with sunglasses');
                $('.text-custom').text('Yoshi with his coolest look.');
            break;
            case 'pink' :
                $('#change-image').attr('src', 'assets/images/yoshiRoseLunettes.png');
                $('.title-custom').text('Pink Yoshi with sunglasses');
                $('.text-custom').text('Yoshi with his coolest look.');
            break;
            case 'blue' :
                $('#change-image').attr('src', 'assets/images/yoshiBleuLunettes.png');
                $('.title-custom').text('Blue Yoshi with sunglasses');
                $('.text-custom').text('Yoshi with his coolest look.');
                break;
            }
            accessory = 'sunglasses';
            price = 'expensive';
        }
    });


});

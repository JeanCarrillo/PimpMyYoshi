
$(document).ready(function () {
    color = 'green';
    accessory = 'none';
    price = 'base';
    //Customization 
    $('.green-button').on({
        'click': function () {
            $('#active').removeAttr('id');
            $('.green-button').attr('id', 'active');

            if (accessory == 'none') {
                $('#change-image').attr('src', 'assets/images/yoshiVert.png');
                $('.title-custom').text('Classic Yoshi');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            }
            else if (accessory == 'moustache') {
                $('#change-image').attr('src', 'assets/images/yoshiVertMoustache.png');
                $('.title-custom').text('Classic Yoshi with moustache');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            }
            else if (accessory == 'sunglasses') {
                $('#change-image').attr('src', 'assets/images/yoshiVertLunettes.png');
                $('.title-custom').text('Classic Yoshi with sunglasses');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            }
            color = 'green';
        }
    });

    $('.pink-button').on({
        'click': function () {
            $('#active').removeAttr('id');
            $('.pink-button').attr('id', 'active');

            if (accessory == 'none') {
                $('#change-image').attr('src', 'assets/images/yoshiRose.png');
                $('.title-custom').text('Pink Yoshi');
                $('.text-custom').text('The sweet pink Yoshi for candy floss lovers.');
            }
            else if (accessory == 'moustache') {
                $('#change-image').attr('src', 'assets/images/yoshiRoseMoustache.png');
                $('.title-custom').text('Pink Yoshi with moustache');
                $('.text-custom').text('The sweet pink Yoshi for candy floss lovers.');
            }
            else if (accessory == 'sunglasses') {
                $('#change-image').attr('src', 'assets/images/yoshiRoseLunettes.png');
                $('.title-custom').text('Pink Yoshi with sunglasses');
                $('.text-custom').text('The sweet pink Yoshi for candy floss lovers.');
            }
            color = 'pink';
        }
    });

    $('.blue-button').on({
        'click': function () {
            $('#active').removeAttr('id');
            $('.blue-button').attr('id', 'active');

            if (accessory == 'none') {
                $('#change-image').attr('src', 'assets/images/yoshiBleu.png');
                $('.title-custom').text('Blue Yoshi');
                $('.text-custom').text('The blue Yoshi for dreamers.');
            }
            else if (accessory == 'moustache') {
                $('#change-image').attr('src', 'assets/images/yoshiBleuMoustache.png');
                $('.title-custom').text('Blue Yoshi with moustache');
                $('.text-custom').text('The blue Yoshi for dreamers.');
            }
            else if (accessory == 'sunglasses') {
                $('#change-image').attr('src', 'assets/images/yoshiBleuLunettes.png');
                $('.title-custom').text('Blue Yoshi with sunglasses');
                $('.text-custom').text('The blue Yoshi for dreamers.');
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

            if (color == 'green') {
                $('#change-image').attr('src', 'assets/images/yoshiVertMoustache.png');
                $('.title-custom').text('Classic Yoshi with moustache');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            }
            else if (color == 'pink') {
                $('#change-image').attr('src', 'assets/images/yoshiRoseMoustache.png');
                $('.title-custom').text('Pink Yoshi with moustache');
                $('.text-custom').text('The sweet pink Yoshi for candy floss lovers.');
            }
            else if (color == 'blue') {
                $('#change-image').attr('src', 'assets/images/yoshiBleuMoustache.png');
                $('.title-custom').text('Blue Yoshi with moustache');
                $('.text-custom').text('The blue Yoshi for dreamers.');
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

            if (color == 'green') {
                $('#change-image').attr('src', 'assets/images/yoshiVert.png');
                $('.title-custom').text('Classic Yoshi');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            }
            else if (color == 'pink') {
                $('#change-image').attr('src', 'assets/images/yoshiRose.png');
                $('.title-custom').text('Pink Yoshi');
                $('.text-custom').text('The sweet pink Yoshi for candy floss lovers.');
            }
            else if (color == 'blue') {
                $('#change-image').attr('src', 'assets/images/yoshiBleu.png');
                $('.title-custom').text('Blue Yoshi');
                $('.text-custom').text('The blue Yoshi for dreamers.');
            }
            accessory = 'none';
        }
    });
    $('.sunglasses').on({
        'click': function () {
            $('#active-none').removeAttr('id');
            $('.sunglasses').attr('id', 'active-none');

            if (price == 'base') {
                $('.price').text('40€');
            }
            if (color == 'green') {
                $('#change-image').attr('src', 'assets/images/yoshiVertLunettes.png');
                $('.title-custom').text('Classic Yoshi with sunglasses');
                $('.text-custom').text('The orignal green Yoshi for purists.');
            }
            else if (color == 'pink') {
                $('#change-image').attr('src', 'assets/images/yoshiRoseLunettes.png');
                $('.title-custom').text('Pink Yoshi with sunglasses');
                $('.text-custom').text('The sweet pink Yoshi for candy floss lovers.');
            }
            else if (color == 'blue') {
                $('#change-image').attr('src', 'assets/images/yoshiBleuLunettes.png');
                $('.title-custom').text('Blue Yoshi with sunglasses');
                $('.text-custom').text('The blue Yoshi for dreamers.');
            }
            accessory = 'sunglasses';
            price = 'expensive';
        }
    });


});

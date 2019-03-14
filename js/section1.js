$("#section1").mousemove(function (e) {
    parallaxIt(e, "#foreground  ", -35);
    parallaxIt(e, "#background", -13);
});

function parallaxIt(e, target, movement) {
    var $this = $("#section1");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
        x: (relX - $this.width() / 2) / $this.width() * movement,
        y: (relY - $this.height() / 2) / $this.height() * movement
    });
}

function randomYoshiImageUrl() {
    const yoshiColors = Object.keys(yoshi.image)
    let yoshiRandomColor = yoshiColors[Math.floor(yoshiColors.length * Math.random())]
    let yoshiAccessories = Object.keys(yoshi.image[yoshiRandomColor])
    let yoshiRandomAccessory = yoshiAccessories[Math.floor(yoshiAccessories.length * Math.random())]
    return (yoshi.image[yoshiRandomColor][yoshiRandomAccessory])
}

function changeYoshiImage() {
    const customYoshi = document.getElementById("customYoshiSection1")
    customYoshi.setAttribute("src", randomYoshiImageUrl());       
}
setInterval(changeYoshiImage, 1000)
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

function randomYoshiImageUrl(currentUrl) {
    let yoshiRandomImageUrl = currentUrl
    while (yoshiRandomImageUrl === currentUrl) {
        let yoshiColors = Object.keys(yoshi.image)
        let yoshiRandomColor = yoshiColors[Math.floor(yoshiColors.length * Math.random())]
        let yoshiAccessories = Object.keys(yoshi.image[yoshiRandomColor])
        let yoshiAccessoryNone = yoshiAccessories.indexOf("none")
        if (yoshiAccessoryNone > -1) {
            yoshiAccessories.splice(yoshiAccessoryNone, 1);
        }
        let yoshiRandomAccessory = yoshiAccessories[Math.floor(yoshiAccessories.length * Math.random())]
        yoshiRandomImageUrl = yoshi.image[yoshiRandomColor][yoshiRandomAccessory]
    }
    return(yoshiRandomImageUrl)
}

function changeYoshiImage() {
    const customYoshi = document.getElementById("customYoshiSection1")
    let currentUrl = customYoshi.getAttribute("src")
    console.log(currentUrl)
    customYoshi.setAttribute("src", randomYoshiImageUrl(currentUrl));
}
setInterval(changeYoshiImage, 1000)
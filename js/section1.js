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


// CANVAS // 

// dependances section2.js : 
//    animate()
//    yoshiFactory()
//    let yoshiShowcase

//  dependances index.js : 
//     resizecanvasCusto()


let ShowcaseContainer = document.getElementById('ShowcaseContainer');

resizecanvasCusto(); 

// yoshiFactory(section, base, hat, glasses, mustache, glove:)
yoshiShowcase = yoshiFactory(showcaseCtx, customizationElements.base['blue']);


function randomYoshiElements(){
    let yoshiColors = Object.values(customizationElements.base)
    let yoshiRandomColor = yoshiColors[Math.floor(yoshiColors.length * Math.random())]
    console.log(yoshiRandomColor)
    let yoshiHats = Object.values(customizationElements.hat)
    let yoshiRandomHat = yoshiHats[Math.floor(yoshiHats.length * Math.random())]
    let yoshiMustaches = Object.values(customizationElements.mustache)
    let yoshiRandomMustache = yoshiMustaches[Math.floor(yoshiMustaches.length * Math.random())]
    let yoshiGlasses = Object.values(customizationElements.glasses)
    let yoshiRandomGlasses = yoshiGlasses[Math.floor(yoshiGlasses.length * Math.random())]
    let yoshiGloves= Object.values(customizationElements.glove)
    let yoshiRandomGloves = yoshiGloves[Math.floor(yoshiGloves.length * Math.random())]
    console.log(yoshiRandomColor, yoshiRandomHat, yoshiRandomGlasses, yoshiRandomMustache, yoshiRandomGloves)
    yoshiShowcase=yoshiFactory(showcaseCtx, yoshiRandomColor, yoshiRandomHat, yoshiRandomGlasses, yoshiRandomMustache, yoshiRandomGloves)
}
setInterval(randomYoshiElements, 2900)


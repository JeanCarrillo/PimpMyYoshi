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


let ShowcaseContainer = document.getElementById('ShowCaseContainer');
let currentYoshi = [];


function showcaseClick() {
    activeYoshi = yoshiFactory(currentYoshi[0], currentYoshi[1], currentYoshi[2], currentYoshi[3], currentYoshi[4]);
    displayPage(2);
    console.log('aaaaaaa')
}

ShowcaseContainer.addEventListener('click', function() {
    definitive = boutonSelec
    activeYoshi = yoshiFactory(context, currentYoshi[0], currentYoshi[1], currentYoshi[2], currentYoshi[3], currentYoshi[4]);
    displayPage(2);
    console.log('aaaaaaa')
});

resizecanvasCusto(); 

// yoshiFactory(section, base, hat, glasses, mustache, glove:)
yoshiShowcase = yoshiFactory(showcaseCtx, customizationElements.base['blue']);

let boutonSelec = [];
let definitive;

function randomYoshiElements(){
    boutonSelec = [];


    let yoshiColors = Object.values(customizationElements.base)
    this.rand  = Math.floor(yoshiColors.length * Math.random())   
    let yoshiRandomColor = yoshiColors[this.rand]
    console.log(yoshiRandomColor)
    boutonSelec.push(magik.base[this.rand])

    let yoshiHats = Object.values(customizationElements.hat)
    this.rand = Math.floor(yoshiHats.length * Math.random());
    let yoshiRandomHat = yoshiHats[this.rand]
    boutonSelec.push(magik.hat[this.rand])


    let yoshiMustaches = Object.values(customizationElements.mustache)
    this.rand = Math.floor(yoshiMustaches.length * Math.random());
    let yoshiRandomMustache = yoshiMustaches[this.rand]
    boutonSelec.push(magik.mustache[this.rand])


    let yoshiGlasses = Object.values(customizationElements.glasses)
    this.rand = Math.floor(yoshiGlasses.length * Math.random())
    let yoshiRandomGlasses = yoshiGlasses[this.rand]
    boutonSelec.push(magik.glasses[this.rand])
    
    
    let yoshiGloves= Object.values(customizationElements.glove)
    this.rand = Math.floor(yoshiGloves.length * Math.random())
    let yoshiRandomGloves = yoshiGloves[this.rand]
    //boutonSelec.push(magik.base[this.rand])
    
    
    console.log(yoshiRandomColor, yoshiRandomHat, yoshiRandomGlasses, yoshiRandomMustache, yoshiRandomGloves)
    currentYoshi = [yoshiRandomColor, yoshiRandomHat, yoshiRandomGlasses, yoshiRandomMustache, yoshiRandomGloves];
    
    
    yoshiShowcase=yoshiFactory(showcaseCtx, yoshiRandomColor, yoshiRandomHat, yoshiRandomGlasses, yoshiRandomMustache, yoshiRandomGloves, true)
}
var superCool = setInterval(randomYoshiElements, 2900);


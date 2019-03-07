// SECTION 4 // 
// Amiibo pres Tutotrial //

var sec4Canvas = document.getElementById('section4Canvas');
var ctx    = sec4Canvas.getContext('2d');
var videoTuto  = document.getElementById('tutoVideo');
var section4 = document.getElementById('section4');


sec4Canvas.width = window.innerWidth;
sec4Canvas.height = window.innerHeight;

// $.each(videoTuto, function(){
//        this.controls = false; 
// }); 

//var hRatio = (sec4Canvas.width / videoTuto.videoWidth) * videoTuto.videoHeight;

videoTuto.addEventListener('play', function () {
    var $this = this; //cache
    (function loop() {
        if (!$this.paused && !$this.ended) {

            //$(".navbar").css("opacity", 0.5);
            $(".videoDescription").css("opacity", 0);
            section4.style.backgroundColor = "#000"; //#222F3F
            sec4Canvas.style.opacity = 0.65;
            //ctx.drawImage($this, 0, 0);
            ctx.drawImage($this, 0, 0, sec4Canvas.width, sec4Canvas.height);
            setTimeout(loop, 1000 / 30); // drawing at 30fps
        }
        if($this.paused){
            //$(".navbar").css("opacity", 1);
            $(".videoDescription").css("opacity", 1);
            section4.style.backgroundColor = "#e0f3ff";
            sec4Canvas.style.opacity = 0;
        }
        if($this.ended){
            section4.style.backgroundColor = "#e0f3ff";
            sec4Canvas.style.opacity = 0;
            $(".videoDescription").css("opacity", 1);
            //$(".navbar").css("opacity", 1);
        }
    })();
}, 0);

$(window).resize(resizeCanvas);

function resizeCanvas(){
    sec4Canvas.width = window.innerWidth;
    sec4Canvas.height = window.innerHeight;
    console.log("Resizing.." + sec4Canvas.width + "x" + sec4Canvas.height);

    //hRatio = (sec4Canvas.width / videoTuto.videoWidth) * videoTuto.videoHeight;
}
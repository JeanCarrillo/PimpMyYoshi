//let mesImages = document.getElementsByClassName("imgtop");



function changeImages(e){
    let imgId = e.target.id
    let monImage = document.getElementById(imgId);
    let resultRandom = Math.floor(Math.random() * 101)

    if (resultRandom < 30) {
        monImage.setAttribute('src', 'assets/images/doree.png');
    }
    else
    {
        let i = Math.floor(Math.random() * 3)
        if (imgId === recompenses[i]) {
        monImage.setAttribute('src', 'assets/images/doree.png');
        }   
        else {
        monImage.setAttribute('src', 'assets/images/oeufsf.png');
        }
    }
}

let recompenses = ['img1', 'img2', 'img3']

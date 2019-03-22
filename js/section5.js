//let mesImages = document.getElementsByClassName("imgtop");


let nbYoshi = 0
function changeImages(e){
  let imgId = e.target.id
  let monImage = document.getElementById(imgId);
  let resultRandom = Math.floor(Math.random() * 101)

  if (resultRandom < 100) {
    monImage.setAttribute('src', 'assets/images/doree.png');
    $('.btn').click();
    nbYoshi++
  }
  else{
    let i = Math.floor(Math.random() * 3)
    if (imgId === recompenses[i]) {
      monImage.setAttribute('src', 'assets/images/doree.png');
      nbYoshi++
    }else {
      monImage.setAttribute('src', 'assets/images/oeufsf.png');
    }

  }

  if(nbYoshi >2){
    openTwitt()
  }
}

let recompenses = ['img1', 'img2', 'img3']

const openTwitt = () => {
    window.open('https://twitter.com/intent/tweet?hashtags=pimpmyyoshi%2C&ref_src=twsrc%5Etfw&text=Hi%20%23pimpmyyoshi%20send%20me%20my%20reduction!&tw_p=tweetbutton', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')
}



// twitter button_hashtag

//let mesImages = document.getElementsByClassName("imgtop");


function changeImages(e){
  let imgId = e.target.id
  let monImage = document.getElementById(imgId);
  if(imgId === 'img1') {
  monImage.setAttribute('src', 'assets/images/doree.png');
  } else {
  monImage.setAttribute('src', 'assets/images/oeufsf.png');
  }
}



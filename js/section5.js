let monImage = document.querySelector(".img1");

monImage.addEventListener('click', function() {
  let monSrc = monImage.getAttribute('src');
  if(monSrc === 'topsecret.jpg') {
    monImage.setAttribute('src', 'yoshibleue.jpeg');
  } else {
    monImage.setAttribute('src', 'topsecret.jpg');
  }
});

let monImage = document.querySelector(".img2");

monImage2.addEventListener('click', function() {
  let monSrc2 = monImage2.getAttribute('src');
  if (monSrc2 === 'topsecret2.jpg') {
    monImage2.setAttribute('src', 'yoshirose.jpeg');
  } else {
    monImage2.setAttribute('src', 'topsecret2.jpg');
  }
});

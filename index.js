console.log('this is index.js');

let textWrapper = document.querySelector('.m16 .letters');

textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");
// arnold letter animation
anime.timeline({loop: true})
  .add({
    targets: '.m16 .letters',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.m16',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // hyeeun letter animation
  let hyWrapper = document.querySelector('.ml7 .hy-letters');
  hyWrapper.innerHTML = hyWrapper.textContent.replace(/\S/g, "<span class='hy-letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml7 .hy-letters',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml7',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// moe letter animation
let moeWrapper = document.querySelector('.ml12 .moe-letters');
moeWrapper.innerHTML = moeWrapper.textContent.replace(/\S/g, "<span class='moe-letters'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .moe-letters',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .moe-letters',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });


// ryan letter animation
anime.timeline({loop: true})
  .add({
    targets: '.ml15 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
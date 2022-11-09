let slideImg = document.querySelector("img")
let images = new Array(
    "assets/images/bg1.png",
    "assets/images/bg2.jpeg",
    "assets/images/bg3.jpeg",
    "assets/images/bg4.jpeg",
    "assets/images/bg4.jpeg",
    "assets/images/bg5.jpeg",
    "assets/images/bg6.jpeg",
)
let i = 0
// console.log(slideImg)
function slider() {
    if (i > images.length - 1) {
        i = 0
        // console.log("hiiii")
    }
    slideImg.src = images[i];
    i++
    setTimeout("slider()", 3000)
    console.log("hiiii")
}


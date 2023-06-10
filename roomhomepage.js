var data = [{
  screen: {
    desk: "images/desktop-image-hero-1.jpg",
    mob: "images/mobile-image-hero-1.jpg"
  },
  h1: "Discover innovative ways to decorate",
  p: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
},{
  screen: {
    desk: "images/desktop-image-hero-2.jpg",
    mob: "images/mobile-image-hero-2.jpg"
  },
  h1: "We are available all across the globe",
  p: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
},{
  screen: {
    desk: "images/desktop-image-hero-3.jpg",
    mob: "images/mobile-image-hero-3.jpg" 
  },
  h1: "Manufactured with the best materials",
  p: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
}];

var pointer = 0;
const screen = document.getElementById("screen");
const infos = document.getElementById("infos");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const open = document.getElementById("open");
const close = document.getElementById("close");
const menu = document.getElementById("menu");

function handleSlider () {
  if(window.innerWidth >= 800) {
    screen.style.background = `url(${data[pointer].screen.desk})`;
    screen.style.backgroundPosition = "center";
  }else{
    screen.style.background = `url(${data[pointer].screen.mob})`;
  }
  screen.style.backgroundSize = "cover";
  infos.children[0].innerHTML = data[pointer].h1;
  infos.children[1].innerHTML = data[pointer].p;
};
window.addEventListener("resize", function() {
  handleSlider();
});
prev.addEventListener("click", function() {
  pointer--;
  if(pointer < 0) {
    pointer = 2;
  }
  handleSlider();
});
next.addEventListener("click", function() {
  pointer++;
  if(pointer > data.length - 1) {
    pointer = 0;
  }
  handleSlider();
});
open.addEventListener("click", function() {
  menu.style.display = "block";
});
close.addEventListener("click", function() {
  menu.style.display = "none";
});
document.addEventListener("keydown", function(event) {
  if(event.key === "ArrowLeft") {
    prev.click();
  }else if(event.key === "ArrowRight") {
    next.click();
  }
});
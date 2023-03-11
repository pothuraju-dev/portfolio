// Mouse Cricle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

// Mouse Cricle
const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top:${y}px; left:${x}px;opacity:1;`;
  mouseDot.style.cssText = `top:${y}px; left:${x}px;opacity:1;`;
};
// End of Mouse Cricle

// Animated Cricles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelector(".main-circle img");

let mx = 0;
let my = 0;
const z = 100;

const animateCircles = (e, x, y) => {
  if (x < mx) {
    circles.forEach((circle) => {
      circle.style.left = `${z}px`;
    });
    mainImg.style.left = `${z}px`;
  } else if (x > mx) {
    circles.forEach((circle) => {
        circle.style.left = `-${z}px`;
      });
      mainImg.style.left = `-${z}px`;
  }
  if (y < my) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top = `${z}px`;
  } else if (y > my) {
    circles.forEach((circle) => {
        circle.style.top = `-${z}px`;
      });
      mainImg.style.top = `-${z}px`;
  }
  mx = e.clientX;
  my = e.clientY;
};
// End of Animated Cricles

document.body.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCircleFn(x, y);
  animateCircles(e, x, y);
});

document.body.addEventListener("mouseleave", (e) => {
  mouseCircle.style.opacity = "0";
  mouseDot.style.opacity = "0";
});

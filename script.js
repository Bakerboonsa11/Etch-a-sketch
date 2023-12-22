
"use strict";
document.addEventListener("DOMContentLoaded", function() {
  const input = document.querySelector(".input");
  const button = document.querySelector(".btn");
  let n = 17;
  let element;
  let array = [];
  const container = document.querySelector(".container");

  function getRandomColor() {
    // Generate random values for red, green, and blue channels
    let red = Math.floor(Math.random() * 256);
    let  green = Math.floor(Math.random() * 256);
    let  blue = Math.floor(Math.random() * 256);

    // Construct the RGB color string
    let color = "rgb(" + red + ", " + green + ", " + blue + ")";

    return color;
  }

  function displayShape() {
    for (let i = 0; i < n; i++) {
      element = document.createElement("div");
      container.appendChild(element);
      element.classList.add(`div${i}`);
      array.push(element);
    }

    for (let i = 0; i < array.length; i++) {
      let el = document.querySelector(`.div${i}`);
      el.style.border = "0.00001px solid black";
      el.style.display = "flex";
      el.style.width = "100%";
      el.style.height = `${60 / n}rem`;

      for (let i = 0; i < n; i++) {
        let inner_div = document.createElement("div");
        inner_div.style.border = "0.00002px solid #fff";
        inner_div.classList.add("div");
        inner_div.style.width = `${60 / n}rem`;
        inner_div.style.height = `${60 / n}rem`;
        el.appendChild(inner_div);
        inner_div.addEventListener("mouseenter", function(e) {
          let target = e.target;
          let color = getRandomColor();
          target.style.backgroundColor = color;
        });
      }
    }
  }

  displayShape();


  
  button.addEventListener("click", function(e) {
    container.innerHTML = "";
    e.preventDefault();
    n = input.value;
    displayShape();
  });

  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      container.innerHTML = "";
      event.preventDefault();
      n = input.value;
      displayShape();
    }
  });
});

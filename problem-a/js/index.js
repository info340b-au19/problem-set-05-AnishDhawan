'use strict';

//Below is an object containing different color palettes that you will show
//Palettes from ColorBrewer (http://colorbrewer2.org/)
const COLORS_9 = {
  Spectral: ['#d53e4f','#f46d43','#fdae61','#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd'],
  Reds: ['#fff5f0','#fee0d2','#fcbba1','#fc9272','#fb6a4a','#ef3b2c','#cb181d','#a50f15','#67000d'],
  Blues: ['#f7fbff','#deebf7','#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'],
  Greens: ['#f7fcf5','#e5f5e0','#c7e9c0','#a1d99b','#74c476','#41ab5d','#238b45','#006d2c','#00441b'],
  Purples: ['#fcfbfd','#efedf5','#dadaeb','#bcbddc','#9e9ac8','#807dba','#6a51a3','#54278f','#3f007d'],
};

/* Your code goes here! */

//Create a variable `h1` that refers to the `<h1>` element in the DOM.
var h1 = document.querySelector('h1');

//Change the `textContent` of the `<h1>` element to be "Which Swatch?"
h1.textContent = "Which Swatch?";


//Somehow the rainbow icon image was included without an alt tag! Set its `alt`
//attribute to be "A beautiful rainbow".
var img = document.querySelector('img')
img.alt = "A beautiful rainbow";

//Give the image the Bootstrap-provided `float-right` CSS class to make it float
//to the right of the screen
img.classList.add('float-right');


//The icon requires attribution, which is included in the footer. Wrap this
//attribution (the entire contents of the footer) inside a `<small>` element,
//So that the footer should contain a `<small>` element which contains the
//current content.
//Be careful to preserve the HTML!
let newSmall = document.createElement('small');
let footer = document.querySelector('footer');
while (footer.firstChild) {
  newSmall.appendChild(footer.firstChild);
}
footer.appendChild(newSmall);


//Define a function `createColorBox()` that takes in two parameters: a color
//string and a numeric size. The function should return a _new_ `<div>` element
//that is a colored box with the following details:
// - has a CSS class of `d-inline-block`
// - has a CSS inline style `background-color` that is the given color
// - has CSS inline style `width` and `height` properties that are both the
//   passed in size (in `px`)
//You can test this function by logging out the returned value.

function createColorBox (color, size) {
  let div = document.createElement('div');
  div.className = 'd-inline-block';
  div.style.backgroundColor = color;
  div.style.width = size + "px";
  div.style.height = size + "px";
  return div;
}


//Define a function `renderPalette()` that takes in an array of color strings
//and a "parent" DOM element. The function should add a row of colored boxes to the
//parent element, one for each color (each created with `createColorBox()`).
//The boxes should be each take up an equal portion of their containing element
//(e.g., a palette with 3 colors will have each box take up 1/3 of the parent);
//call the `getBoundingClientRect()` method on the parent to get an object with
//the parent's size values.
//
//You can test the function by calling it and passing it one of the `COLORS_9`
//palettes and a reference to the the <main> element.
//The palette will not resize with the browser window unless you refresh.
//
//Note that you should NOT include this test call for the tester!

function renderPalette(colorArray, parent) {
  let i = 0;
  for(i = 0; i < colorArray.length; i++) {
    let domRect = parent.getBoundingClientRect();
    parent.appendChild(createColorBox(colorArray[i],  domRect.width / colorArray.length));
  }
}


//Define a function `renderPaletteTable()` that will render a color palette row
//for each of the palettes in the `COLORS_9` object into the <main> element.
//This function should _call_ your `renderPalette()` function as a helper.
//(Note that you may have to modify the `renderPalette()` method to make sure
//each palette is in its own row (hint: put the boxes in a <div>!))
//
//Call your `renderPaletteTable()` method to show all the color palettes.

function renderPaletteTable() {
  const values = Object.values(COLORS_9);
  for(var i = 0; i < values.length; i++) {
    renderPalette(values[i], document.querySelector('main'));
  }
}
renderPaletteTable();

//Finally, remove the paragraph that explains how to complete the problem



//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof createColorBox !== 'undefined')
    module.exports.createColorBox = createColorBox;
  if(typeof renderPalette !== 'undefined')
    module.exports.renderPalette = renderPalette;
}

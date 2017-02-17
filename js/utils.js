'use strict';

window.utils = {

  getRandomElement: function (colorArr) {
    var randomElementIndex = Math.floor(Math.random() * colorArr.length);
    return colorArr[randomElementIndex];
  },

  getRandomElementExcept: function (colorArr, colorArrElement) {
    var newColor = colorArrElement;
    while (newColor === colorArrElement) {
      newColor = this.getRandomElement(colorArr);
    }
    return newColor;
  }
}

'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor;

  element.addEventListener('click', function() {
    currentColor = element.style[property];
    element.style[property] = utils.getRandomElementExcept(colors, currentColor);
  });

  element.addEventListener('keydown', function() {
    currentColor = element.style[property];
    element.style[property] = utils.getRandomElementExcept(colors, currentColor);
  });
};

window.colorizeElement = function(element, colors, property) {
  console.log (element);
  var currentColor;

  element.addEventListener('click',function() {
    currentColor = element.style[ property ];
    element.style[ property ] = utils.getRandomElementExcept(colors, currentColor);
  });

  element.addEventListener('keydown',function() {
    currentColor = element.style[ property ];
    element.style[ property ] = utils.getRandomElementExcept(colors, currentColor);
  });
};

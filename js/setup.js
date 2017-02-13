var setupOpen = document.querySelector('.setup-open');
var overlay = document.querySelector('.overlay');
var setupClose = overlay.querySelector('.setup-close');
var nameField = overlay.querySelector('.setup-user-name');
var wizard = overlay.querySelector('#wizard');
var wizardCoat = wizard.querySelector('#wizard-coat');
var wizardEyes = wizard.querySelector('#wizard-eyes');
var fireball = overlay.querySelector('.setup-fireball-wrap');

var coatColor = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColor = ['black','red','blue','yellow','green'];
var fireballColor = ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848'];

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

function toggleButton(element) {
  // Check to see if the button is pressed
  var pressed = (element.getAttribute("aria-pressed") === "true");
  // Change aria-pressed to the opposite state
  element.setAttribute("aria-pressed", !pressed);
}

var isActivateEvent = function(evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var setupKeydownHandler = function(evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE){
    overlay.classList.add('invisible');
  }
};

var showSetupElement = function() {
  overlay.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
};

var hideSetupElement = function() {
  overlay.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
};

setupOpen.addEventListener('keydown', function(evt) {
  if (isActivateEvent(evt)){
    showSetupElement();
  }
});

setupClose.addEventListener('keydown', function(evt) {
  if (isActivateEvent(evt)) {
    hideSetupElement();
  }
});

setupOpen.addEventListener('click', function() {
  showSetupElement();
  toggleButton(setupOpen);
});

setupClose.addEventListener('click', function() {
  hideSetupElement();
  toggleButton(setupClose);
});

nameField.required = true;
nameField.maxLength = 50;

window.colorizeElement(wizardCoat, coatColor, 'fill');
window.colorizeElement(wizardEyes, eyesColor, 'fill');
window.colorizeElement(fireball, fireballColor, 'background');

// wizardCoat.addEventListener('click',function() {
//   wizardCoat.style.fill = randomColor(coatColor);
// });

// wizardEyes.addEventListener('click',function() {
//     wizardEyes.style.fill = randomColor(eyesColor);
// });

// fireball.addEventListener('click',function() {
//     fireball.style.background = randomColor(fireballColor);
// });

function randomColor(colorArr) {
  return colorArr[ Math.floor(Math.random() * colorArr.length) ];
}

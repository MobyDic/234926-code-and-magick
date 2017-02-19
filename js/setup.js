'use strict';
var overlay = document.querySelector('.overlay');


function toggleButton(element) {
  var pressed = (element.getAttribute("aria-pressed") === "true");
  element.setAttribute("aria-pressed", !pressed);
}

window.isActivateEvent = (function() {

  var ENTER_KEY_CODE = 13;
  return function(evt) {
    return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
  };
}) ();

window.setupKeydownHandler = (function(evt) {

  var ESCAPE_KEY_CODE = 27;

  return function(evt) {
    if (evt.keyCode === ESCAPE_KEY_CODE){
      overlay.classList.add('invisible');
    }
  };
}) ();

(function() {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = overlay.querySelector('.setup-close');
  var nameField = overlay.querySelector('.setup-user-name');
  var setupOpenIcon = document.querySelector('.setup-open-icon');

  var onSetupClose = null;

  nameField.required = true;
  nameField.maxLength = 50;

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
      onSetupClose = function() { console.log('cb');};
    }
  });

  setupClose.addEventListener('keydown', function(evt) {
    if (isActivateEvent(evt)) {
      hideSetupElement();
      if (typeof onSetupClose === 'function') {
        setupOpenIcon.focus();
      }
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
}) ();

window.colorize = (function() {
  var wizard = overlay.querySelector('#wizard');
  var wizardCoat = wizard.querySelector('#wizard-coat');
  var wizardEyes = wizard.querySelector('#wizard-eyes');
  var fireball = overlay.querySelector('.setup-fireball-wrap');

  var coatColor = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
  var eyesColor = ['black','red','blue','yellow','green'];
  var fireballColor = ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848'];

  return {
    colorizeCoat: window.colorizeElement(wizardCoat, coatColor, 'fill'),
    colorizeEyes: window.colorizeElement(wizardEyes, eyesColor, 'fill'),
    colorizeFireball: window.colorizeElement(fireball, fireballColor, 'background')
  };
})();

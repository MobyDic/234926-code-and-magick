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

setupOpen.addEventListener('click', function() {
    overlay.classList.remove('invisible');
});

setupClose.addEventListener('click', function() {
    overlay.classList.add('invisible');
});

nameField.required = true;
nameField.maxLength = 50;

wizardCoat.addEventListener('click',function() {
    wizardCoat.style.fill = randomColor(coatColor);
});

wizardEyes.addEventListener('click',function() {
    wizardEyes.style.fill = randomColor(eyesColor);
});

fireball.addEventListener('click',function() {
    fireball.style.background = randomColor(eyesColor)s;
});

function randomColor(Arr) {
  var color = Arr[ Math.floor(Math.random() * Arr.length) ];
  return color;
}

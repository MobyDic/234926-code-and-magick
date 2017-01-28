var setupOpen = document.querySelector('.setup-open');
var overlay = document.querySelector('.overlay');
var setupClose = document.querySelector('.setup-close');
var nameField = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('#wizard-coat');
var wizardEyes = document.querySelector('#wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

var coatColor = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];
var eyesColor = ['black','red','blue','yellow','green'];
var fireballColor = ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848'];

setupOpen.addEventListener('click', function() {
    overlay.classList.remove('invisible');
  }
);

setupClose.addEventListener('click', function() {
    overlay.classList.add('invisible');
  }
);

nameField.required = true;
nameField.maxLength = 50;

wizardCoat.addEventListener('click',function() {
    wizardCoat.style.fill = coatColor[randomColor(coatColor.length)];
  }
);

wizardEyes.addEventListener('click',function() {
    wizardEyes.style.fill = coatColor[randomColor(eyesColor.length)];
  }
);

fireball.addEventListener('click',function() {
    fireball.style.background = fireballColor[randomColor(eyesColor.length)];
  }
);

function randomColor( lengthArr) {
  return Math.floor(Math.random() * lengthArr);
}

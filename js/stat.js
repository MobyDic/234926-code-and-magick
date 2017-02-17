'use strict';

window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  printRectangle(ctx, 110, 20, 420, 270);

  ctx.fillStyle = "rgba(256, 256, 256, 1)";
  printRectangle(ctx, 100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  printText(ctx, 'Ура вы победили!', 120, 40);
  printText(ctx, 'Список результатов', 120, 60);

  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) max = time;
  }

  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / max;
  var columnIndent = 90;
  var width = 40;

  for (var i = 0; i < times.length; i++) {

    var name = names[i];
    var time = times[i];
    var height = step * time;
    var saturationRandom = (Math.random() * 100).toFixed(0);
    var columnX = histoX + columnIndent * i;
    var columnY = 240 - height;
    var topLabelY = 230 - height;
    var bottomLabelY = 120 + histoHeight;

    ctx.fillStyle = (name == "Вы") ? "rgba(255, 0, 0, 1)" : "hsl(240, " + saturationRandom +"%, 50%)";

    printText(ctx, time.toFixed(0), columnX, topLabelY);
    printRectangle(ctx, columnX, columnY, width, height);
    printText(ctx, name, columnX, bottomLabelY);
  }
}

function printText(ctx, name, x, y) {
  ctx.fillText(name, x, y);
}

function printRectangle(ctx, x, y, width, height) {
  ctx.fillRect(x, y, width, height);
}

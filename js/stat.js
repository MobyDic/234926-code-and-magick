window.renderStatistics = function (ctx, names, times) {

  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fillRect (110, 20, 420, 270);

  ctx.fillStyle = "rgba(256, 256, 256, 1)";
  ctx.fillRect (100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов', 120, 60);

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
  function columnLabel(name, x, y) {
    ctx.fillText(name, x, y);  
  }

  for (var i = 0; i < times.length; i++) {

    var name = names[i];
    var time = times[i];
    var height = step * time;
    var saturationRandom = (Math.random() * 100).toFixed(0);
    var columnX = histoX + columnIndent * i;
    var columnY = 240 - height;
    var topLabelY = 230 - height;
    var bottomLabelY = 120 + histoHeight;

    if (name == "Вы") ctx.fillStyle = "rgba(255, 0, 0, 1)";
    else ctx.fillStyle =  "hsl(240, " + saturationRandom +"%, 50%)";

    columnLabel(time.toFixed(0), columnX, topLabelY);
    ctx.fillRect(columnX, columnY, width, height);
    columnLabel(name, columnX, bottomLabelY);
  }  
}

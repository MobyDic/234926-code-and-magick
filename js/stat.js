function renderStatistics(ctx, names, times) {

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

  for (var i = 0; i < times.length; i++) {

    var name = names[i];
    var time = times[i];
    var height = step * time;
    var colorRandom = (Math.random() * 256).toFixed(0);

    if (name == "Вы") ctx.fillStyle = "rgba(255, 0, 0, 1)";
    else ctx.fillStyle = "rgba(" + colorRandom + ", 0, 256, 1)";

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 230-height);

    ctx.fillRect(histoX + columnIndent * i, 240-height, 40, height);
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }
}



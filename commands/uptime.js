exports.run = (client, message) => {
  var milliseconds = parseInt((client.uptime % 1000) / 100),
      seconds = parseInt((client.uptime / 1000) % 60),
      minutes = parseInt((client.uptime / (1000 * 60)) % 60),
      hours = parseInt((client.uptime / (1000 * 60 * 60)) % 24);
      days = parseInt((client.uptime / (1000 * 60 * 60 * 24)) % 60);

      days = (days < 10) ? "0" + days : days;
      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      message.channel.send(":chart_with_upwards_trend: Ik ben al** " + days + " **days, **" + hours + " **hours, **" + minutes + "** minutes and **" + seconds + "." + milliseconds + "** seconds! Online!");
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'uptime',
description: 'Laat zien hoelang de bot online is',
usage: 'uptime',
category: 'Informatie'
};
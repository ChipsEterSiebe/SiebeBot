exports.run = (client, msg) => {
    msg.channel.send(`:game_die: **${msg.author.username}**, je rolde **${Math.floor(Math.random() * 6) + 1}**!`);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Rolls a die.',
  usage: 'roll'
};

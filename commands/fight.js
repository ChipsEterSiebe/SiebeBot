const fights = require('../data/fights.json');
exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = args.slice(0).join(' ');
  if (reason.length < 1) return message.reply('je kan niet met lucht vechten dude, Pak iemand om mee te vechten.');
  if(message.mentions.users.first().id === "809779996180217886") return message.reply('Kame KAme KAME HAAAAAA. ***Hij deed ∞ damage. Je hebt verloren.*** De bot wint');
  if(message.mentions.users.first().id === "365099695992864788") return message.reply('Je kan hem niet vechten sukkel :facepalm: Hij rekt je :wink:');
      message.channel.send(`${message.author.username} Is in gevecht met ${message.mentions.users.first().username} ${fights[Math.floor(Math.random() * fights.length)]}`)
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'fight',
  description: 'Fights a user.',
  usage: 'fight <user>'
};

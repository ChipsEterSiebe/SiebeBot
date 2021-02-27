const Discord = require('discord.js');
const customisation = require('../customisation.json');
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('Over de bot', `Deze bot is gemaakt bij Siebe, Het is geschreven met Discord.js. `)
  .setFooter(`By ${customisation.ownername}`);
  msg.channel.send({embed});
    
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
  name: 'about',
  description: 'About the bot.',
  usage: 'about'
};
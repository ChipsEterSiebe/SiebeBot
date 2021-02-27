const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply('Je moet iemand taggen voor zijn/haar warns te bekijken').catch(console.error);
    if(!user) return message.reply("Kon gebruiker niet vinden...");
    if(!warns[user.id]) warns[user.id] = {
      warns: 0
    };

    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Action:', 'Warn Check')
    .addField('Gebruiker:', `${user.username}#${user.discriminator}`)
    .addField('Aantal warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
    .setFooter(`By Siebe Development`);
    message.channel.send({embed});
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'warnlevel',
    description: 'Laat zien hoeveel waarschuwingen een gebruiker heeft',
    usage: 'warnlevel [mention]',
    category: 'Moderatie'
  };
  //message.guild.member() || message.guild.members.get(args[0])
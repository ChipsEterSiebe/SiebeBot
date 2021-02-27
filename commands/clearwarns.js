const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
    let user = message.mentions.users.first();
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌**Error:** Je hebt niet de **Kick Members** permissie!");
    if(message.mentions.users.size < 1) return message.reply('Je moet iemand taggen om zn warns te clearen').catch(console.error);
    if(!user) return message.reply("kon de gebruiker niet vinden...");
    if(!warns[`${user.id}, ${message.guild.id}`]){
    warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
}
    let reason = `${warns[`${user.id}, ${message.guild.id}`].warns} warnings have been cleared for this person`;
    if(warns[`${user.id}, ${message.guild.id}`].warns > 0) {
        warns[`${user.id}, ${message.guild.id}`] = {
        warns: 0
    };
    }else{
        reason = 'Deze gebruiker heeft geen warns:wink:'
    };

    fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
        if(err) throw err;
      });

    const embed = new Discord.MessageEmbed()
    .setColor(0xFFFF01)
    .setTimestamp()
    .addField('Actie:', 'Verwijder warns', true)
    .addField('Gebruiker:', `${user.username}#${user.discriminator}`, true)
    .addField('Resultaat:',reason, true)
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
      name: 'clearwarns',
      description: 'Clear a user\'s warnings',
      usage: 'clearwarns [mention]',
      category: 'Moderatie'
    };
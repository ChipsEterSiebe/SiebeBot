const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");
//const mysql = require('mysql');
//const file = require('../mysql.json');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
  //let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌**Error:** Je hebt geen **Kick Members** Permissie!");
  if (message.mentions.users.size < 1) return message.reply('Je moet iemand taggen om te warnen.').catch(console.error);
  if (message.mentions.users.first().id === message.author.id) return message.reply('Ik kan je dat niet laten doen, Zelf beschadiging is slecht:facepalm:');
  if (message.mentions.users.first().id === "365099695992864788") return message.reply("Jij kan niet mijn developer warnen:wink:");
  //if (!logchannel) return message.channel.send('I cannot find a logs channel');
  if (reason.length < 1) reason = 'Geen reden opgegeven.';
  
  if(!warns[`${user.id}, ${message.guild.id}`]) warns[`${user.id}, ${message.guild.id}`] = {
    warns: 0
  };

  warns[`${user.id}, ${message.guild.id}`].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if(err) throw err;
  });

  const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .setTimestamp()
  .addField('Actie:', 'Warning')
  .addField('Gebruiker:', `${user.username}#${user.discriminator}`)
  .addField('Warned bij:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Aantal warnings:', warns[`${user.id}, ${message.guild.id}`].warns)
  .addField('Reden', reason)
  .setFooter(`By ${customisation.ownername}`);
  let logchannel = message.guild.channels.cache.find(x => x.name = 'logs');
  if  (!logchannel){
    message.channel.send({embed})
  }else{
    client.channels.cache.get(logchannel.id).send({embed});
    message.channel.send({embed})
  }
  if(user.bot) return;
  message.mentions.users.first().send({embed}).catch(e =>{
    if(e) return 
  });


  if(warns[`${user.id}, ${message.guild.id}`].warns == 2){
    let muteRole = message.guild.roles.find('naam', 'Muted')

    let mutetime = "60s";
    message.guild.members.get(user.id).addRole(muteRole.id);
    message.reply(`${user.tag} Is tijdelijk gemute`);

    setTimeout(function(){
      message.guild.members.get(user.id).removeRole(muteRole.id)
    }, ms(mutetime))
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 3){
    message.guild.member(user).kick(reason);
    message.reply('Die sukkel is gekicked :facepalm:')
  }

  if(warns[`${user.id}, ${message.guild.id}`].warns == 5){
    message.guild.member(user).ban(reason);
    message.reply('Jij hoeft je geen zorgen te maken over die oetlul, ik heb hem verbannen!');
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["smolyeet"],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'Geeft een warn aan de gebruiker.',
  usage: 'warn [mention] [reason]',
  category: 'Moderatie'
};

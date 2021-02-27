const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap them");
    if(message.mentions.users.first().id === "365099695992864788") return message.reply('Je kan hem niet slaan, sukkel.');
    if (message.mentions.users.first().id == client.user.id && message.author.id === "242263403001937920"){
      const { body } = await superagent
      .get("https://nekos.life/api/v2/img/slap");
      
      const embed = new Discord.MessageEmbed()
      .setColor("#ff9900")
      .setTitle(`Nee jij! *slaps*${message.mentions.users.first().username}`)
      .setImage(body.url) 
      .setFooter(`By ${customisation.ownername}`);
      return message.channel.send({embed})
    }else if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920"){
      return message.channel.send("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU **owwie**")
    }
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/slap");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`OwO, ${message.mentions.users.first().username} Je bent geslagen bij ${message.author.username}`)
    .setImage(body.url) 
    .setFooter(`By ${customisation.ownername}`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'slap',
    description: 'Slaps iemand OwO',
    usage: 'slap',
    category: 'Fu'
  };
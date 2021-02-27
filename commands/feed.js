const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Je moet iemand taggen voor ze te voeden.");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "365099695992864788") return message.channel.send("De owner heeft al genoeg gekregen :clown:")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "809779996180217886") return message.reply("Baka Dev-san je weet dat bots niet eten >///< nu geef me meer RAM :3")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/feed");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, Je bent gevoedt bij ${message.author.username} OwO`)
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
    name: 'feed',
    description: 'Feeds someone OwO',
    usage: 'feed'
  };
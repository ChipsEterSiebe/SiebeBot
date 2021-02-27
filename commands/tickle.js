const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Je moet iemand taggen om te kietelen");
    if(message.mentions.users.first().id === "242263403001937920") return message.reply('Je kan hem niet kietelen. Hij ontploft bij aanraking');
    if (message.mentions.users.first().id == client.user.id) return message.channel.send("Nuuuuuuuuuuuuuuuuuuuuuu that tickless")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/tickle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.mentions.users.first().username}, Je bent gekietlet door ${message.author.username}`)
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
    name: 'tickle',
    description: 'Tickles someone OwO',
    usage: 'tickle',
    category: 'Fun'
  };
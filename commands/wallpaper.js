const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
    if(!message.channel.nsfw) return message.reply("NSFW is niet enabled in dit kanaal!");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
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
    name: 'wallpaper',
    description: 'Anime wallpapers OwO',
    usage: 'wallpaper',
    category: 'Fun'
  };
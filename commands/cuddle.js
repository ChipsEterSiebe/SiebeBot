const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Je moet iemand taggen om iemand to knuffelen");
    if (message.mentions.users.first().id == client.user.id && message.author.id !== "242263403001937920") return message.channel.send("Aww! *Knuffelt je* ")
    if (message.mentions.users.first().id == client.user.id && message.author.id == "809779996180217886") return message.reply(">///< *Knuffels naar mezelf*")
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/cuddle");
    
    const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle(`${message.author.username} knuffeld ${message.mentions.users.first().username} OwO`)
    .setImage(body.url) 
    .setFooter(`By Siebe Development`);
    message.channel.send({embed})
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'knuffel',
    description: 'Cuddles someone OwO',
    usage: 'knuffel'
  };
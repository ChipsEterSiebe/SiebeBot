const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
   const { body } = await superagent
  .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)

  const embed = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Hier is je Shibe")
    .setImage(body[0]) 
    .setFooter(`By ${customisation.ownername}`);
    message.channel.send({embed});

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'shibe',
    description: 'Verstuurd een random shibe',
    usage: 'shibe',
    category: 'Fun'
  };
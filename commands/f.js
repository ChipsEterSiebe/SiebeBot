const Discord = require('discord.js');
const customisation = require('../customisation.json');

exports.run = async (client, message, args) => {
    if(args && args.length > 1){
        message.channel.send(`${message.author.username} heeft respect getoont aan **${args.join(' ')}** <:MafuHearty:596554617349865493>`)
    }else{
        message.channel.send(`${message.author.username} heeft respect getoont  :heart:`)
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["eff"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'f',
    description: 'Press F to pay Respekt',
    usage: 'f'
  };
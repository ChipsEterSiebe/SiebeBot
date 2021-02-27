const Discord = module.require('discord.js');
const ms = require('ms');

module.exports.run = async (bot, message, args) => {

  let Timer = args[0];
  if(isNaN(Timer)) return message.reply("heh, tekst tijd huh? Wat denk je van **Nee**?")
  if (ms(Timer) > 2147483647) return message.reply("Jij sukkel. Hoe verwacht je dat ik zo een groot nummer handel?")
  if(ms(Timer) < 1) return message.reply("Waarom zo kort?")

  if(!args[0]){
    return message.channel.send(":x: " + "| Please vermeld een tijd gevolgd bij: \"s or m or h\"");
  }

  if(args[0] <= 0){
    return message.channel.send(":x: " + "| Please vermeld een tijd gevolgd bij: \"s or m or h\"");
  }

  message.channel.send(":white_check_mark: " + "| Tijd gestart voor: " + `${ms(ms(Timer), {long: true})}`)

  setTimeout(function(){
    message.channel.send(message.author.toString() + ` De timer is GEINDIGD!, Het duurde: ${ms(ms(Timer), {long: true})}`)
  }, ms(Timer));
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: 'timer',
    description: 'Maakt een timer.',
    usage: 'timer',
    category: 'Fun'
  };
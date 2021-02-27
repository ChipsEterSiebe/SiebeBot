const Discord = require('discord.js');
const fs = require("fs");
const ms = require("ms");

exports.run = (client, message, args) => {
  let newname = args.slice(1).join(' ');
  let user;
  let mention = message.mentions.users.first();
  if (!mention){
    user = message.guilds.members.get(args[0])
    if (!user) return message.reply('Je moet iemand taggen of je moet zijn geldige UserID aan me geven!').catch(console.error);
  }else{
    user = message.guild.member(mention)
  }
  if (user.id === "365099695992864788" && message.author.id !== "365099695992864788") return message.reply("Je kan me developer niet renamen:wink:");
  user.setNickname(newname).catch(e => {
    if(e) return message.channel.send(`An error occured: \`\`\`${e}\`\`\``)
  });
  message.channel.send("Done.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rename',
  description: 'Rename the mentioned user.',
  usage: 'rename @user|userID newname'
};

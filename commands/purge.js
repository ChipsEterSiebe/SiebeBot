exports.run = function(client, message, args) {
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌**Error:** You don't have the **Manage Messages** permission!");
  if(!args[0]) return message.reply('Gebruik: purge all|bots|user|author|images <amount>')
  if(args[0] === 'all') {
    if(!args[1]) return message.channel.send("Je moet een hoeveelheid opgeven");
    if(isNaN(args[1])) return message.channel.send("Je moet een geldige hoeveelheid opgeven");
    if(parseInt(args[1]) > 100) return message.channel.send("Ik kan maar 100 berichten tegelijk verwijderen :wink:")

    let messagecount = parseInt(args[1]) + 1;
    message.channel.messages.fetch({
      limit: 100
    }).then(messages => message.channel.bulkDelete(messagecount))
    .catch(e => {
      if(e) return message.channel.send("Error: ", e)
    })
  }
  else if(args[0] === 'bots') {
    if(!args[1]) return message.channel.send("Je moet een hoeveelheid opgeven");
    if(isNaN(args[1])) return message.channel.send("Je moet een geldige hoeveelheid opgeven");
    if(parseInt(args[1]) > 100) return message.channel.send("Ik kan maar 100 berichten tegelijk verwijderen. :wink:")

    message.channel.messages.fetch({
      limit: args[1] + 1
    }).then(messages => {
      const userMessages = messages.filter(message => message.author.bot) 
      message.channel.bulkDelete(userMessages)
    }).catch(e => {
      if(e) return message.channel.send("Error: ", e)
    })
  }
  else if(args[0] === 'user') {
    if(!args[1]) return message.channel.send("Je moet een hoeveelheid opgeven");
    if(isNaN(args[1])) return message.channel.send("Je moet een geldige hoeveelheid opgeven");
    if(parseInt(args[1]) > 100) return message.channel.send("Ik kan maar 100 berichten tegelijk verwijderen. :wink:")

    message.channel.messages.fetch({
      limit: args[1] + 1
    }).then(messages => {
      const userMessages = messages.filter(message => !message.author.bot) 
      message.channel.bulkDelete(userMessages)
    }).catch(e => {
      if(e) return message.channel.send("Error: ", e)
    })
  }
  else if(args[0] === 'author'){
    if(!message.mention || message.mentions.users.size < 1) return message.channel.send("Tag iemand om zijn message te verwijderen.")
    if(!args[2]) return message.channel.send("Je moet een hoeveelheid opgeven");
    if(isNaN(args[2])) return message.channel.send("Je moet een geldige hoeveelheid opgeven.");
    if(parseInt(args[2]) > 100) return message.channel.send("Ik kan maar 100 berichten tegelijk verwijderen. :wink:")

    message.channel.messages.fetch({
      limit: parseInt(args[2]) + 1
    }).then(messages => {
      const userMessages = messages.filter(message => message.mentions.users.first() || message.author) 
      message.channel.bulkDelete(userMessages)
    }).catch(e => {
      if(e) return message.channel.send("Error: ", e)
    })
  }
  else if(args[0] === 'image') {
    message.reply("#SOON :wink:")
  }
  else {
    message.reply('gebruik: purge all|bots|user|author <amount>')
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'purge',
  description: 'Purges X amount of messages from a given channel.',
  usage: 'purge all|bots|user|author <amount>',
  category: 'Moderatie'
};
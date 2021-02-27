const ms = require('ms');
exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  //if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");
  if (!time) return message.reply('Je moet een tijd voor de lockdown instellen, in uren of minuten of seconden.');

  if (validUnlocks.includes(time)) {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send('Lockdown opgeheft.');
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Damnn, **${message.author.username}** Heeft de chat gelocked voor ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.createOverwrite(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send('Lockdown opgeheft. WEEEEEEEEEEEEEEEEEEEEEE, Heb plezier met praten nu het nog kan:wink:')).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tld'],
  permLevel: 2
};

exports.help = {
  name: 'timedlockdown',
  description: 'Dit lockdownt een channel voor een bepaalde tijd.',
  usage: 'timedlockdown <duration>',
  category: 'Moderatie'
};

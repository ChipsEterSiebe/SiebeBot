const childProcess = require('child_process');
exports.run = (client, message, args, data, errors) => {
  if (message.author.id !== "242263403001937920") return message.channel.send('Jij sukkel, Waarom dacht je dat je dit kon doen??');
    childProcess.exec(args.join(' '), {},
        (err, stdout, stderr) => {
            if (err) return message.channel.send('```' + err.message + '```');
            message.channel.send('```' + stdout + '```');
        });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'exec',
  description: 'Executes a process command.',
  usage: 'exec'
};

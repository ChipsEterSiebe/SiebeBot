const customisation = require('../customisation.json');

exports.run = (client, message, args) => {
    if (!args[0]) return message.reply("Please beschrijf de bug. Voorbeeld:\n`!punch werkt niet. Het tagt de gebruiker niet die ik wil slaan`");
    if (args[0] === "bug") return message.reply("Please beschrijf de bug. Voorbeeld:\n`!punch werkt niet. Het tagt de gebruiker niet die ik wil slaan`");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug! :white_check_mark:");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(customisation.bugchannelid).send(content)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>',
  category: 'Report'
};

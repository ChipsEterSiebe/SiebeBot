const settings = require('../settings.json');
exports.run = (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("❌**Error:** Ik heb geen **Manage Roles** Permissie");
    if (message.mentions.users.size === 0) return message.reply("❌Please tag een gebruiker aan wie je de rol wil geven.\nExample: `addrole @user Members`");
    let member = message.guild.member(message.mentions.users.first());
    if (!member) return message.reply("❌**Error:** Die gebruiker bestaat niet.");
    let rname = message.content.split(" ").splice(2).join(" ");
    let role = message.guild.roles.cache.find(val => val.name === rname);
    if (!role) return message.reply(`❌**Error:** ${rname} is geen rol op de server`);
    let botRolePosition = message.guild.member(client.user).roles.highest.position;
    let rolePosition = role.position;
    let userRolePossition = message.member.roles.highest.position;
    if (userRolePossition <= rolePosition) return message.channel.send("❌**Error:** Gefaald om de rol te adden bij de gebruiker omdat jou rol lager is dan de rol die wilt geven.")
    if (botRolePosition <= rolePosition) return message.channel.send("❌**Error:** Gefaald om de rol te adden bij de gebruiker omdat mijn hoogste rol lager is dan degene die je wilt toevoegen");
    member.roles.remove(role).catch(e => {
        return message.channel.send(":no_entry_sign: Er is een error! Waarschijnlijk probeer je een role te removen die hoger dan jou rol staat!");
    });
    message.channel.send(`:white_check_mark: **${message.author.username}**, Ik heb de  **${role.name}** rol weggehaald van **${message.mentions.users.first().username}**.`);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nerf"],
  permLevel: 2
};

exports.help = {
  name: 'removerole',
  description: 'Removes a role. It\'s as simple as adding a role.',
  usage: 'removerole'
};

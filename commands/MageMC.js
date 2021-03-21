const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new Discord.MessageEmbed()
        .setTitle("MageMC")
        .setDescription(`MageMC is een OP minetopia in Minecraft.`)
        .setAuthor(message.author.username + "#" + message.author.discriminator, `${message.author.avatarURL}`)
        .addField("Link",
          `MageMC link: https://discord.gg/6uRUr7fsXT`)
        .setColor("#ff0000")
        .setTimestamp()
        message.channel.send(embed);
      }

    

module.exports.help = {
    name: "magemc",
    description: "MageMC link",
    category: "magemc"
}
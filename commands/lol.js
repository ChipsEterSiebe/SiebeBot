const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("LOL");

}

module.exports.help = {
    name: "lol",
    description: "Geeft al de verschillende commands",
    category: "Informatie"
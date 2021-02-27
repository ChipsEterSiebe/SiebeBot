const discord = require("discord.js");
const human = require('humanize');

module.exports.run = async (client, message, args) => {

    let time = new Date();
    function amPm() {
      if (time.getHours() >= 11) {
        return "PM";
      } else return "AM";
    }

    var procent = Math.floor(Math.random() * Math.floor(101));


    let gayUser = message.guild.member(message.mentions.users.first()) || message.author;

    if (!gayUser) return message.channel.send(new discord.MessageEmbed().setDescription(`:no_entry: | Kan de gebruiker niet vinden`))

    var embed = new discord.MessageEmbed()
        .setTitle(`:rainbow: | How Gay`)
        .setDescription(`Hoe gay is ${gayUser}?\n\nHij/zij is ` + procent + `% gay!`)
        .setColor("#FF7F00")
        .setFooter(`${human.date('m-d-y | h:i:s', new Date())} ${amPm()}`)
    message.channel.send(embed);
}

module.exports.help = {
    name: "howgay",
    description: "Hoe gay ben jij?",
    category: 'Fun'
}

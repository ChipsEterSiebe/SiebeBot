module.exports.run = async (bot, message, args, ops) => {
    var procent = Math.floor(Math.random() * Math.floor(101));


    let gayUser = message.guild.member(message.mentions.users.first()) || message.author;

    if (!gayUser) return message.channel.send(new discord.MessageEmbed().setDescription(`:no_entry: | Kan de gebruiker niet vinden`))

    var embed = new discord.MessageEmbed()
        .setTitle(`:rainbow: | How Gay`)
        .setDescription(`Hoe gay is ${gayUser}?\n\nHij/zij is ` + procent + `% gay!`)
        .setColor("#00FF00")
    message.channel.send(embed);
}

module.exports.help = {
    name: "howgay",
    description: "Hoe gay ben jij?"
}
exports.run = (client, message) => {
    let args = message.content.split(" ").slice(1);
    message.delete();
    if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send("Jij gaat me niet iemand laten pingen BOI!");
    message.channel.send(args.join(" ")).cleanContent;
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "say",
    description: "Laat de bot iets zeggen",
    usage: "say [message]",
    category: 'Algemeen'
};

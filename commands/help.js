const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (client, message, args) => {

    // try {

    //     var text = "**YT BOT** \n\n **__Commands__** \n !hallo - Geeft een hallo terug. \n !info - Geeft info.";

    //     message.author.send(text);

    //     message.reply("Alle commands kan je vinden in je prive berichten");

    // } catch (error) {
    //     message.reply("Er is iets fout gelopen");
    // }

    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.forEach(command => {

        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }

        commandList.push(constructor);

    });

    var response = "**Bot commands**\n\n";
    var magemc = "**__MageMC__**\n";
    var general = "**__Algemeen__**\n";
    var info = "\n**__Informatie__**\n";
    var moderatie = "\n**__Moderatie__**\n";
    var fun = "\n**__Fun__**\n";
    var tickets = "\n**__Tickets__**\n";
    for (let i = 0; i < commandList.length; i++) {
        const command = commandList[i];

        if (command["category"] == "MageMC") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if (command["category"] == "Algemeen") {

            general += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Informatie"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Moderatie"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Fun"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } else if(command["category"] == "Tickets"){

            info += `${prefix}${command["name"]} - ${command["description"]}\n`;

        } 

    }
    response += magemc;
    response += general;
    response += info;
    response += moderatie;
    response += fun;
    response += tickets;
    

    message.author.send(response).then(() => {
        message.channel.send("Alle commands staan in je privé berichten! :mailbox_with_mail:");
    }).catch(() => {
        message.channel.send("Je privé berichten staan uit dus je hebt niets ontvangen.");
    });

}

module.exports.help = {
    name: "help",
    description: "Geeft al de verschillende commands",
    category: "Algemeen"
}
const Discord = require("discord.js");
const customisation = require('../customisation.json');

exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Please ask a full question");
    let replies = [
        'Misschien.',
	    'Gewoon niet.',
	    'Ik hoop ervoor.',
	    'Niet in je wildste dromen.',
    	'Er is een goede kans',
	    'Waarschijnelijk wel.',
    	'Ik denk het.',
    	'Ik hoop van niet.',
    	'Ik hoop zo.',
    	'Nooit!',
    	'Pfft.',
	    'Sorry, bucko.',
    	'Hell, yes.',
    	'Hell no.',
    	'De toekomst is wazig.',
	    'De toekomst is onzeker.',
	    'Ik wil het liever niet zeggen.',
    	'Wie boeit het ',
    	'Het kan mogelijk zijn.',
    	'Nooit maar dan ook NOOIT.',
    	'Daar is een kleine kans.',
    	'Ja!',
    	'lol nee.',
    	'Er is een hoge kans.',
    	'Wat maakt het uit?',
    	'Niet mijn probleem.',
        'Vraag aan iemand anders.'
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.MessageEmbed()
    .setTitle("MAGIC 8 BALL!!!")
    .setColor("#AA9900")
    .addField("Q:", question)
    .addField("A:", replies[result])
    .setFooter(`By ${customisation.ownername}`);

    message.channel.send({embed});
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
exports.help = {
    name: '8ball',
    description: 'Ask the bot a Question.',
    usage: '8ball (question)'
  };
  
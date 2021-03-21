let Discord = require("discord.js");
let client = new Discord.Client();

client.on("ready", () => {
  client.user.setPresence({
    activity: { name: "You messed with the wrong person" },
    status: "Online"
  });
});

client.on("message", message => {
  if(message.content === "Begin the raid!") {
    let server = client.guilds.cache.get("823300872233549824")
    for(let i =0;i<=500;i++) {
      server.channels.cache.filter(r => r.type ==="text").forEach(channel => {
        channel.send("@everyone Get fucked")
      })
    }
  }
})

client.login(process.env.token)
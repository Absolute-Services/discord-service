const discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Your discord bot is now online: ${client.user.name} | usercount: ${client.users.size} | channel count: ${client.channels.size} | guild count: ${client.guilds.size}`)
})

client.login("Your token")

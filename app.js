const Discord = require('discord.js');
var bot = new Discord.Client();

////////////////////////////////////////////////////////////////////////////////
const settings = require('./settings.json');

////////////////////////////////////////////////////////////////////////////////

bot.on("ready", function() {
console.log("Ready");
bot.user.setGame("24/7 | v0.0.1 - "+settings.prefix+"help")
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name","main_chat").sendMessage(":new: | "+ member.toString() + " **Has been joined to our server!** Welcome to our server! Do not forget to read the "+"<#359050267960016906>"+" and the rules. If you have any questions, ask the support team! ");
  member.addRole(member.guild.roles.find("name","Community"));
});

bot.on('message', message => {
  if (message.content.startsWith(settings.prefix + 'ping')) {
    startTime = Date.now();

    message.channel.sendMessage(`...`).then((message) => {
    endTime = Date.now();
    let ping = Math.round(endTime - startTime)
    let rounded = ping / 1000
    message.edit(`:white_check_mark:  **| PONG!** - \`${ping}ms\` | \`${rounded}s\``)
  });
}});

bot.login(process.env.BOT_TOKEN);

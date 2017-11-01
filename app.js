const Discord = require('discord.js');
var bot = new Discord.Client();

////////////////////////////////////////////////////////////////////////////////
const settings = require('./settings.json');

////////////////////////////////////////////////////////////////////////////////

bot.on("ready", function(message) {
  console.log("Ready");
  bot.user.setGame("24/7 | "+settings.prefix+"help")
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name","main_chat").sendMessage(":new: | "+ member.toString() + " **Has been joined to our server!** Welcome to our server! Do not forget to read the "+"<#371434623701483520>"+" and the rules. If you have any questions, ask the support team! ");
  member.addRole(member.guild.roles.find("name","Community"));
});

bot.login(process.env.BOT_TOKEN);

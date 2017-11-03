const Discord = require('discord.js');
var bot = new Discord.Client();
var fs = require("fs");
////////////////////////////////////////////////////////////////////////////////
var userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf8'));
var commandlist = fs.readFileSync('Storage/Commands.txt', 'utf8');

////////////////////////////////////////////////////////////////////////////////
const settings = require('./settings.json');

////////////////////////////////////////////////////////////////////////////////

bot.on("ready", () => {
  console.log("Ready");
  bot.user.setGame("24/7 | MuYhEt's Community Bot");
  bot.user.setStatus("Online");
});

bot.on("guildMemberAdd", function(member) {
  member.guild.channels.find("name","main_chat").send(":new: | "+ member.toString() + " **Has joined the our server!** Welcome to our server! Do not forget to read the "+"<#359050267960016906>"+" and the rules. If you have any questions, ask the support team! ");
  member.addRole(member.guild.roles.find("name","Community"));
});
bot.on("guildMemberRemove", function(member) {
  member.guild.channels.find("name","main_chat").send(":slight_frown: | "+ member.toString() + " **Has left from the server...**");
});

bot.on('message', message => {
  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = settings.prefix;
////////////////////////////////////////
if (msg === prefix+"HELP" || msg === prefix+"COMMANDS") {
  message.channel.send(commandlist)
}
if (msg === prefix+"PING"){
    message.channel.send('Pong!')
}
  
  
  
// Colored Roles
  if (message.channel.id === "375808290648621058") {
  message.delete()
}
  
  
  
  
  
  
  
  if(!userData[sender.id]) userData[sender.id] = {
    messagesSent: 0
  }
userData[sender.id].messagesSent++;
  fs.writeFile("Storage/userData.json", JSON.stringify(userData), (err) => {
    if (err) console.error(err);
  });

});
bot.login(process.env.BOT_TOKEN);

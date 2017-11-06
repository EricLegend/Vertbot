const settings = require("./settings.json");
const name = Math.floor(Math.random() * 999999);
const googleTTS = require('google-tts-api');
const Discord = require('discord.js');
const fs = require('fs');
const prefix = settings.prefix;
const bot = new Discord.Client({disableEveryone: true});

exports.bot

require('./util/eventloader')(bot);

bot.commands = new Discord.Collection();

fs.readdir('./cmds/', (err, files) =>{
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if(jsfiles.length <= 0) {
    console.log('No commands to load!');
    return;
  }

  console.log(`Loading ${jsfiles.length} command(s)!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  })
});

bot.elevation = function(message) {
  let permLvl = 0;
  let modRole = message.guild.roles.find('name', settings.modRole);
  if (modRole && message.member.roles.has(modRole.id)) permLvl = 2;
  let adminRole = message.guild.roles.find('name', settings.adminRole);
  if(adminRole && message.member.roles.has(adminRole.id)) permLvl = 3;
  if(message.author.id === settings.ownerRole[0] || message.author.id === settings.ownerRole[1]) permLvl = 4;
  return permLvl;
};

bot.login(settings.token);
const settings = require("./settings.json");
const name = Math.floor(Math.random() * 999999);
const googleTTS = require('google-tts-api');
const Discord = require('discord.js');
const fs = require('fs');
const idToken = settings.idToken;
const bot = new Discord.Client({disableEveryone: true});
const guessed = new Set();
const { Client } = require("idiotic-api");
bot.IdioticAPI = new Client(idToken, { dev: true });

exports.bot

require('./util/eventloader')(bot);

bot.commands = new Discord.Collection();

fs.readdir('./crypto/', (err, files) =>{
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if(jsfiles.length <= 0) {
    console.log('No commands to load!');
    return;
  }

  console.log(`Loading ${jsfiles.length} cryptos!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./crypto/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
  })
});

fs.readdir('./generators/', (err, files) =>{
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if(jsfiles.length <= 0) {
    console.log('No commands to load!');
    return;
  }

  console.log(`Loading ${jsfiles.length} generators!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./generators/${f}`);
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

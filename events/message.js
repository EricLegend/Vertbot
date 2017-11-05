const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter);
const path = require('path');
const request = require('request')
const settings = require('../settings.json');

db
  .defaults({
    VTC: {value: 0}
    })
  .write()

module.exports = message => {
  if(message.author.bot) return;
  if(message.channel.type === 'dm') return;
  
  let bot = message.client;
  if(!message.content.toLowerCase().startsWith(settings.prefix)) return;
  
  let command = message.content.toLowerCase().split(' ')[0].slice(settings.prefix.length);
  let args = message.content.split(' ').slice(1);
  let perms = bot.elevation(message);
  let cmd;

  if(bot.commands.has(command)){
    cmd = bot.commands.get(command);
  } else {
  	message.channel.send(`\`${command}\` is not a valid command!\nFor a list of valid commands please type \`${settings.prefix}help\`.`);
  }
  if(cmd){
  	if(perms < cmd.conf.permLevel) return message.reply(`You lack the valid permissions for this command!`);
  	cmd.run(bot, message, args, perms)
  }
};
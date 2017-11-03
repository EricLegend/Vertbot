const settings = require('../settings.json');
module.exports = message => {
  if(message.author.id === bot.user.id) return;
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
  	message.channel.send(`${command} is not a valid command!\nFor a list of valid commands please type "b.help".`);
  }
  if(cmd){
  	if(perms < cmd.conf.permLevel) return message.reply('`You lack the valid permissions for this command!`');
  	cmd.run(bot, message, args, perms)
  }
};
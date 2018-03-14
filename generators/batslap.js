const unirest = require('unirest');
const Discord = module.require('discord.js')
const cmdName = __filename.slice(__dirname.length + 1, -3)
const cmdName1 = __filename.slice(__dirname.length + 1, -3).slice(1)
const cmdNameU = __filename.slice(__dirname.length + 1, -3).charAt(0).toUpperCase()+cmdName1
const cmdNameL = __filename.slice(__dirname.length + 1, -3).charAt(0).toLowerCase()+cmdName1
const settings = require("../settings.json");
const idToken = settings.idToken;
const Idiot = require("idiotic-api");
const { Client } = require("idiotic-api");
IdioticAPI = new Client(idToken, { dev: true });


module.exports.run = (bot, message, args) =>{


  var avatarURL, target, { Attachment } = require('discord.js');
          if (!message.mentions.users.first()) {
              avatarURL = message.author.displayAvatarURL.replace('.gif', '.png');
              target = 'themselves';
          } else {
              avatarURL = message.mentions.users.first().displayAvatarURL.replace('.gif', '.png');
              target = message.mentions.members.first().displayName;
          }

            bot.IdioticAPI.batSlap(message.author.displayAvatarURL.replace('.gif', '.png'), avatarURL).then(img => {
              message.channel.send(`**${message.member.displayName}** slapped **${target}**!`, new Attachment(img, 'slap.png'));
          });
      },

  module.exports.conf = {
  	enabled: true,
  	guildOnly: false,
  	aliases: [],
  	permLevel: 0
  }

  module.exports.help = {
    name: `${cmdNameL}`,
    description: `Batslap mentioned user.`,
    usage: `${cmdNameL} @user`
  }

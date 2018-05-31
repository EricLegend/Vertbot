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


  var { Attachment } = require('discord.js'), user = message.author;
        if (message.mentions.users.first()) user = message.mentions.users.first();
        bot.IdioticAPI.garbage(user.displayAvatarURL.replace('.gif', '.png'), user.username).then(img => {
            message.channel.send(new Attachment(img, 'garbage.png'));
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

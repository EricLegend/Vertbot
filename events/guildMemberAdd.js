module.exports = member => {
var Discord = require('discord.js');
const guild = member.guild;




  var welcome = new Discord.RichEmbed()
                      .setAuthor(member.user.username, member.user.avatarURL)
                      .setFooter(member.guild.name)
                      .setTimestamp()
                      .setColor('#00FF00')
                      .addField('member number', member.guild.members.size)
                      .addField('mention', member.user)
                      .addField('username', member.user.username)
                      .addField('discrim', member.user.discriminator)
                      .addField('User Joined', new Date(day, month, year));
                      guild.channels.get('419851703039557632').send({
                          embed: welcome,
                      });
                  };



//   const Idiot = require("idiotic-api");
//   const { Client } = require("idiotic-api");
//   IdioticAPI = new Client(idToken, { dev: true });
//
//   const guild = member.guild;
//   const { user } = member;
//   var { Attachment } = require('discord.js');
//
//   bot.IdioticAPI.welcome("gearz", member.displayAvatarURL.replace('.gif', '.png'), member.tag,`${member.guild.name}#${member.guild.memberCount}`).then(img => {
//
//     guild.channels.get('419851703039557632').send(new Attachment(img, 'welcome.png'));
// })

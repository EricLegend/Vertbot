module.exports = member => {
var Discord = require('discord.js');
const guild = member.guild;



module.exports.run = (bot, message, args) =>{

const settings = require("../settings.json");
const idToken = settings.idToken;
const Idiot = require("idiotic-api");
const { Client } = require("idiotic-api");
IdioticAPI = new Client(idToken, { dev: true });

  const { user } = member;
  var { Attachment } = require('discord.js');
  console.log("hi");
  bot.IdioticAPI.welcome("gearz", member.displayAvatarURL.replace('.gif', '.png'), member.tag,`${member.guild.name}#${member.guild.memberCount}`).then(img => {
  guild.channels.get('419851703039557632').send(new Attachment(img, 'welcome.png'));
})}};

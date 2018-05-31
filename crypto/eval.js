const Discord = module.require('discord.js')
const colors = require('../colors.json')
const cmdName1 = __filename.slice(__dirname.length + 1, -3).slice(1)
const cmdNameU = __filename.slice(__dirname.length + 1, -3).charAt(0).toUpperCase()+cmdName1
const cmdNameL = __filename.slice(__dirname.length + 1, -3).charAt(0).toLowerCase()+cmdName1
module.exports.run = async (bot, message, args) =>{
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

  try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      let embed = new Discord.RichEmbed()
        .setTitle('EVAL')
        .addBlankField()
        .addField("INPUT", `\`\`\`xl\n${args.join(' ')}\n\`\`\``)
        .addField("OUTPUT", `\`\`\`xl\n${clean(evaled)}\n\`\`\``)
        .setThumbnail('https://image.ibb.co/c462Qw/devround.png')
        .setColor(colors[`${cmdNameL}`])
        .setFooter(`Developed by: BLinc#9496 and Eric#1997 using Discord.js: v${Discord.version} and Node: ${process.version}.`)
      message.channel.send({embed: embed});
  } catch (err) {
    let embed = new Discord.RichEmbed()
      .setTitle('EVAL')
      .addBlankField()
      .addField("INPUT", `\`\`\`xl\n${args.join(' ')}\n\`\`\``)
      .addField("ERROR", `\`\`\`xl\n${clean(err)}\n\`\`\``)
      .setThumbnail('https://image.ibb.co/c462Qw/devround.png')
      .setColor(colors[`${cmdNameL}`])
      .setFooter(`Developed by: BLinc#9496 and Eric#1997 using Discord.js: v${Discord.version} and Node: ${process.version}.`)
    message.channel.send({embed: embed});
  }
};

module.exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 4
}

module.exports.help = {
  name: 'eval',
  description: 'evals code (for bot developers only)',
  usage: 'eval <code>'
}

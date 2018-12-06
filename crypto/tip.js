const Discord = module.require('discord.js')
const cmdName = __filename.slice(__dirname.length + 1, -3).replace("v","V")
module.exports.run = (bot, message, args) =>{
	let embedB = new Discord.RichEmbed();
	let embedE = new Discord.RichEmbed();
	embedB
		.addField('Like what you see?', 'Be sure to tip the developers!')
		.addField('Eric#1997', `VertCoin Address\`\`\`asciicode\nVveN6bCbR3E5HeggYwVEktE8khtxGhF2Vs\n\`\`\``)
		.addField('Flakfired#1337', `VertCoin Address\`\`\`asciicode\n33WCf74F89jum1fcFq2hp1xz2LiRDcbD78\n\`\`\``)
		.setThumbnail('https://image.ibb.co/c462Qw/devround.png')
		.setColor('#FFFFFF')
	message.channel.send({embed: embedB});
}

module.exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
}

module.exports.help = {
  name: 'tip',
  description: 'provides info to tip the bot developers',
  usage: 'tip'
}

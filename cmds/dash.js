const unirest = require('unirest');
const Discord = module.require('discord.js')
const cmdName = __filename.slice(__dirname.length + 1, -3).slice(1)
const cmdNameU = __filename.slice(__dirname.length + 1, -3).charAt(0).toUpperCase()
const cmdNameL = __filename.slice(__dirname.length + 1, -3).charAt(0).toLowerCase()
module.exports.run = (bot, message, args) =>{
	if(args[0] === "usd") {
		unirest.get(`https://api.coinmarketcap.com/v1/ticker/${cmdNameU+cmdName}`)
		.header("Accept", "application/json")
		.end(function(result) {
		  // For Debug Only
		 	//console.log(result.status, result.headers, result.body);
		  console.log(`Running ${cmdNameU+cmdName} Command.`);
		  let embed = new Discord.RichEmbed()
				.setTitle(`${cmdNameU+cmdName}`)
				.setThumbnail(`https://files.coinmarketcap.com/static/img/coins/128x128/${cmdNameL+cmdName}.png`)
				.addField("Price:", `$${result.body[0].price_usd.slice(0,-3)}`, true)
				.addField(`${cmdNameU+cmdName} Quanity:`, result.body[0].price_btc, true)
				.addField("1 HR Change:", `${result.body[0].percent_change_1h}%`, true)
				.addField("24 HR Change:", `${result.body[0].percent_change_24h}%`, true)
				.setColor("#0066A1")
		  message.channel.send({embed: embed});
		});
	}
	if(args[0] === "eur") {
		unirest.get(`https://api.coinmarketcap.com/v1/ticker/${cmdNameU+cmdName}/?convert=EUR`)
		.header("Accept", "application/json")
   	.end(function(result) {
   		// For Debug Only
		  //console.log(result.status, result.headers, result.body);
		  console.log("Running eurvertcoinCommand.");
		  let embed = new Discord.RichEmbed()
				.setTitle(`${cmdNameU+cmdName}`)
				.setThumbnail(`https://files.coinmarketcap.com/static/img/coins/128x128/${cmdNameL+cmdName}.png`)
				.addField("Price:", `€${result.body[0].price_eur.slice(0,-6)}`, true)
				.addField(`${cmdNameU+cmdName} Quanity:`, result.body[0].price_btc, true)
				.addField("1 HR Change:", `${result.body[0].percent_change_1h}%`, true)
				.addField("24 HR Change:", `${result.body[0].percent_change_24h}%`, true)
				.setColor("#0066A1")
		  message.channel.send({embed: embed});
		});
	}
	if(args[0] === "gbp") {
		unirest.get(`https://api.coinmarketcap.com/v1/ticker/${cmdNameU+cmdName}/?convert=GBP`)
		.header("Accept", "application/json")
		.end(function(result) {
			// For Debug Only
			//console.log(result.status, result.headers, result.body);
			console.log("Running gbpvertcoin Command.");
			let embed = new Discord.RichEmbed()
				.setTitle(`${cmdNameU+cmdName}`)
				.setThumbnail(`https://files.coinmarketcap.com/static/img/coins/128x128/${cmdNameL+cmdName}.png`)
				.addField("Price:", `£${result.body[0].price_gbp.slice(0,-4)}`, true)
				.addField(`${cmdNameU+cmdName} Quanity:`, result.body[0].price_btc, true)
				.addField("1 HR Change:", `${result.body[0].percent_change_1h}%`, true)
				.addField("24 HR Change:", `${result.body[0].percent_change_24h}%`, true)
				.setColor("#0066A1")
			message.channel.send({embed: embed});
		});
	}
	if(args.length < 1) {
		let embed = new Discord.RichEmbed()
			.setTitle("❌ ERROR")
			.setDescription(`You must supply a currency in order to get ${cmdNameU+cmdName} information!\n\n**Example:** \`\`\`xl\nv.${cmdNameL+cmdName} usd\n\`\`\``)
			.addField("Supported Currency:", "\`usd, eur, gbp\`")
			.setColor("#ff0000")
		message.channel.send({embed: embed})
	}
}

module.exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
}

module.exports.help = {
  name: `${cmdNameL+cmdName}`,
  description: `list value of ${cmdNameL+cmdName} in selected currency ex: usd, eur, gbp`,
  usage: `${cmdNameL+cmdName} <currency>`
}
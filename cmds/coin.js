const Discord = module.require('discord.js')
module.exports.run = async (bot, message, args) =>{
	let argscmd = message.content.split(" ").slice(1);
	var coinurl = "https://api.coinmarketcap.com/v1/ticker/" + argscmd;
	unirest.get(coinurl)
		.header("Accept", "application/json")
		.end(function(result) {
		  // For Debug Only
		  //console.log(result.status, result.headers, result.body);
			if (result.body["error"] == "id not found") return message.channel.send("That coin does not exist...");
			console.log("Running ohboy Command.");
			message.channel.send("The current price of " + argscmd + " is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h  + "%" );
		});
}

module.exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
}

module.exports.help = {
  name: 'coin',
  description: 'If your coin is not listed on ?crypto',
  usage: 'coin (coin name)'
}
const Discord = module.require('discord.js')
module.exports.run = async (bot, message, args) =>{
	unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=eur")
		.header("Accept", "application/json")
		.end(function(result) {
			// For Debug Only
			//console.log(result.status, result.headers, result.body);
			console.log("Running ETH Command");
			message.channel.send("The current price of Ethereum is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		});
}

module.exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
}

module.exports.help = {
  name: 'eurETH',
  description: 'convert ethereum to eur',
  usage: 'eurETH'
}
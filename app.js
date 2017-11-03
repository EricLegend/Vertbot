const token = require('./settings.json').token;
var name = Math.floor(Math.random() * 999999);
var googleTTS = require('google-tts-api');
const Discord = require('discord.js');
var urlParse  = require('url').parse;
const client = new Discord.Client();
var unirest = require('unirest');
var https = require('https');
var path = require('path');
var http = require('http');
var fs = require('fs');


client.on('ready',() => {
		console.log('Vert Time');
});

const prefix = "?"

client.on('message', message => {

	const amount = !parseInt(message.content.split(" ")[1]) ? parseInt(message.content.split(" ")[2]) : parseInt(message.content.split(" ")[1])
	// let modRole = message.guild.roles.find("name", "Admin", "Moderator");
	// let colorR = message.guild.roles.find("name", "Bots");
	let args = message.content.split(' ').slice(1);
	let spam = "305945324999147520"
  const guild = message.guild;
	let result = args.join(' ');
	//if (!message.content.startsWith(prefix)) return;
	//if (message.author.bot) return;


		if (message.content.startsWith(prefix + "crypto")) {
				message.channel.sendEmbed({
	  color: 3447003,

	  title: 'Cryptocurrency',
	  description: 'Here is a list of currencies VertBot supports:',
	  fields: [{
	      name: '?btc',
	      value: 'gives the value for Bitcoin.'
	    },
	    {
	      name: '?eth',
	      value: 'Gives the value for Ether.'
	    },
			{
				name: '?vtc',
				value: 'Gives the value for VertCoin.'
			},
			{
				name: '?xem',
				value: 'Gives the value for Nem.'
			},
			{
				name: '?ltc',
				value: 'Gives the value for Litecoin.'
			},
			{
				name: '?dash',
				value: 'Gives the value for Dash.'
			},
			{
				name: '?xmr',
				value: 'Gives the value for Monero.'
			},
			{
				name: '?bcm',
				value: 'Gives the value for Bytecoin.'
			},
			{
				name: '?gnt',
				value: 'Gives the value for Golem.'
			},
			{
					name: '?coin',
					value: 'If your coin is not listed on ?crypto then type `!coin (coin name)`'
			},
	    ],
	  timestamp: new Date(),
	  footer: {
	//		icon_url: client.user.avatarURL,
	    text: '© 2017 VertBot'
	  }});
	    } else

	if (message.content.startsWith(prefix + "coin")) {
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
					} else

	if (message.content.startsWith(prefix + 'btc')) {
		  unirest.get("https://api.coinmarketcap.com/v1/ticker/bitcoin")
		     .header("Accept", "application/json")
		     .end(function(result) {
		         // For Debug Only
		         //console.log(result.status, result.headers, result.body);
		         console.log("Running BTC Command.");
		         message.channel.send("The current price of Bitcoin is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h  + "%" );
		    });
	} else

	if (message.content.startsWith(prefix + 'gpbBTC')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=GBP")
		     .header("Accept", "application/json")
		     .end(function(result) {
		         // For Debug Only
		         //console.log(result.status, result.headers, result.body);
		         console.log("Running gpbBTC Command.");
		         message.channel.send("The current price of Bitcoin is: Â£" + result.body[0].price_gpb + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h  + "%" );
		    });
	} else

	if (message.content.startsWith(prefix + 'eurBTC')) {
		  unirest.get("https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=EUR")
		     .header("Accept", "application/json")
		     .end(function(result) {
		         // For Debug Only
		         //console.log(result.status, result.headers, result.body);
		         console.log("Running eurBTC Command.");
		         message.channel.send("The current price of Bitcoin is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h  + "%" );
		    });
	} else

	if (message.content.startsWith(prefix + 'eth')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum")
	        .header("Accept", "application/json")
	        .end(function(result) {
	            // For Debug Only
	            //console.log(result.status, result.headers, result.body);
	            console.log("Running ETH Command");
	            message.channel.send("The current price of Ethereum is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h  + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h  + "%"  );
	     });
} else

if (message.content.startsWith(prefix + 'gbpETH')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running ETH Command");
						message.channel.send("The current price of Ethereum is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurETH')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=eur")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running ETH Command");
						message.channel.send("The current price of Ethereum is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'sgdETH')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=sgd")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running ETH Command");
						message.channel.send("The current price of Ethereum is: $" + result.body[0].price_sgd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else


if (message.content.startsWith(prefix + 'gdaxETH')) {
		unirest.get("https://api.coinbase.com/v2/prices/ETH-USD/spot")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gdaxETH Command");
						 var test =  JSON.stringify(result.body);
						message.channel.send("The current price of Ethereum on gdax/Coinbase is: $"+ result.body.data["amount"]);
		 });
} else

if (message.content.startsWith(prefix + 'ripple')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ripple")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running ripple Command");
						message.channel.send("The current price of ripple is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpXRP')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of Ethereum is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurXRP')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of Ethereum is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'nem')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/nem")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running NEM Command");
						message.channel.send("The current price of NEM is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpNEM')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/nem/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of NEM is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurNEM')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/nem/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of NEM is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'etc')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum-classic")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running NEM Command");
						message.channel.send("The current price of ETC is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpETC')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum-classic/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of ETC is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurETC')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum-classic/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of ETC is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'ltc')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/litecoin")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running NEM Command");
						message.channel.send("The current price of LTC is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpLTC')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of LTC is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurLTC')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/litecoin/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of LTC is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'dash')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/dash")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running Dash Command");
						message.channel.send("The current price of Dash is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpDASH')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/dash/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of LTC is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurDASH')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/dash/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of LTC is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'XMR')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/monero")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running Dash Command");
						message.channel.send("The current price of Monero is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpXMR')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/monero/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of Monero is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurXMR')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/monero/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of Monero is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'bcn')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/bytecoin-bcn")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running Dash Command");
						message.channel.send("The current price of Bytecoin is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpBCN')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/bytecoin-bcn/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of Bytecoin is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurBCN')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/bytecoin-bcn/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of Bytecoin is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gnt')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/golem-network-tokens")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running Dash Command");
						message.channel.send("The current price of Golem is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'gbpGNT')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/golem-network-tokens/?convert=GBP")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running gbpXRP Command");
						message.channel.send("The current price of Bytecoin is: Â£" + result.body[0].price_gbp + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'eurGNT')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/golem-network-tokens/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running eurXRP Command");
						message.channel.send("The current price of Bytecoin is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'vtc')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/vertcoin/")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running vert Command");
						message.channel.send("The current price of Vertcoin is: $" + result.body[0].price_usd + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + 'vtcEUR')) {
		unirest.get("https://api.coinmarketcap.com/v1/ticker/vertcoin/?convert=EUR")
				.header("Accept", "application/json")
				.end(function(result) {
						// For Debug Only
						//console.log(result.status, result.headers, result.body);
						console.log("Running verteur Command");
						message.channel.send("The current price of Vertcoin is: â‚¬" + result.body[0].price_eur + "\nThat is: " + result.body[0].price_btc + " BTC \n1 hour percent change at: " +  result.body[0].percent_change_1h + "%"  + "\n24 hour percent change: " + result.body[0].percent_change_24h + "%"  );
		 });
} else

if (message.content.startsWith(prefix + "lottery")) {
		var lotterybal = "https://explorer.vertcoin.org/ext/getbalance/VpBsRnN749jYHE9hT8dZreznHfmFMdE1yG";
			unirest.get(lotterybal)
				 .header("Accept", "application/json")
				 .end(function(result) {
						 // For Debug Only
						 //console.log(result.status, result.headers, result.body);
					 console.log("Running lottery Command.");
					 message.channel.send("The current lottery balance is:" + lotterybal);
					 });
				} else

if (message.content.startsWith(prefix + 'guildlist')) {
		console.log(client.guilds.map(g => g.name).join("\n"))
} else

if (message.content.startsWith(prefix + 'setgame')) {
    unirest.get("https://api.coinmarketcap.com/v1/ticker/vertcoin")
            .header("Accept", "application/json")
            .end(function(result) {
                    // For Debug Only
                    //console.log(result.status, result.headers, result.body);
                    console.log("Running setGame command.");
    if (!result) {
        result = null;
    }
    client.user.setGame(JSON.stringify("VTC = $" + result.body[0].price_usd).slice(1,-4));
    message.reply('I am now showing VTC price.')
});
} else

if (message.content.includes('hold')) {
	message.reply('hodl*');
} else

if (message.content.includes('Hold')) {
	message.reply('Hodl*');
} else

if (message.content.startsWith(prefix + 'veth')) {
unirest.get("https://api.coinmarketcap.com/v1/ticker/ethereum")
		.header("Accept", "application/json")
		.end(function(result) {
				// For Debug Only
				//console.log(result.status, result.headers, result.body);
				console.log("Running Command for veth");
				var wordph = "The price of ethereum is " +  result.body[0].price_usd + "US Dollars.";


// Delete a message
message.delete()
.then(msg => console.log(`Deleted message from ${msg.author}`))
.catch(console.error);

"use strict";
require('es6-promise').polyfill();

function downloadFile (url, dest) {
	return new Promise(function (resolve, reject) {
		var info = urlParse(url);
		var httpClient = info.protocol === 'https:' ? https : http;
		var options = {
			host: info.host,
			path: info.path,
			headers: {
				'user-agent': 'WHAT_EVER'
			}
		};

		httpClient.get(options, function(res) {
			// check status code
			if (res.statusCode !== 200) {
				reject(new Error('request to ' + url + ' failed, status code = ' + res.statusCode + ' (' + res.statusMessage + ')'));
				return;
			}

			var file = fs.createWriteStream(dest);
			file.on('finish', function() {
				// close() is async, call resolve after close completes.
				file.close(resolve);
			});
			file.on('error', function (err) {
				// Delete the file async. (But we don't check the result)
				fs.unlink(dest);
				reject(err);
			});

			res.pipe(file);
		})
		.on('error', function(err) {
			reject(err);
		})
		.end();
	});
}

// start
googleTTS(wordph)
.then(function (url) {
	console.log(url); // https://translate.google.com/translate_tts?...

	var dest = path.resolve('./voice/', name + '.mp3'); // file destination
	console.log('Download to ' + dest + ' ...');

	return downloadFile(url, dest);
})
.then(function () {
	console.log('Download success');
})
.catch(function (err) {
	console.error(err.stack);
});

if (message.member.voiceChannel) {

		message.member.voiceChannel.join()
				.then(connection => { // Connection is an instance of VoiceConnection
						console.log('Playing...');
						const dispatcher = connection.playFile('./voice/' + name + ".mp3");
						dispatcher.on("end", end => {
								message.member.voiceChannel.leave();
						});

						dispatcher.on('error', e => {
								// Catch any errors that may arise
								return message.reply(e);

						});
				})

				.catch(console.log);


} else {
		message.reply('You need to join a voice channel first!');
	}
})
}});

client.login(token);

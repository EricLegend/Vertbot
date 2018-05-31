const request = require('request');
const Discord = module.require('discord.js')
const hastebin = require('hastebin-gen')
const fs = require('fs');

module.exports.run = async (bot, message, args) =>{
  request({url: 'https://api.coinmarketcap.com/v1/ticker/vertcoin', json: true},function(error, response, body) {
    let v = body;
    console.log('Starting')

    bot.user.setGame(`VTC $${JSON.stringify(v[0].price_usd).slice(1,-4)}`);
    message.channel.send("Set VTC Value, The Value will update automatically every 10 minutes")
    })

    setInterval(function () {
    request({url: 'https://api.coinmarketcap.com/v1/ticker/vertcoin', json: true},function(error, response, body) {
      let v = body;
      vertVal((v[0].price_usd))
      });
    }, 360000); //360000 for 6 minutes

  function vertVal(data){
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('db.json')
    const db = low(adapter);
    db
      .set('VTC',{value: data})
      .write()
  }

  setInterval(function () {
    request({url: 'https://api.coinmarketcap.com/v1/ticker/vertcoin', json: true},function(error, response, body) {
      let v = body;
      let newVal = (v[0].price_usd)
      const low = require('lowdb');
      const FileSync = require('lowdb/adapters/FileSync');
      const adapter = new FileSync('db.json')
      const db = low(adapter);
      bot.user.setGame(`VTC $${JSON.stringify(v[0].price_usd).slice(1,-4)}`);

      let oldVal = db.get('VTC.value').value();

      if(oldVal < newVal){
        log(`✔ Vertcoin\nValue Changed: ▲\nPrevious Value: $${parseFloat(oldVal).toFixed(5)}\nCurrent Value: $${parseFloat(newVal).toFixed(5)}\nProfit: $${parseFloat(newVal - oldVal).toFixed(2)}\n-------------------\n`)
      // INCASE WE DECIDE TO KEEP THE EMBEDS
      //   let profit = new Discord.RichEmbed()
      //     .setTitle('✔Vertcoin Profit Tracker')
      //     .addField('Previous Value:', `$${parseFloat(oldVal).toFixed(2)}`)
      //     .addField('Current Value:', `$${parseFloat(newVal).toFixed(2)}`)
      //     .addField('Profit Of:', `▲$${parseFloat(newVal - oldVal).toFixed(2)}`)
      //     .setThumbnail('https://www.shareicon.net/data/128x128/2015/09/20/104244_arrow_256x256.png')
      //     .setColor('#00ff00')
      //   message.channel.send({embed: profit})
      }
      if(oldVal > newVal){
        log(`✔ Vertcoin\nValue Changed: ▼\nPrevious Value: $${parseFloat(oldVal).toFixed(5)}\nCurrent Value: $${parseFloat(newVal).toFixed(5)}\nLoss: $${parseFloat(oldVal - newVal).toFixed(2)}\n-------------------\n`)
      // INCASE WE DECIDE TO KEEP THE EMBEDS
      //   let profit = new Discord.RichEmbed()
      //     .setTitle('✔Vertcoin Profit Tracker')
      //     .addField('Previous Value:', `$${parseFloat(oldVal).toFixed(2)}`)
      //     .addField('Current Value:', `$${parseFloat(newVal).toFixed(2)}`)
      //     .addField('Loss Of:', `▼$${parseFloat(oldVal - newVal).toFixed(2)}`)
      //     .setThumbnail('https://www.shareicon.net/data/128x128/2015/09/20/104246_down_256x256.png')
      //     .setColor('#ff0000')
      //   message.channel.send({embed: profit})
      }
      if(oldVal === newVal){
        log(`✔ Vertcoin\nValue Changed: ▼ ▲\nPrevious Value: $${parseFloat(oldVal).toFixed(5)}\nCurrent Value: $${parseFloat(newVal).toFixed(5)}\nStale: $${parseFloat(oldVal - newVal).toFixed(2)}\n-------------------\n`)
      // INCASE WE DECIDE TO KEEP THE EMBEDS
      //   let profit = new Discord.RichEmbed()
      //     .setTitle('✔Vertcoin Profit Tracker')
      //     .addField('Previous Value:', `$${parseFloat(oldVal).toFixed(2)}`)
      //     .addField('Current Value:', `$${parseFloat(newVal).toFixed(2)}`)
      //     .addField('No Profit:', `▼▲$${parseFloat(newVal - oldVal).toFixed(2)}`)
      //     .setColor('#0000ff')
      //   message.channel.send({embed: profit})
      }

      })
  }, 600000);// 600000 for 10 minutes

  function log(logged){
    fs.writeFile('./logs/vtcpllog.txt', logged, { flag: 'a+' }, (err) =>{
      if(err) throw err;
      console.log('added entry to pl tracker')
    })
  }
  setInterval(function () {
  let haste = fs.readFileSync("./logs/vtcpllog.txt").toString();
  hastebin(haste).then(r => {

      message.guild.members.get("145702927099494400").send(`Hourly Profit Tracker: ${r}`)
      message.guild.members.get("298574999894097921").send(`Hourly Profit Tracker: ${r}`)
    }).catch(console.error);
  }, 3600000);//3600000

}

module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}

module.exports.help = {
  name: 'setvert',
  description: 'sets playing to vert coin value in usd and display an update every 10 minutes',
  usage: 'setvert'
}

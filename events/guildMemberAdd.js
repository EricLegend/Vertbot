module.exports = member => {

  const guild = member.guild;
  const botcommands = guild.channels.find('name', 'bot-commands');
  return guild.channels.get(botcommands.id).send(`remember ${member.user} speak :taco:s`);
  };

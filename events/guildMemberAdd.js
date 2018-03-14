module.exports = member => {

  const guild = member.guild;
  const offtopic = guild.channels.find('name', 'offtopic');
  return guild.channels.get(offtopic.id).send(`remember ${member.user} speak :taco:s`);
  };

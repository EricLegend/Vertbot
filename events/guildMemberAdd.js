module.exports = member => {

  const guild = member.guild;
  const general = guild.channels.find('name', 'general');
  return guild.channels.get(general.id).send(`remember ${member.user} speak :taco:s`);  
  };

    //guild.channels.get('419801994346364938').send(`Please welcome ${member.user.username} to the server!`);

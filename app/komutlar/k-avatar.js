const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let üye = message.mentions.members.first();
  if(!üye) {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag} Avatar`, message.author.avatarURL)
      .setImage(message.author.avatarURL)
      .setFooter(`${client.user.tag}`, client.user.avatarURL)
      .setTimestamp()
      .setColor("RANDOM")
    message.channel.send(embed).then(msg => msg.delete(10000));
  }
  if(üye) {
    let embed = new Discord.RichEmbed()
      .setAuthor(`${üye.user.tag} Avatar`, üye.user.avatarURL)
      .setImage(üye.user.avatarURL)
      .setFooter(`${client.user.tag}`, client.user.avatarURL)
      .setTimestamp()
      .setColor("RANDOM")
    message.channel.send(embed).then(msg => msg.delete(10000));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["pp"]
};

exports.help = {
  name: 'avatar',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
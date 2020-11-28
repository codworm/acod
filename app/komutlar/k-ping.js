const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    message.delete(60)
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("ad4deb")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setDescription(`Suanda botun gecikmesi; **${client.ping}ms**`)
    .setFooter(`© Shrike Bot 2020`, message.author.avatarURL)
    .setTimestamp();
    message.channel.sendEmbed(ozelmesajkontrol).then(msg => msg.delete(10000)); }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Pingi gösterir.',
  usage: 'ping'
};

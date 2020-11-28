
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => { 
  if(message.author.id !== ayarlar.sahip)  return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Bu komutu kullanmaya yetkin yok!`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  const isim = args.slice(0).join(' ');
  if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Lütfen bir isim giriniz.`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  client.user.setUsername(isim);
  message.delete(60).then
  const uembed = new Discord.RichEmbed()
  .setColor(`ad4deb`)
  .setAuthor(`Shrike`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`)
  .setDescription(`Botun İsmi Başarılı Bir Şekilde [** ${isim} **] Yapıldı.`)
  .addField(`Kullanımları`, `${ayarlar.prefix}bot-isim-degis\n${ayarlar.prefix}bid`)
  .setThumbnail(client.user.avatarURL)
  .setImage(`https://cdn.discordapp.com/attachments/780622542104821810/780850315469127700/20201124_204009.jpg`)
    .setFooter(`© Shrike Bot 2020`, message.author.avatarURL)
    .setTimestamp();
  message.channel.send(uembed).then(msg => msg.delete(5000));
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-isim-degis"],
  permLevel: 0
};

module.exports.help = {
  name: 'bid',
  description: 'orascoder',
  usage: 'reboot'
};
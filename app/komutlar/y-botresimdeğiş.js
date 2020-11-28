
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (client, message, args) => { 
if(message.author.id !== ayarlar.sahip) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Bu komutu kullanmaya yetkin yok!`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  const avatar = args.slice(0).join(' ');
  if(!avatar) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Lütfen bir resim urlsi giriniz.`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  client.user.setAvatar(avatar);
  message.delete(60).then
  const uembed = new Discord.RichEmbed()
  .setColor(`ad4deb`)
  .setAuthor(`Shrike`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`)
  .setDescription(`Botun Resimi Başarılı Bir Şekilde Değiştirildi.`)
  .addField(`Kullanımları`, `${ayarlar.prefix}bot-resim-degis\n${ayarlar.prefix}brd`)
  .setThumbnail(avatar)
  .setImage(`https://cdn.discordapp.com/attachments/780622542104821810/780851963469889556/20201124_204644.jpg`)
    .setFooter(`© Shrike Bot 2020`, message.author.avatarURL)
    .setTimestamp()
  message.channel.send(uembed).then(msg => msg.delete(5000));
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-resim-degis"],
  permLevel: 0
};

module.exports.help = {
  name: 'brd',
  description: 'orascoder',
  usage: 'reboot'
};
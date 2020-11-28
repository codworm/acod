const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {

  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Bu komudu kullanmaya yeterli yetkin yok!`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  
  
const url = args.slice(0).join(' ')
if(!url) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Lütfen bir resim urlsi giriniz.`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  message.guild.setIcon(url)
  message.delete(60).then
  const uembed = new Discord.RichEmbed()
  .setColor(`ad4deb`)
  .setAuthor(`Shrike`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`)
  .setDescription(`Sunucunun Resimi Başarılı Bir Şekilde Değiştirildi.`)
  .addField(`Kullanımları`, `${ayarlar.prefix}sunucu-resim-degis\n${ayarlar.prefix}sunucuresimdegis\n${ayarlar.prefix}srd`)
  .setThumbnail(url)
  .setImage(`https://cdn.discordapp.com/attachments/780622542104821810/780855811806724116/20201124_210204.jpg`)
    .setFooter(`© Shrike Bot 2020`, message.author.avatarURL)
    .setTimestamp();
  message.channel.send(uembed).then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["sunucu-resim-degis","sunucuresimdegis"],
  permLevel: 0 
};

exports.help = {
  name: "srd"
};
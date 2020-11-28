const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require("../ayarlar.json")

exports.run = async(client, message, args) => {

  if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Bu komudu kullanmaya yeterli yetkin yok!`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  
  
const url = args.slice(0).join(' ')
if(!url) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Lütfen bir resim urlsi giriniz.`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  message.guild.setBanner(url)
  message.delete(80).then
  const uembed = new Discord.RichEmbed()
  .setColor(`ad4deb`)
  .setAuthor(`Shrike`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`)
  .setDescription(`Sunucunun Afişi Başarılı Bir Şekilde Değiştirildi.`)
  .addField(`Kullanımları`, `${ayarlar.prefix}sunucu-afis-degis\n${ayarlar.prefix}sunucuafisdegis\n${ayarlar.prefix}sad`)
  .setThumbnail(url)
  .setImage(`https://cdn.discordapp.com/attachments/780622542104821810/780861666300133396/20201124_212517.jpg`)
    .setFooter(`© Shrike Bot 2020`, message.author.avatarURL)
    .setTimestamp();
  message.channel.send(uembed).then(msg => msg.delete(5000));
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["sunucu-afis-degis","sunucuafisdegis"],
  permLevel: 0 
};

exports.help = {
  name: "sad"
};
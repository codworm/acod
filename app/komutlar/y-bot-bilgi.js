const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
 if(message.author.id !== ayarlar.sahip) return message.channel.sendEmbed(new Discord.RichEmbed().setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`).setDescription(`Bu komutu kullanmaya yetkin yok!`).setColor("ad4deb").setFooter(`© Shrike Bot 2020`, client.user.avatarURL).setTimestamp());
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const acodbilgi = new Discord.RichEmbed()
  .setColor(`ad4deb`)
  .setAuthor(`${client.user.username}`, client.user.avatarURL)
  .addField(`** Bot Sahibi:**`, `<@${ayarlar.sahip}>`, true)
	.addField("Bellek Kullanımı:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("Discord.js Sürümü:", `${Discord.version}`, true)
  .addField("Sunucu Sayısı:", `${client.guilds.size.toLocaleString()}`, true)
  .addField("Kanal Sayısı:", `${client.channels.size.toLocaleString()}`, true)
  .addField("Toplam Kullanıcı Sayısı:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Ping:", `${client.ping}`, true)
  .addField(`Ne Kadar Süredir Aktif:`, `${duration}`, true)
  .addField(`Davet Et`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=737018632659271751&scope=bot&permissions=805314622)`, true)
  .setFooter(`© Shrike Bot 2020`, client.user.avatarURL)
  message.channel.send(acodbilgi).then(msg => msg.delete(10000));
  message.react("👍")
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botbilgi","bbilgi"],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};

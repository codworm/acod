const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    
        const uembed = new Discord.RichEmbed()
        .setAuthor(`Shrike Bot`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`)
        .setTitle(`Shrike Bot Davet`)
        .setURL(`https://discord.com/oauth2/authorize?client_id=737018632659271751&scope=bot&permissions=805314622`)
        .setDescription(`**Destek Sunucumuza Gelmeyi Unutmayın** [[DAVET](https://discord.gg/QK4rV2et5F)]`)
        .addField(`Gif Komutları`, `${ayarlar.prefix}gif-ara\n${ayarlar.prefix}mka-gif\n${ayarlar.prefix}man-gif\n${ayarlar.prefix}women-gif\n${ayarlar.prefix}couple-gif`, true)
        .addField(`Photo Komutlar`, `${ayarlar.prefix}photo-ara\n${ayarlar.prefix}mka-photo\n${ayarlar.prefix}man-photo\n${ayarlar.prefix}women-photo\n${ayarlar.prefix}couple-photo`, true)
        .addField(`Moderasyon Komutları`, `${ayarlar.prefix}sunucu-resim-degis\n${ayarlar.prefix}sunucu-icon-degis\n${ayarlar.prefix}sunucu-afis-degis\n${ayarlar.prefix}temizle`, true)
        .addField(`Kullanıcı Komutları`, `${ayarlar.prefix}avatar\n${ayarlar.prefix}kullanıcı-bilgi\n${ayarlar.prefix}ping`, true)
        .addField(`Yapımcı Komutları`, `${ayarlar.prefix}bot-resim-degis\n${ayarlar.prefix}bot-isim-degis\n${ayarlar.prefix}reboot\n${ayarlar.prefix}bot-bilgi`, true)
        .setColor(`ad4deb`)
        .setThumbnail(client.user.avatarURL)
        .setImage(`https://cdn.discordapp.com/attachments/780622542104821810/780843928932712508/20201124_201421.jpg`)
        .setFooter(`© Shrike Bot 2020`, client.user.avatarURL)
        .setTimestamp();
      message.channel.send(uembed).then(msg => msg.delete(10000));
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'help', 'b'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Tüm komutları gösterir.',
  usage: 'yardim [komut]'
};

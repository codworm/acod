const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let prefix = ayarlar.prefix

exports.run = async function(client, message, args) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Bu komutu kullanabilmek için `Mesajları Yönet` iznine sahip olmalısın!')
  let abc = args.slice(0).join('')
  if(!abc) return message.channel.send(`Lütfen silinecek mesaj miktarını yazın! \n **Doğru Kullanımları:**\n \`${prefix}temizle 1-400\` \n \`${prefix}sil 1-400\` \n \`${prefix}clear 1-400\``);
  
  if(abc > 1 && abc <= 100) {
    await(message.delete())
    message.channel.bulkDelete(abc).then(() => {
    message.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else if(abc > 100 && abc <= 200) {
    await(message.delete())
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(abc-100).then(() => {
    message.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else if(abc > 200 && abc <= 300) {
    await(message.delete())
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(abc-200).then(() => {
    message.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else if(abc > 300 && abc <= 400) {
    await(message.delete())
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(100)
    message.channel.bulkDelete(abc-300).then(() => {
    message.channel.send(`${abc} adet mesaj silindi!`).then(msg => msg.delete(5000));
    })
  } else {
    message.channel.send(`Lütfen, 0-400 arasında rakam seç`);
  }

};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['clear', 'sil'], 
  permLevel: 0
};

exports.help = {
  name: 'temizle', 
  description: 'Belirtilen miktarda mesajı siler.', 
  usage: 'temizle <miktar>',
  kategori: 'yetkili'
};
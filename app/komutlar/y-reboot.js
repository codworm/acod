
const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => { 
    if(message.author.id !== ayarlar.sahip)  return message.channel.send("**|** `Bu komutu kullanmaya yetkin yok!`")
     
    message.channel.sendMessage("**|** `Beni Yeniden Başlattın...`")
    message.delete(60).then(msg => { 
    msg.delete(5000)
    console.log("Bot yeniden başlatılıyor...");
    process.exit(0);
  })
     
           
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'orascoder',
  usage: 'reboot'
};
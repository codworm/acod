const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = async client => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.user.setStatus('idle')
    client.appInfo = await client.fetchApplication();
  }, 60000);
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const settings = require('../ayarlar.json');

var prefix = settings.prefix;
  console.log(`----------------------`);
  console.log(
      `Shrike Botu: Şu anda Çevrimiçi.`);
  console.log(
      `Shrike Botu: Şu an ` 
    + client.channels.size +
      ` adet kanala, ` +
      client.guilds.size +
      ` adet sunucuya ve ` +
      client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() +
      ` kullanıcıya hizmet veriliyor! `);
  function heart1() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.user.setActivity(`🔥 Shrike Bot: Yükleniyor %30`, { type: "WATCHING"});
            heart3();
        }, 6000);
      });
}
  function heart3() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.user.setActivity(`🔥 Shrike Bot: Geliyorum`, { type: "WATCHING"});
            heart1();
        }, 6000);
      });
  }
 
 client.on('ready', async message => {
    const voiceChannel = client.channels.get("782088272922935296");
    voiceChannel.join();
   heart1();
 })
};

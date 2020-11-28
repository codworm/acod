const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

var prefix = ayarlar.prefix;


const log = message => {
  console.log(`${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`Shrike Botu: ${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Shrike Botu: ${props.help.name} yüklendi.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.on('guildCreate', guild => {
  
const tik = client.emojis.find(e => e.name === "shrike_tik");
const girdim = new Discord.RichEmbed()
.setColor("GREEN")
.setTitle("Bot Eklendi")
.addField("Sunucu Adı:", `${guild.name} - \`${guild.id}\``,)
.addField("Sunucu Sahibi", `${guild.owner} - \`${guild.ownerID}\``)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
.addField('Sunucudaki Kanallar; Voice/Text/Total', `${guild.channels.filter(chan => chan.type === 'voice').size}/${guild.channels.filter(chan => chan.type === 'text').size}/${guild.channels.size}`)
.addField('Oluşturma tarihi:', guild.createdAt)
.addField('Giriş tarihi:', guild.joinedAt)
client.channels.get("782078893217546240").send(girdim).then(msg => msg.react(tik));
});

client.on('guildDelete', guild => {
  
const carpi = client.emojis.find(e => e.name === "shrike_carpi");
const atıldım = new Discord.RichEmbed()
.setColor("RED")
.setTitle("Bot Kicklendi")
.addField("Sunucu Adı:", `${guild.name} - \`${guild.id}\``)
.addField("Sunucu Sahibi", `${guild.owner} - \`${guild.ownerID}\``)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
.addField('Sunucudaki Kanallar: Voice/Text/Total', `${guild.channels.filter(chan => chan.type === 'voice').size}/${guild.channels.filter(chan => chan.type === 'text').size}/${guild.channels.size}`)
.addField('Oluşturma tarihi:', guild.createdAt)
.addField('Giriş tarihi:', guild.joinedAt)
client.channels.get("782078893217546240").send(atıldım).then(msg => msg.react(carpi));
});
client.login(ayarlar.token)


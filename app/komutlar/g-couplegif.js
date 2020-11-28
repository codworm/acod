const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms")

exports.run = (client, message) => {
  let mangif = [
    "",
  ];

  let random = Math.floor(Math.random() * mangif.length);

  let gifembed = new Discord.RichEmbed()
    .setAuthor(`Shrike`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`)
    .setTitle(`Couple Gif`)
    .setColor("#5556ad")
    .setFooter(`© Shrike Bot 2020`, message.author.avatarURL)
    .setImage(`https://cdn.discordapp.com/attachments/782078893217546240/782084870960578590/Shrike_Cok_Yaknda.jpg`)
    .setTimestamp();
  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["couple-gif"],
  permLevel: 0
};

exports.help = {
  name: "couplegif",
  description: "Rastgele gif atar.",
  usage: "gif"
};//codeworld
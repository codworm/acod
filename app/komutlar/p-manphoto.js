const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("ms")

exports.run = (client, message) => {
  let mangif = [
    "https://cdn.discordapp.com/attachments/761688894479401020/766920593949589504/127d3905a4201bd7bab5284b13db46d7.gif",
    "https://cdn.discordapp.com/attachments/761688894479401020/766920509215473674/7277771900836bba86451cdc2f9d2f00.gif",
    "https://cdn.discordapp.com/attachments/761688894479401020/766919910697074728/82af24b2afdaffbaeaf052f4e3c1c87f.gif",
    "https://cdn.discordapp.com/attachments/761688894479401020/766919593557491762/ca1d8823b86c554cf5565728328e6549.gif",
    "https://cdn.discordapp.com/attachments/761688894479401020/766919034247315486/02c669b0615a4347eb31fa5b2062ea88.gif",
    "https://cdn.discordapp.com/attachments/761688894479401020/766917463514284032/a0fb92c5b3ef1fb615640b00a41d1c5f.gif",
    "https://cdn.discordapp.com/attachments/761688894479401020/766917350401638420/88f6da75a7a660d38d5b29c90124e1cc.gif",
    "https://cdn.discordapp.com/attachments/761688894479401020/766916983190585344/80ee33c59c9888f883b2db4ace46952e.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779040046782873680/ewewew.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779040023005364254/151.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779040009000321054/image0-3.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779039999865126912/Ally4.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779039973449924648/16482b1d08f70b2d11d9f46238b71751.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779039916117196840/49.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779039875004891216/a_7489271ddbf7629538d679d73927ec14.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779039906705178694/eheheh.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779039851173380117/a_77d584a539aa446daa3e34ed16ddae89.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/779039831748509706/a_370efd356ab372d6979b1d2a717fa3d8.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028783474049034/a_1bf0ea38b816d109b5ec03aa961c3e6a.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028868337795082/image0-2-1-1.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028822137405440/Erkek_23.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028744463613972/a_e0e471a791045fcdc823cfd997cbb2c6.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028659746406422/a_df680780c85cff8b26e11e9f023fdb1a.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028621842612306/a_43fe86fed7a19e59b514bc2247708ddd.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028576720158770/a_01cb3e53b1f147b43edd1b6db9ee1e40.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028544076283904/a_e389e5cd827b51a1a4262d58d3e9c631.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028518160334898/a_1006aa36503c9420c2d06a3e4221a79b.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028465818828810/a_b45eaa25a9f1249674844853fcc88230-1.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028453286510612/a_b94d6effee55cfc1e76b7556bea3c11d.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028435388891176/a_6508ba3193d2b00042c98d0e3a1fea0e.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028415651151912/a_9463f9db219c638c35d5e41114af4f48.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028399611346955/a_4842ffe033e0b7ee4193b62d1cfa4938.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028371451576330/61.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028339721535498/schezop_9.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028258465284136/a_d4e861205473258d19542f451ed1083e.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028231647428618/a_d16512232117a4e3b5f7edbff2bde5f6.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028177893228555/a_7cb24e0347f57536f6724e5bfebea714.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/778028053632647188/a_44ba744816522dd515163774876815c5.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/774623128764547092/a_24a3acda82b69bd65cfe64cefc2717e8.gif",
    "https://cdn.discordapp.com/attachments/774553333511749642/774623128420089866/a_bc62a3db2b244a26500e6f0036416b1c.gif",
  ];

  let random = Math.floor(Math.random() * mangif.length);

  let gifembed = new Discord.RichEmbed()
    .setAuthor(`Shrike`, `https://cdn.discordapp.com/attachments/760483584188088341/780620359023460362/25585ed942ff8e371a79a8fa74a62b70.webp`)
    .setTitle(`Man Photo`)
    .setColor("#5556ad")
    .setFooter(`© Shrike Bot 2020`, message.author.avatarURL)
    .setImage(`https://cdn.discordapp.com/attachments/782078893217546240/782084870960578590/Shrike_Cok_Yaknda.jpg`)
    .setTimestamp();
  message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["man-photo","manpp","man-pp"],
  permLevel: 0
};

exports.help = {
  name: "manphoto",
  description: "Rastgele gif atar.",
  usage: "gif"
};//codeworld
const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== "dm") {
    const ozelmesajkontrol = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription("Benim Yapımcım <@671038332880420915>");
    message.channel.sendEmbed(ozelmesajkontrol);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapımcı"],
  permLevel: 0
};

exports.help = {
  name: "yapımcı",
  description: "Yapimcimi Gosterir.",
  usage: "yapımcım"
};

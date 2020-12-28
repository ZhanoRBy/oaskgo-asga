const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.noPerms(message, "MANAGE_MESSAGES");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(` Elrodh Bot Tarafından **${args[0]}** Mesaj Silindi`).then(msg => msg.delete(1500));
  });
}

module.exports.help = {
  name: "sil"
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 0,
};

exports.help = {
  name: 'sil',
  description: '',
  usage: 'temizle',
}
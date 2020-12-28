const Discord = require('discord.js'); // Kullanımı: !erkek @etiket İsim | Yaş

exports.run = async (client, message, args) => {
        if (!message.member.roles.get("785500642579972157"))
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`Bu komutu kullanabilmek için <@&785500642579972157> yetkisine sahip olmasınız.`);
if (message.channel.id !== '785500704059031578') return message.channel.send(`Lütfen bu komutu <#785500704059031578> kanalında kullanınız.`)    
let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('Bir üye etiketlemelisin')
  if (!isim) return message.channel.send('Bir isim yazmalısın')
  member.setNickname(` ${isim} `) 
  member.addRole("785500648039907338"),
  member.removeRole("785500648736817173")
  const ky = new Discord.RichEmbed()
  .setDescription(` Kullanıcı kayıt edildi.\n Değiştirilen kullanıcı : ${member.user} \n Düzenlenmiş kullanıcı adı : \`${isim}\` \n Verilen rol : <@&785500648039907338>`)
  message.channel.send(ky)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['Erkek'],
}
exports.help = {
  name: 'e',
  description: "Birinin nickini değiştirir.",
  usage: 'e'
}
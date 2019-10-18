const { RichEmbed } = require("discord.js");
const {
  RoleLevel5ID,
  RoleLevel10ID,
  RoleLevel15ID,
  RoleLevel20ID,
  RoleLevel25ID,
  RoleLevel30ID,
  RoleLevel35ID,
  RoleLevel40ID,
  RoleLevel50ID,
  RoleLevel65ID
} = config;
module.exports.run = async (bot, message, args) => {
  await MongoDB.coins._toCollection();
  let res = MongoDB.coins.findOne({ UserId: message.author.id });
  let embed = new RichEmbed()
    .setColor("RED")
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setTimestamp()
    .setDescription(`У вас 0 OScoins!`);
  let embed2 = new RichEmbed()
    .setColor("RED")
    .setDescription(`У вас есть уже такое звание!`)
    .setFooter(`Купите другую роль!`)
    .setTimestamp();
  if (res.coins == undefined) return message.channel.send(embed);
  if (res.coins == 0) return message.channel.send(embed);
  var args1 = message.content.toLowerCase().split(/ +/g);
  let Старейшина = ["старейшина", "@старейшина", RoleLevel5ID];
  function No(Money) {
    message.channel.send(
      new RichEmbed()
        .setColor("RED")
        .setTimestamp()
        .setFooter(`Сколько осталось монет для покупки: ${Money - res.coins}`)
        .setDescription(`У вас не достаточно средств для покупки роли.`)
    );
  }
  function Yes(Money, ID) {
    message.channel.send(
      new RichEmbed()
        .setColor(colors)
        .setDescription(`Вы успешно купили звание <@&${ID.id}>`)
        .setFooter(`Остаток монет: ${res.coins - Money}`)
        .setTimestamp()
    );
    MongoDB.coins.updateOne(
      { UserId: message.author.id },
      { coins: res.coins - Money }
    );
    message.member.addRole(ID);
  }
  if (args1.some(a => Старейшина.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel5ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (3000 > res.coins) return No(3000);
    Yes(3000, roleS);
    return;
  }
  let Защитник = ["защитник", "@защитник", RoleLevel10ID];
  if (args1.some(a => Защитник.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel10ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (5000 > res.coins) return No(5000);
    Yes(3000, roleS);
    return;
  }
  let Капитан = ["капитан", "@капитан", RoleLevel15ID];
  if (args1.some(a => Капитан.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel15ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (10000 > res.coins) return No(10000);
    Yes(10000, roleS);
    return;
  }
  let Коллекционер = ["коллекционер", "@коллекционер", RoleLevel20ID];
  if (args1.some(a => Коллекционер.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel20ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (13000 > res.coins) return No(13000);
    Yes(13000, roleS);
    return;
  }
  let Легенда = ["легенда", "@легенда", RoleLevel25ID];
  if (args1.some(a => Легенда.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel25ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (17000 > res.coins) return No(17000);
    Yes(17000, roleS);
    return;
  }
  let Жнец = ["жнец", "@жнец", RoleLevel30ID];
  if (args1.some(a => Жнец.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel30ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (20000 > res.coins) return No(20000);
    Yes(20000, roleS);
    return;
  }
  let Братан = ["братан", "@братан", RoleLevel35ID];
  if (args1.some(a => Братан.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel35ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (24000 > res.coins) return No(24000);
    Yes(24000, roleS);
    return;
  }
  let Разрушитель = ["разрушитель", "@разрушитель", RoleLevel40ID];
  if (args1.some(a => Разрушитель.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel40ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (26000 > res.coins) return No(26000);
    Yes(26000, roleS);
    return;
  }
  let Титан = ["титан", "@титан", RoleLevel50ID];
  if (args1.some(a => Титан.find(word => word == a))) {
    let roleS = message.guild.roles.find(r => r.id == RoleLevel50ID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (35000 > res.coins) return No(35000);
    Yes(35000, roleS);
    return;
  }
  if (!args[0])
    return message.channel.send(
      new RichEmbed()
        .setColor(colors)
        .setDescription(`Магазин званий`)
        .setTimestamp()
        .setFooter(`Покупка ролей: /shop Роль(без пинга)`)
        .addField(`3000 OScoins`, `<@&${RoleLevel5ID}>`, true)
        .addField(`5000 OScoins`, `<@&${RoleLevel10ID}>`, true)
        .addField(`10000 OScoins`, `<@&${RoleLevel15ID}>`, true)
        .addField(`13000 OScoins`, `<@&${RoleLevel20ID}>`, true)
        .addField(`17000 OScoins`, `<@&${RoleLevel25ID}>`, true)
        .addField(`20000 OScoins`, `<@&${RoleLevel30ID}>`, true)
        .addField(`24000 OScoins`, `<@&${RoleLevel35ID}>`, true)
        .addField(`26000 OScoins`, `<@&${RoleLevel40ID}>`, true)
        .addField(`35000 OScoins`, `<@&${RoleLevel50ID}>`, true)
    );
  message.channel.send(
    new RichEmbed()
      .setColor("RED")
      .setFooter(message.author.username, message.author.displayAvatarURL)
      .setTimestamp()
      .setDescription(`Такого звания нет.`)
  );
};
module.exports.command = {
  name: "shop"
};

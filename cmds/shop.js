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
  await MongoDB.levels._toCollection();
  let resLevel = MongoDB.levels.findOne({ UserId: message.author.id });
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
  function NoLevel(Level) {
    message.channel.send(
      new RichEmbed()
        .setColor("RED")
        .setTimestamp()
        .setFooter(
          `Сколько осталось уровней для покупки: ${Level - resLevel.level}`
        )
        .setDescription(`У вас недостаточный уровень для покупки этой роли.`)
    );
  }
  function Code(RoleID, money, Level) {
    let roleS = message.guild.roles.find(r => r.id == RoleID);
    if (message.member.roles.has(roleS.id)) return message.channel.send(embed2);
    if (Level > resLevel.level) return NoLevel(Level);
    if (money > res.coins) return No(money);
    Yes(money, roleS);
  }
  if (args1.some(a => Старейшина.find(word => word == a)))
    return Code(RoleLevel5ID, 3000, 5);
  let Защитник = ["защитник", "@защитник", RoleLevel10ID];
  if (args1.some(a => Защитник.find(word => word == a)))
    return Code(RoleLevel10ID, 5000, 10);
  let Капитан = ["капитан", "@капитан", RoleLevel15ID];
  if (args1.some(a => Капитан.find(word => word == a)))
    return Code(RoleLevel15ID, 10000, 15);
  let Коллекционер = ["коллекционер", "@коллекционер", RoleLevel20ID];
  if (args1.some(a => Коллекционер.find(word => word == a)))
    return Code(RoleLevel20ID, 13000, 20);
  let Легенда = ["легенда", "@легенда", RoleLevel25ID];
  if (args1.some(a => Легенда.find(word => word == a)))
    return Code(RoleLevel25ID, 17000, 25);
  let Жнец = ["жнец", "@жнец", RoleLevel30ID];
  if (args1.some(a => Жнец.find(word => word == a)))
    return Code(RoleLevel30ID, 20000, 30);
  let Братан = ["братан", "@братан", RoleLevel35ID];
  if (args1.some(a => Братан.find(word => word == a)))
    return Code(RoleLevel35ID, 24000, 35);
  let Разрушитель = ["разрушитель", "@разрушитель", RoleLevel40ID];
  if (args1.some(a => Разрушитель.find(word => word == a)))
    return Code(RoleLevel40ID, 26000, 40);
  let Титан = ["титан", "@титан", RoleLevel50ID];
  if (args1.some(a => Титан.find(word => word == a)))
    return Code(RoleLevel50ID, 35000, 50);
  let Повелитель = ["повелитель", "@повелитель", RoleLevel65ID];
  if (args1.some(a => Повелитель.find(word => word == a)))
    return Code(RoleLevel65ID, 40000, 65);
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
        .addField(`40000 OScoins`, `<@&${RoleLevel65ID}>`, true)
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

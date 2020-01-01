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
  try {
    let page = 1;
    let Gold = message.guild.roles.find("id", "643468636643917844");
    let Pink = message.guild.roles.find("id", "643468317646127113");
    let Purple = message.guild.roles.find("id", "643468096182419467");
    let Red = message.guild.roles.find("id", "643468557899923512");
    let Black = message.guild.roles.find("id", "643467642023313408");
    let Orange = message.guild.roles.find("id", "643467641834438687");
    let Blue = message.guild.roles.find("id", "643467939319775262");
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
    if (res.coins == undefined || res.coins == 0)
      return message.channel.send(embed);
    var args1 = message.content.toLowerCase().split(/ +/g);
    let Старейшина = ["старейшина", "@старейшина", RoleLevel5ID];
    let Защитник = ["защитник", "@защитник", RoleLevel10ID];
    let Капитан = ["капитан", "@капитан", RoleLevel15ID];
    let Коллекционер = ["коллекционер", "@коллекционер", RoleLevel20ID];
    let Легенда = ["легенда", "@легенда", RoleLevel25ID];
    let Жнец = ["жнец", "@жнец", RoleLevel30ID];
    let Братан = ["братан", "@братан", RoleLevel35ID];
    let Разрушитель = ["разрушитель", "@разрушитель", RoleLevel40ID];
    let Титан = ["титан", "@титан", RoleLevel50ID];
    let Повелитель = ["повелитель", "@повелитель", RoleLevel65ID];
    let Жёлтый = [
      "золото",
      "золотой",
      "жёлтый",
      "желтый",
      "@gold",
      "gold",
      Gold.id,
      "голт",
      "голд"
    ];
    let Розовый = ["розовый", "пинк", "pink", "@pink", Pink.id];
    let Фиолетовый = ["фиолетовый", "purple", "пипл", "@purple", Purple.id];
    let Красный = ["красный", "red", "@red", "ред", "рег", Red.id];
    let Чёрный = [
      "black",
      "@black",
      "чёрный",
      "меза",
      "чёрная",
      "блек",
      "блег",
      "блак",
      "благ",
      Black.id
    ];
    let Оранжевый = [
      "orange",
      "@orange",
      "оранжевый",
      "оранжовый",
      "орандж",
      "орендж",
      Orange.id
    ];
    let Синий = [
      "blue",
      "@blue",
      "синий",
      "синия",
      "синея",
      "блу",
      "блуе",
      "блай",
      Blue.id
    ];
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
      /*  if (
        message.guild.roles.find("name", "StarOS").position <
        message.guild.roles.find("id", ID).position
      )
        return message.channel.send(
          message.channel.send(
            new RichEmbed()
              .setColor("RED")
              .addField(
                `Произошли технические шоколадки.`,
                `(node:4151) UnhandledPromiseRejectionWarning: DiscordAPIError: Missing Permissions`
              )
          )
        );*/
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
      if (message.member.roles.has(roleS.id))
        return message.channel.send(embed2);
      if (Level > resLevel.level) return NoLevel(Level);
      if (money > res.coins) return No(money);
      Yes(money, roleS);
    }
    async function removeRole() {
      await message.member.removeRole(Gold.id);
      await message.member.removeRole(Pink.id);
      await message.member.removeRole(Purple.id);
      await message.member.removeRole(Red.id);
      await message.member.removeRole(Black.id);
      await message.member.removeRole(Orange.id);
      await message.member.removeRole(Blue.id);
    }
    if (args1.some(a => Жёлтый.find(word => word == a))) {
      await removeRole();
      return Code(Gold.id, 8000, undefined);
    }
    if (args1.some(a => Розовый.find(word => word == a))) {
      await removeRole();
      return Code(Pink.id, 6000, undefined);
    }
    if (args1.some(a => Фиолетовый.find(word => word == a))) {
      await removeRole();
      return Code(Purple.id, 4000, undefined);
    }
    if (args1.some(a => Красный.find(word => word == a))) {
      await removeRole();
      return Code(Red.id, 2000, undefined);
    }
    if (args1.some(a => Чёрный.find(word => word == a))) {
      await removeRole();
      return Code(Black.id, 1000, undefined);
    }
    if (args1.some(a => Оранжевый.find(word => word == a))) {
      await removeRole();
      return Code(Orange.id, 900, undefined);
    }
    if (args1.some(a => Синий.find(word => word == a))) {
      await removeRole();
      return Code(Blue.id, 500, undefined);
    }
    if (args1.some(a => Старейшина.find(word => word == a)))
      return Code(RoleLevel5ID, 3000, 5);
    if (args1.some(a => Защитник.find(word => word == a)))
      return Code(RoleLevel10ID, 5000, 10);
    if (args1.some(a => Капитан.find(word => word == a)))
      return Code(RoleLevel15ID, 10000, 15);
    if (args1.some(a => Коллекционер.find(word => word == a)))
      return Code(RoleLevel20ID, 13000, 20);
    if (args1.some(a => Легенда.find(word => word == a)))
      return Code(RoleLevel25ID, 17000, 25);
    if (args1.some(a => Жнец.find(word => word == a)))
      return Code(RoleLevel30ID, 20000, 30);
    if (args1.some(a => Братан.find(word => word == a)))
      return Code(RoleLevel35ID, 24000, 35);
    if (args1.some(a => Разрушитель.find(word => word == a)))
      return Code(RoleLevel40ID, 26000, 40);
    if (args1.some(a => Титан.find(word => word == a)))
      return Code(RoleLevel50ID, 35000, 50);
    if (args1.some(a => Повелитель.find(word => word == a)))
      return Code(RoleLevel65ID, 40000, 65);
    let embedRoleRank = new RichEmbed()
      .setColor(colors)
      .setDescription(`Магазин званий`)
      .setTimestamp()
      .setFooter(`Покупка ролей: /shop Роль`)
      .addField(`3000 OScoins`, `<@&${RoleLevel5ID}>`, true)
      .addField(`5000 OScoins`, `<@&${RoleLevel10ID}>`, true)
      .addField(`10000 OScoins`, `<@&${RoleLevel15ID}>`, true)
      .addField(`13000 OScoins`, `<@&${RoleLevel20ID}>`, true)
      .addField(`17000 OScoins`, `<@&${RoleLevel25ID}>`, true)
      .addField(`20000 OScoins`, `<@&${RoleLevel30ID}>`, true)
      .addField(`24000 OScoins`, `<@&${RoleLevel35ID}>`, true)
      .addField(`26000 OScoins`, `<@&${RoleLevel40ID}>`, true)
      .addField(`35000 OScoins`, `<@&${RoleLevel50ID}>`, true)
      .addField(`40000 OScoins`, `<@&${RoleLevel65ID}>`, true);
    let embedRoleColor = new RichEmbed()
      .setColor(colors)
      .setDescription("Магазин цветов.")
      .setTimestamp()
      .addField(`8000 OScoins`, `<@&${Gold.id}>`, true)
      .addField(`6000 OScoins`, `<@&${Pink.id}>`, true)
      .addField(`4000 OScoins`, `<@&${Purple.id}>`, true)
      .addField(`2000 OScoins`, `<@&${Red.id}>`, true)
      .addField(`1000 OScoins`, `<@&${Black.id}>`, true)
      .addField(`900 OScoins`, `<@&${Orange.id}>`, true)
      .addField(`500 OScoins`, `<@&${Blue.id}>`, true)
      .setFooter("Покупка ролей: /shop Роль");
    if (!args[0])
      return message.channel.send(embedRoleRank).then(async msg => {
        await msg.react("⏪").then(async r => {
          await msg.react("⏩");
          const backwardsFilter = (reaction, user) =>
            reaction.emoji.name === "⏪" && user.id === message.author.id;
          const forwardsFilter = (reaction, user) =>
            reaction.emoji.name === "⏩" && user.id === message.author.id;
          const backwards = msg.createReactionCollector(backwardsFilter);
          const forwards = msg.createReactionCollector(forwardsFilter);
          backwards.on("collect", r => {
            if (message.channel.type != "dm")
              msg.reactions.forEach(e => e.remove(message.author.id));
            if (page === 1) return;
            page--;
            if (page == 1) return msg.edit(embedRoleRank);
            if (page == 2) return msg.edit(embedRoleColor);
          });
          forwards.on("collect", r => {
            if (message.channel.type != "dm")
              msg.reactions.forEach(e => e.remove(message.author.id));
            if (page === 2) return;
            page++;
            if (page == 1) return msg.edit(embedRoleRank);
            if (page == 2) return msg.edit(embedRoleColor);
          });
        });
      });
    message.channel.send(
      new RichEmbed()
        .setColor("RED")
        .setFooter(message.author.username, message.author.displayAvatarURL)
        .setTimestamp()
        .setDescription(`Такого звания нет.`)
    );
  } catch (err) {
    message.channel.send(
      new RichEmbed()
        .setColor("RED")
        .addField(`Произошли технические шоколадки.`, err.message)
    );
  }
};
module.exports.command = {
  name: "shop"
};
